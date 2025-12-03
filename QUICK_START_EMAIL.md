# 🚀 Quick Start: Email Configuration

## ✅ What's Been Set Up

Your website now has a complete email system for:
- ✉️ **Event Registration Confirmations** - Beautiful HTML emails sent to users when they register
- 📬 **Newsletter Subscriptions** - Welcome emails for new subscribers
- 🔔 **Admin Notifications** - Get notified when someone registers or subscribes
- 🎨 **Professional Templates** - Mobile-responsive, branded email designs

## 📋 Files Created

1. **`src/lib/email.ts`** - Email utility functions and templates
2. **`src/app/api/register-event/route.ts`** - API endpoint for event registrations
3. **`src/app/api/subscribe/route.ts`** - API endpoint for newsletter subscriptions
4. **`EMAIL_SETUP.md`** - Complete setup guide with all options
5. **`ENV_TEMPLATE.txt`** - Environment variables template
6. **Updated Forms** - Both event pages now send real emails

## 🎯 How to Get Started (3 Easy Steps)

### Step 1: Create `.env.local` File

In your project root folder (same location as `package.json`), create a new file named `.env.local`:

```bash
# For testing (emails will log to console)
EMAIL_SERVICE=console
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=your-email@gmail.com
```

### Step 2: Test It Out

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your website and:
   - Register for an event
   - Subscribe to updates

3. Check your terminal - you'll see the email content displayed!

### Step 3: Go Live (When Ready)

For production, choose an email service:

#### 🌟 Recommended: Resend (Easiest)

1. Sign up at [resend.com](https://resend.com) (Free: 3,000 emails/month)
2. Get your API key
3. Install: `npm install resend`
4. Update `.env.local`:
   ```env
   EMAIL_SERVICE=resend
   RESEND_API_KEY=re_your_key_here
   EMAIL_FROM=ReadAfrik <noreply@readafrik.com>
   NEXT_PUBLIC_APP_URL=https://yourwebsite.com
   ADMIN_EMAIL=admin@readafrik.com
   ```
5. Uncomment the Resend code in `src/lib/email.ts` (lines 21-29)

## 📧 Current Behavior

### Development Mode (`EMAIL_SERVICE=console`)
- ✅ Emails are logged to terminal/console
- ✅ No actual emails sent
- ✅ Perfect for testing
- ✅ No setup required

### Production Mode (with email service)
- ✅ Real emails sent to users
- ✅ Confirmation emails with event details
- ✅ Welcome emails for subscribers
- ✅ Admin notifications for new registrations

## 🎨 Email Templates Include

### Event Registration Email:
- Beautiful gradient header with celebration emoji
- Complete event details (date, time, location, price)
- "What to Bring" section
- Links back to your website
- Professional footer with contact info

### Subscription Email:
- Welcome message with celebration
- 4 benefits grid (Weekly digest, Early access, Offers, Resources)
- Call-to-action buttons
- Unsubscribe link
- Professional footer

## 📱 Features

- ✅ Mobile-responsive design
- ✅ Works on all email clients (Gmail, Outlook, Apple Mail, etc.)
- ✅ Professional HTML templates
- ✅ Plain text fallback for accessibility
- ✅ Error handling with user-friendly messages
- ✅ Email validation
- ✅ Admin notifications

## 🔧 Customization

Want to change the email design?

Edit `src/lib/email.ts`:
- Line 74+: Event registration template
- Line 175+: Subscription template

Colors, text, layout - it's all customizable!

## ⚙️ Advanced Options

Need more control? Check `EMAIL_SETUP.md` for:
- SendGrid integration
- Nodemailer/SMTP setup
- Gmail configuration
- Database integration
- Custom templates
- Production deployment

## 🆘 Troubleshooting

**Emails not showing in terminal?**
- Make sure `.env.local` exists
- Check `EMAIL_SERVICE=console` is set
- Restart your dev server

**Forms not submitting?**
- Check browser console for errors
- Verify API routes are running
- Check network tab in browser DevTools

**Ready for production but emails not sending?**
- Verify API keys are correct
- Check email service dashboard for errors
- Make sure domain is verified (for Resend/SendGrid)

## 📞 Support

- **Full Setup Guide**: See `EMAIL_SETUP.md`
- **Template File**: See `ENV_TEMPLATE.txt`
- **Email Service Docs**: 
  - [Resend](https://resend.com/docs)
  - [SendGrid](https://docs.sendgrid.com)
  - [Nodemailer](https://nodemailer.com)

---

**You're all set!** 🎉 Start with `EMAIL_SERVICE=console` to test everything, then switch to a production email service when you're ready to launch.

