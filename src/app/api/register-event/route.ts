import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getEventRegistrationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventId, eventTitle, eventDate, eventTime, eventLocation, eventPrice } = body;
    
    // Validate required fields
    if (!name || !email || !eventTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
    
    // Format date for email
    const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Generate email content
    const emailContent = getEventRegistrationEmail({
      name,
      eventTitle,
      eventDate: formattedDate,
      eventTime,
      eventLocation,
      eventPrice,
    });
    
    // Send confirmation email to user
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
        subject: `New Event Registration: ${eventTitle}`,
        html: `
          <h2>New Event Registration</h2>
          <p><strong>Event:</strong> ${eventTitle}</p>
          <p><strong>Attendee:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${eventTime}</p>
        `,
        text: `New Event Registration\n\nEvent: ${eventTitle}\nAttendee: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}`,
      });
    }
    
    // Here you could also save to database
    // await db.eventRegistrations.create({ name, email, phone, eventId, ... });
    
    return NextResponse.json({
      success: true,
      message: 'Registration successful! Confirmation email sent.',
    });
  } catch (error) {
    console.error('Event registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration. Please try again.' },
      { status: 500 }
    );
  }
}

