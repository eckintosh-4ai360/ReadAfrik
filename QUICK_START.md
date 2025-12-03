# 🚀 Quick Start Guide - Paystack Payment Integration

## Ready to Accept Payments? Follow These 3 Simple Steps!

### Step 1: Get Your Paystack API Keys (5 minutes)

1. Go to [https://dashboard.paystack.com](https://dashboard.paystack.com)
2. Sign up or log in
3. Go to **Settings** → **API Keys & Webhooks**
4. Copy your:
   - **Public Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)

### Step 2: Update Your `.env.local` File (2 minutes)

Create or update `.env.local` in your project root:

```env
# Paystack Keys
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_key_here
PAYSTACK_SECRET_KEY=sk_test_your_key_here

# Currency
NEXT_PUBLIC_CURRENCY=NGN

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email (Gmail)
EMAIL_SERVICE=nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=admin@readafrik.com
```

**Important:** Replace the placeholder values with your actual credentials!

### Step 3: Test It! (3 minutes)

1. **Start your server:**
   ```bash
   npm run dev
   ```

2. **Visit your store:**
   - Go to http://localhost:3000/store
   - Add an item to cart
   - Click "Checkout"

3. **Make a test payment:**
   - Fill in your details (use your real email)
   - Click "Pay"
   - In Paystack popup, use this test card:
     - **Card:** 4084084084084081
     - **CVV:** 408
     - **Expiry:** Any future date (e.g., 12/25)
     - **PIN:** 0000

4. **Success!** 🎉
   - You should see the success page
   - Check your email for order confirmation

## 📊 What Happens Behind the Scenes?

When a customer makes a payment:

```
1. Customer clicks "Pay" 
   ↓
2. System initializes payment with Paystack
   ↓
3. Paystack popup opens (secure payment form)
   ↓
4. Customer enters card details
   ↓
5. Paystack processes payment
   ↓
6. System verifies payment with Paystack API
   ↓
7. Order confirmation email sent
   ↓
8. Customer redirected to success page
```

## 💳 More Test Cards

| Card Number | Result | PIN |
|------------|--------|-----|
| 4084084084084081 | ✅ Success | 0000 |
| 5060666666666666666 | ✅ Success | 1234 |
| 4084080000000409 | ❌ Insufficient Funds | 0000 |
| 5078507850785078510 | ❌ Invalid Transaction | 0000 |

## 🔍 Troubleshooting

**"Payment system not configured" error?**
- Make sure `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` is in `.env.local`
- Restart your dev server: `Ctrl+C` then `npm run dev`

**Paystack popup not opening?**
- Check browser console (F12) for errors
- Clear browser cache and try again

**Email not received?**
- Check spam folder
- Verify email settings in `.env.local`
- See `EMAIL_SETUP.md` for detailed email setup

## 🎓 Next Steps

### For Development:
- ✅ Test different payment scenarios
- ✅ Test multiple items in cart
- ✅ Test email notifications

### Before Going Live:
1. Complete Paystack KYC verification
2. Get live API keys (pk_live_ and sk_live_)
3. Update environment variables in production
4. Test with real cards (small amounts first)
5. Enable HTTPS on your domain

## 📚 More Information

- **Full Setup Guide:** See `PAYSTACK_SETUP.md`
- **Email Setup:** See `EMAIL_SETUP.md`
- **Paystack Docs:** [https://paystack.com/docs](https://paystack.com/docs)

---

## 🎉 That's It!

You're now ready to accept payments with Paystack. Happy selling! 🛍️

**Questions?** Check `PAYSTACK_SETUP.md` for detailed documentation.

