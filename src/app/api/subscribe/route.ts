import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getSubscriptionEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;
    
    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Generate email content
    const emailContent = getSubscriptionEmail({ email });
    
    // Send confirmation email to subscriber
    await sendEmail({
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });
    
    // Optionally, send notification to admin
    if (process.env.ADMIN_EMAIL) {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: 'New Newsletter Subscription',
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`,
      });
    }
    
    // Here you could also save to database or mailing list service
    // Examples:
    // - Save to database: await db.subscribers.create({ email, subscribedAt: new Date() });
    // - Add to Mailchimp: await mailchimp.lists.addListMember(listId, { email_address: email });
    // - Add to SendGrid: await sgClient.request({ method: 'POST', url: '/v3/marketing/contacts', body: { contacts: [{ email }] } });
    
    return NextResponse.json({
      success: true,
      message: 'Subscription successful! Welcome email sent.',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    );
  }
}

