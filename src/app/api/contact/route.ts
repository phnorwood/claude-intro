import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // TODO: Implement email sending logic
    // For now, just log the form data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
    });

    // In a real application, you would send an email here using:
    // - Resend: https://resend.com/docs/send-with-nextjs
    // - SendGrid: https://www.twilio.com/docs/sendgrid/for-developers/sending-email/quickstart-nodejs
    // - Nodemailer: https://nodemailer.com/

    // Example with Resend (uncomment when configured):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO || 'your.email@example.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
