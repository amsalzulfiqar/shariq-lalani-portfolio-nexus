
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
    const { to, subject, name, email, message } = await req.json()
    
    // Always use info@shariqlalani.com as the recipient
    const recipientEmail = "arsalanzulfiqar1993@gmail.com"

    if (!subject || !name || !email || !message) {
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
      
      return new Response(
        JSON.stringify({ 
          success: false,
          message: "Email service configuration is incomplete. Please check SMTP settings."
        }),
        {
          status: 500,
          headers: responseHeaders,
        }
      )
    }

    try {
      const client = new SmtpClient()
      
      await client.connectTLS({
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        username: SMTP_USERNAME,
        password: SMTP_PASSWORD,
      })

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
          message: "Failed to send email. Please check your SMTP configuration.",
          error: emailError.toString()
        }),
        {
          status: 500,
          headers: responseHeaders,
        }
      )
    }
  } catch (error) {
    console.error('Request error:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        message: 'An unexpected error occurred'
      }),
      {
        status: 500,
        headers: responseHeaders,
      }
    )
  }
})
