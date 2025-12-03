# Paystack Payment Integration Setup Guide

This guide will help you set up Paystack payment integration for your ReadAfrik website.

## 🎯 Overview

Paystack is integrated and ready to process payments for your store. The integration includes:

- ✅ Secure payment processing via Paystack Popup
- ✅ Support for Cards, Bank Transfer, USSD, and Mobile Money
- ✅ Payment verification and order confirmation
- ✅ Automated email receipts to customers
- ✅ Admin notifications for new orders
- ✅ Beautiful payment success/failure pages

## 📋 Prerequisites

Before you start, you'll need:
1. A Paystack account (Sign up at [paystack.com](https://paystack.com))
2. Your business email verified with Paystack
3. Access to your Paystack dashboard

## 🚀 Setup Instructions

### Step 1: Get Your Paystack API Keys

1. **Log in to Paystack Dashboard**
   - Go to [https://dashboard.paystack.com](https://dashboard.paystack.com)
   - Log in with your credentials

2. **Navigate to Settings**
   - Click on **Settings** in the left sidebar
   - Select **API Keys & Webhooks**

3. **Copy Your API Keys**
   You'll need two keys:
   - **Public Key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
   - **Secret Key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

   ⚠️ **Important:** Never share or commit your Secret Key to version control!

### Step 2: Add Environment Variables

Create or update your `.env.local` file in the root of your project:

```env
# Paystack Configuration
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_YOUR_PUBLIC_KEY_HERE
PAYSTACK_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Currency (NGN, GHS, ZAR, USD, KES)
NEXT_PUBLIC_CURRENCY=NGN

# Your app URL (important for callbacks)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email Configuration (for order confirmations)
EMAIL_SERVICE=nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=admin@readafrik.com
```

**Replace:**
- `pk_test_xxx` with your actual Paystack Public Key
- `sk_test_xxx` with your actual Paystack Secret Key
- Update email settings as per the `EMAIL_SETUP.md` guide

### Step 3: Test the Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test with Paystack Test Cards:**
   
   Navigate to your store and try purchasing an item. Use these test cards:
   
   | Card Number | CVV | Expiry | PIN | Description |
   |------------|-----|--------|-----|-------------|
   | 4084084084084081 | 408 | Any future date | 0000 | Success |
   | 5060666666666666666 | 123 | Any future date | 1234 | MasterCard - Success |
   | 507850785078507812 | 081 | Any future date | 0000 | Verve - Success |
   | 4084080000000409 | 408 | Any future date | 0000 | Insufficient Funds |

3. **Test Payment Flow:**
   - Add items to cart
   - Click "Checkout"
   - Fill in your details (use a real email to receive confirmation)
   - Click "Pay"
   - Paystack popup will open
   - Use a test card from the table above
   - Complete the payment
   - You should be redirected to the success page
   - Check your email for the order confirmation

### Step 4: Go Live (Production)

When you're ready to accept real payments:

1. **Complete Paystack KYC:**
   - Submit required documents in your Paystack dashboard
   - Wait for approval (usually 24-48 hours)

2. **Switch to Live Keys:**
   - Get your live API keys from Paystack dashboard
   - Update your `.env.local` (or production environment variables):
   ```env
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_YOUR_LIVE_PUBLIC_KEY
   PAYSTACK_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

3. **Deploy Your Application:**
   - Deploy to Vercel, Netlify, or your hosting provider
   - Add environment variables in your hosting dashboard
   - Test with real cards (small amounts first!)

## 🔧 Configuration Options

### Supported Currencies

The integration supports these currencies:
- **NGN** - Nigerian Naira (₦)
- **GHS** - Ghanaian Cedi (₵)
- **ZAR** - South African Rand (R)
- **USD** - US Dollar ($)
- **KES** - Kenyan Shilling (KSh)

Set your preferred currency in `.env.local`:
```env
NEXT_PUBLIC_CURRENCY=NGN
```

### Payment Channels

By default, all payment channels are enabled:
- Card (Visa, Mastercard, Verve)
- Bank Transfer
- USSD
- Mobile Money (MTN, Airtel, etc.)

To customize channels, edit `src/app/api/payment/initialize/route.ts`:
```typescript
channels: ['card', 'bank'], // Only card and bank transfer
```

## 📁 File Structure

Here's what was created/modified:

```
src/
├── lib/
│   └── paystack.ts                          # Paystack utility functions
├── app/
│   └── api/
│       └── payment/
│           ├── initialize/
│           │   └── route.ts                 # Initialize payment API
│           └── verify/
│               └── route.ts                 # Verify payment API
│   └── payment/
│       └── callback/
│           └── page.tsx                     # Success/failure page
├── components/
│   ├── PaymentModal.tsx                     # Updated with Paystack
│   └── PaystackScript.tsx                   # Loads Paystack JS
└── app/layout.tsx                           # Added PaystackScript
```

## 🔒 Security Best Practices

1. **Never expose your Secret Key:**
   - Keep it in `.env.local` (not committed to git)
   - Only use it in server-side API routes
   - Add `.env.local` to `.gitignore`

2. **Always verify payments server-side:**
   - The integration already does this in `/api/payment/verify`
   - Never trust client-side payment confirmations

3. **Use HTTPS in production:**
   - Paystack requires HTTPS for live payments
   - Most hosting providers (Vercel, Netlify) provide this automatically

4. **Monitor your transactions:**
   - Check your Paystack dashboard regularly
   - Set up email notifications for transactions
   - Review failed payments

## 📧 Email Notifications

After successful payment, the system sends:

1. **Customer Confirmation Email:**
   - Order details
   - Items purchased
   - Payment reference
   - Next steps

2. **Admin Notification Email:**
   - New order alert
   - Customer details
   - Items and amount
   - Payment method

Configure email settings in `.env.local` following the `EMAIL_SETUP.md` guide.

## 🐛 Troubleshooting

### "Payment system not configured" error
- Check that `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` is set in `.env.local`
- Make sure you've restarted your dev server after adding env variables

### Paystack popup doesn't open
- Check browser console for errors
- Verify Paystack script is loading (check Network tab)
- Try clearing browser cache

### Payment succeeds but verification fails
- Check that `PAYSTACK_SECRET_KEY` is correct
- Verify your API routes are accessible
- Check server logs for errors

### Emails not sending
- Follow the `EMAIL_SETUP.md` guide
- Verify email credentials are correct
- Check email service quotas

### "Invalid API key" error
- Ensure you're using the correct key for your environment (test vs live)
- Check for spaces or typos in your env variables
- Regenerate keys in Paystack dashboard if needed

## 🧪 Testing Scenarios

Test these scenarios before going live:

- ✅ Successful payment with card
- ✅ Successful payment with bank transfer
- ✅ Failed payment (insufficient funds)
- ✅ Payment timeout (close popup without paying)
- ✅ Multiple items in cart
- ✅ Email delivery
- ✅ Admin notifications
- ✅ Payment callback page

## 📊 Monitoring & Analytics

Track your payments through:

1. **Paystack Dashboard:**
   - Real-time transaction data
   - Success/failure rates
   - Revenue analytics
   - Customer insights

2. **Server Logs:**
   - Payment initialization requests
   - Verification results
   - Email delivery status

3. **Email Confirmations:**
   - Customer receipts
   - Admin notifications

## 🆘 Support

Need help?

- **Paystack Documentation:** [https://paystack.com/docs](https://paystack.com/docs)
- **Paystack Support:** support@paystack.com
- **Test Cards:** [https://paystack.com/docs/payments/test-payments](https://paystack.com/docs/payments/test-payments)

## 📝 Additional Resources

- [Paystack API Reference](https://paystack.com/docs/api)
- [Paystack Integration Guide](https://paystack.com/docs/payments/accept-payments)
- [Paystack Security Best Practices](https://paystack.com/docs/security)

---

## ✅ Quick Checklist

Before going live:

- [ ] Paystack account created and verified
- [ ] KYC completed and approved
- [ ] Live API keys obtained
- [ ] Environment variables set in production
- [ ] Test transactions completed successfully
- [ ] Email notifications working
- [ ] HTTPS enabled on production domain
- [ ] Payment success/failure flows tested
- [ ] Error handling tested
- [ ] Customer support process defined

---

**🎉 Congratulations!** Your Paystack integration is complete. Start accepting payments and grow your business!

