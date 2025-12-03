// Email utility functions
// You can use any email service: Resend, SendGrid, Nodemailer, etc.

// Uncomment the import for your chosen email service:
import { Resend } from 'resend';
// import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  const emailService = process.env.EMAIL_SERVICE || 'console';
  
  if (emailService === 'console') {
    // Development: Log to console
    console.log('📧 Email would be sent:');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    console.log('Text:', text);
    return { success: true, messageId: 'dev-' + Date.now() };
  }
  
  // RESEND (Recommended for Next.js)
  // 1. Run: npm install resend
  // 2. Uncomment the import at the top of this file
  // 3. Uncomment this section and set EMAIL_SERVICE=resend
  if (emailService === 'resend') {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ReadAfrik <noreply@readafrik.com>',
      to,
      subject,
      html,
    });
    return data;
  }
  
  // SENDGRID
  // 1. Run: npm install @sendgrid/mail
  // 2. Uncomment the import at the top of this file
  // 3. Uncomment this section and set EMAIL_SERVICE=sendgrid
  // if (emailService === 'sendgrid') {
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  //   const msg = { to, from: process.env.EMAIL_FROM!, subject, html, text };
  //   await sgMail.send(msg);
  //   return { success: true, messageId: 'sendgrid-' + Date.now() };
  // }
  
  // NODEMAILER (SMTP)
  // 1. Run: npm install nodemailer
  // 2. Uncomment the import at the top of this file
  // 3. Uncomment this section and set EMAIL_SERVICE=nodemailer
  if (emailService === 'nodemailer') {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
      text,
    });
    return { success: true, messageId: info.messageId };
  }
  
  return { success: true, messageId: 'placeholder' };
}

// Event registration confirmation email
export function getEventRegistrationEmail(data: {
  name: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventPrice: string;
}) {
  const subject = `Registration Confirmed: ${data.eventTitle}`;
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Registration Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Registration Confirmed!</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <p style="font-size: 18px; color: #1f2937;">Hello ${data.name},</p>
    
    <p style="font-size: 16px; color: #4b5563;">
      Thank you for registering for our event! We're excited to have you join us.
    </p>
    
    <div style="background: white; padding: 25px; margin: 25px 0; border-radius: 8px; border-left: 4px solid #667eea;">
      <h2 style="color: #667eea; margin-top: 0; font-size: 22px;">${data.eventTitle}</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold; width: 100px;">📅 Date:</td>
          <td style="padding: 10px 0; color: #1f2937;">${data.eventDate}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">⏰ Time:</td>
          <td style="padding: 10px 0; color: #1f2937;">${data.eventTime}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">📍 Location:</td>
          <td style="padding: 10px 0; color: #1f2937;">${data.eventLocation}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">💰 Price:</td>
          <td style="padding: 10px 0; color: #1f2937;">${data.eventPrice}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1e40af; margin-top: 0; font-size: 18px;">📋 What to Bring:</h3>
      <ul style="color: #1f2937; margin: 10px 0; padding-left: 20px;">
        <li>A notebook and pen for taking notes</li>
        <li>Your enthusiasm and questions!</li>
        <li>Any materials mentioned in the event description</li>
      </ul>
    </div>
    
    <p style="font-size: 16px; color: #4b5563;">
      You will receive a reminder email 24 hours before the event. If you need to cancel your registration, 
      please contact us at <a href="mailto:events@readafrik.com" style="color: #667eea; text-decoration: none;">events@readafrik.com</a>.
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/events" 
         style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
        View All Events
      </a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="font-size: 14px; color: #6b7280; text-align: center;">
      Questions? Contact us at <a href="mailto:support@readafrik.com" style="color: #667eea;">support@readafrik.com</a><br>
      <strong>ReadAfrik</strong> - Empowering Your Learning Journey
    </p>
  </div>
</body>
</html>
  `;
  
  const text = `
Registration Confirmed: ${data.eventTitle}

Hello ${data.name},

Thank you for registering for our event! We're excited to have you join us.

Event Details:
- Event: ${data.eventTitle}
- Date: ${data.eventDate}
- Time: ${data.eventTime}
- Location: ${data.eventLocation}
- Price: ${data.eventPrice}

You will receive a reminder email 24 hours before the event.

Questions? Contact us at support@readafrik.com

ReadAfrik - Empowering Your Learning Journey
  `;
  
  return { subject, html, text };
}

// Newsletter subscription confirmation email
export function getSubscriptionEmail(data: {
  email: string;
}) {
  const subject = 'Welcome to ReadAfrik Event Updates!';
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🎊 Welcome to ReadAfrik!</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <p style="font-size: 18px; color: #1f2937;">Thank you for subscribing!</p>
    
    <p style="font-size: 16px; color: #4b5563;">
      You've successfully subscribed to our event updates. Get ready to stay informed about:
    </p>
    
    <div style="background: white; padding: 25px; margin: 25px 0; border-radius: 8px;">
      <table style="width: 100%;">
        <tr>
          <td style="padding: 15px; text-align: center;">
            <div style="font-size: 40px;">📧</div>
            <h3 style="color: #3b82f6; margin: 10px 0; font-size: 18px;">Weekly Digest</h3>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">Latest events and workshops</p>
          </td>
          <td style="padding: 15px; text-align: center;">
            <div style="font-size: 40px;">⚡</div>
            <h3 style="color: #3b82f6; margin: 10px 0; font-size: 18px;">Early Access</h3>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">Register before everyone else</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px; text-align: center;">
            <div style="font-size: 40px;">🎁</div>
            <h3 style="color: #3b82f6; margin: 10px 0; font-size: 18px;">Exclusive Offers</h3>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">Special discounts and deals</p>
          </td>
          <td style="padding: 15px; text-align: center;">
            <div style="font-size: 40px;">📚</div>
            <h3 style="color: #3b82f6; margin: 10px 0; font-size: 18px;">Free Resources</h3>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">Educational materials & guides</p>
          </td>
        </tr>
      </table>
    </div>
    
    <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; border-radius: 4px; margin: 25px 0;">
      <p style="color: #047857; margin: 0; font-size: 16px;">
        <strong>✓ Subscription confirmed!</strong><br>
        Your email ${data.email} has been added to our mailing list.
      </p>
    </div>
    
    <p style="font-size: 16px; color: #4b5563;">
      We respect your privacy and will never share your email with third parties. 
      You can unsubscribe at any time by clicking the link at the bottom of any email.
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/events" 
         style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">
        Browse Events
      </a>
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/store/free" 
         style="background: white; color: #3b82f6; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; border: 2px solid #3b82f6;">
        Free Resources
      </a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="font-size: 14px; color: #6b7280; text-align: center;">
      Questions? Contact us at <a href="mailto:support@readafrik.com" style="color: #3b82f6;">support@readafrik.com</a><br>
      <strong>ReadAfrik</strong> - Empowering Your Learning Journey<br>
      <a href="#" style="color: #9ca3af; font-size: 12px; text-decoration: none;">Unsubscribe</a>
    </p>
  </div>
</body>
</html>
  `;
  
  const text = `
Welcome to ReadAfrik Event Updates!

Thank you for subscribing!

You've successfully subscribed to our event updates. Get ready to stay informed about:

✓ Weekly event digest
✓ Early registration access  
✓ Exclusive discounts
✓ Free educational resources

Your email ${data.email} has been added to our mailing list.

We respect your privacy and will never share your email with third parties.

Questions? Contact us at support@readafrik.com

ReadAfrik - Empowering Your Learning Journey
  `;
  
  return { subject, html, text };
}

