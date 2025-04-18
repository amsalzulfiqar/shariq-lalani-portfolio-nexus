
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts'

const SMTP_HOST = Deno.env.get('SMTP_HOST') || '';
const SMTP_PORT = parseInt(Deno.env.get('SMTP_PORT') || '587');
const SMTP_USERNAME = Deno.env.get('SMTP_USERNAME') || '';
const SMTP_PASSWORD = Deno.env.get('SMTP_PASSWORD') || '';
const EMAIL_FROM = Deno.env.get('EMAIL_FROM') || 'info@shariqlalani.com';

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get request body
    const { to, subject, name, email, message } = await req.json()

    // Validate required fields
    if (!to || !subject || !name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Check if SMTP configuration is available
    if (!SMTP_HOST || !SMTP_USERNAME || !SMTP_PASSWORD) {
      console.error('SMTP configuration missing');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Connect to SMTP server
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USERNAME,
      password: SMTP_PASSWORD,
    });

    // Prepare email message
    const emailBody = `
      Name: ${name}
      Email: ${email}
      
      Message: 
      ${message}
    `;

    // Send email
    await client.send({
      from: EMAIL_FROM,
      to: to,
      subject: subject,
      content: emailBody,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
