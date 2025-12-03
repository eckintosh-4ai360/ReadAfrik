# Email Configuration Setup Guide

This guide will help you set up email functionality for event registrations and newsletter subscriptions.

## 📧 Email Features

- ✅ Event registration confirmation emails with beautiful HTML templates
- ✅ Newsletter subscription welcome emails
- ✅ Admin notifications for new registrations
- ✅ Console logging for development
- ✅ Production-ready for multiple email services

## 🚀 Quick Setup

### Step 1: Choose Your Email Service

You have several options:

#### Option 1: Resend (Recommended for Next.js) ⭐
```bash
npm install resend
```

**Pros:** 
- Built for Next.js
- Simple API
- Free tier: 3,000 emails/month
- Great deliverability

**Setup:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from [dashboard](https://resend.com/api-keys)
3. Add to your `.env.local`:

```env
EMAIL_SERVICE=resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=ReadAfrik <noreply@yourdomain.com>
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=admin@readafrik.com
```

4. Update `src/lib/email.ts` to uncomment the Resend section:
```typescript
const emailService = process.env.EMAIL_SERVICE || 'console';

if (emailService === 'resend') {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await resend.emails.send({
    from: process.env.EMAIL_FROM || 'ReadAfrik <noreply@readafrik.com>',
    to,
    subject,
    html,
  });
  return data;
}
```

#### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

**Pros:**
- Established service
- Free tier: 100 emails/day
- Advanced features

**Setup:**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key from [settings](https://app.sendgrid.com/settings/api_keys)
3. Add to `.env.local`:

```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=admin@readafrik.com
```

#### Option 3: Nodemailer (SMTP)
```bash
npm install nodemailer
```

**Pros:**
- Works with any SMTP server
- Gmail, Outlook, Mailgun, etc.
- Full control

**Setup for Gmail:**
1. Enable 2-factor authentication on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords)
3. Add to `.env.local`:

```env
EMAIL_SERVICE=nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=admin@readafrik.com
```

### Step 2: Create `.env.local` File

Create a file named `.env.local` in your project root (same directory as `package.json`):

```bash
# Copy from one of the options above
EMAIL_SERVICE=console  # Change to 'resend', 'sendgrid', or 'nodemailer' in production
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=admin@readafrik.com
```

### Step 3: Test in Development

By default, the system uses `EMAIL_SERVICE=console` which logs emails to the terminal instead of sending them. This is perfect for development!

**To test:**
1. Start your development server: `npm run dev`
2. Register for an event or subscribe to updates
3. Check your terminal - you'll see the email content logged

### Step 4: Deploy to Production

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform
2. Change `EMAIL_SERVICE` from `console` to your chosen service
3. Verify your domain with your email service
4. Test thoroughly!

## 📝 Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `EMAIL_SERVICE` | Yes | Email service to use | `console`, `resend`, `sendgrid`, `nodemailer` |
| `NEXT_PUBLIC_APP_URL` | Yes | Your app URL | `https://readafrik.com` |
| `ADMIN_EMAIL` | No | Receives registration notifications | `admin@readafrik.com` |
| `EMAIL_FROM` | Yes* | Sender email address | `ReadAfrik <noreply@readafrik.com>` |
| `RESEND_API_KEY` | If using Resend | Resend API key | `re_xxxx` |
| `SENDGRID_API_KEY` | If using SendGrid | SendGrid API key | `SG.xxxx` |
| `SMTP_HOST` | If using SMTP | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | If using SMTP | SMTP server port | `587` |
| `SMTP_USER` | If using SMTP | SMTP username | `user@gmail.com` |
| `SMTP_PASS` | If using SMTP | SMTP password | `app-password` |

*Required for production

## 🎨 Email Templates

The system includes two beautiful, responsive email templates:

### 1. Event Registration Confirmation
- Beautiful gradient header
- Event details table
- What to bring section
- Reminder information
- Mobile-responsive

### 2. Newsletter Subscription Welcome
- Welcome message
- Benefits grid (4 features)
- Call-to-action buttons
- Unsubscribe link
- Mobile-responsive

Templates are in `src/lib/email.ts` and can be customized!

## 🔧 Customization

### Modify Email Templates

Edit `src/lib/email.ts`:

```typescript
export function getEventRegistrationEmail(data) {
  // Customize subject
  const subject = `Your Custom Subject: ${data.eventTitle}`;
  
  // Customize HTML
  const html = `
    <!-- Your custom HTML -->
  `;
  
  return { subject, html, text };
}
```

### Add More Email Types

Create new functions in `src/lib/email.ts`:

```typescript
export function getEventReminderEmail(data) {
  // 24-hour reminder email
}

export function getEventCancellationEmail(data) {
  // Cancellation email
}
```

## 📊 Database Integration (Optional)

To save registrations to a database:

1. Install your database client:
```bash
npm install @prisma/client  # For PostgreSQL/MySQL
# or
npm install mongodb  # For MongoDB
```

2. Update API routes in `src/app/api/register-event/route.ts`:

```typescript
// After sending email
await prisma.registration.create({
  data: {
    name,
    email,
    phone,
    eventId,
    registeredAt: new Date(),
  },
});
```

## 🧪 Testing

### Development Testing
```bash
# Terminal will show:
📧 Email would be sent:
To: user@example.com
Subject: Registration Confirmed: Event Name
HTML: [full email content]
```

### Production Testing
1. Use your personal email for initial tests
2. Check spam folders
3. Test on multiple email clients (Gmail, Outlook, etc.)
4. Use tools like [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com) for comprehensive testing

## ⚠️ Common Issues

### Emails not sending?
1. Check environment variables are set correctly
2. Verify API keys are valid
3. Check email service quotas
4. Look for errors in terminal/logs

### Emails going to spam?
1. Verify your domain (SPF, DKIM records)
2. Use a professional email address
3. Don't use all caps or excessive exclamation marks
4. Include an unsubscribe link

### Gmail "Less secure app" error?
- Use App Passwords instead of your regular password
- Enable 2-factor authentication first

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Email HTML Best Practices](https://www.campaignmonitor.com/dev-resources/guides/coding/)

## 🆘 Support

Need help? Contact the development team or check:
- API route logs in terminal
- Email service dashboard
- Browser console for errors

---

**Ready to send emails?** Start with `EMAIL_SERVICE=console` for testing, then switch to a production service when you're ready to launch! 🚀

