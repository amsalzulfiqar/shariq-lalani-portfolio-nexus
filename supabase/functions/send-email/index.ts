
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts'

const SMTP_HOST = Deno.env.get('SMTP_HOST')
const SMTP_PORT = parseInt(Deno.env.get('SMTP_PORT') || '587')
const SMTP_USERNAME = Deno.env.get('SMTP_USERNAME')
const SMTP_PASSWORD = Deno.env.get('SMTP_PASSWORD')
const EMAIL_FROM = Deno.env.get('EMAIL_FROM')

serve(async (req) => {
  // Always add CORS headers to all responses
  const responseHeaders = {
    ...corsHeaders,
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: responseHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()
    
    // Always use info@shariqlalani.com as the recipient
    const recipientEmail = "info@shariqlalani.com"

    // Validate that required fields are present
    if (!subject || !name || !email || !message) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ 
          success: false,
          message: 'Missing required fields' 
        }),
        {
          status: 400,
          headers: responseHeaders,
        }
      )
    }

    // Verify SMTP configuration
    if (!SMTP_HOST || !SMTP_USERNAME || !SMTP_PASSWORD || !EMAIL_FROM) {
      console.error('SMTP configuration missing:', { 
        host: !!SMTP_HOST, 
        username: !!SMTP_USERNAME,
        password: !!SMTP_PASSWORD,
        from: !!EMAIL_FROM 
      })
      
      // Return a more specific error with status 400 instead of 500
      // This helps differentiate configuration issues from server errors
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "smtp_config_missing",
          message: "Email service configuration is incomplete. Please configure SMTP settings."
        }),
        {
          status: 400, // Changed from 500 to 400 to indicate it's a configuration issue
          headers: responseHeaders,
        }
      )
    }

    try {
      console.log('Connecting to SMTP server:', SMTP_HOST);
      const client = new SmtpClient()
      
      await client.connectTLS({
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        username: SMTP_USERNAME,
        password: SMTP_PASSWORD,
      })

      console.log('Connected to SMTP server, sending email');
      
      const emailBody = `
        Name: ${name}
        Email: ${email}
        
        Message: 
        ${message}
      `

      await client.send({
        from: EMAIL_FROM,
        to: recipientEmail,
        subject: `[Website Contact] ${subject}`,
        content: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #eee;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      })

      console.log('Email sent successfully');
      await client.close()

      return new Response(
        JSON.stringify({ 
          success: true,
          message: "Your message has been sent successfully!" 
        }),
        {
          status: 200,
          headers: responseHeaders,
        }
      )
    } catch (emailError) {
      console.error('SMTP error:', emailError)
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "smtp_connection_error",
          message: "Failed to send email. Please check your SMTP configuration.",
          details: emailError.toString()
        }),
        {
          status: 400, // Changed from 500 to 400 for configuration issues
          headers: responseHeaders,
        }
      )
    }
  } catch (error) {
    console.error('Request error:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: "request_error",
        message: 'An unexpected error occurred'
      }),
      {
        status: 500,
        headers: responseHeaders,
      }
    )
  }
})
