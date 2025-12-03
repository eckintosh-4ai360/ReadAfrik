import { NextRequest, NextResponse } from 'next/server';
import { verifyPaystackPayment, convertFromKobo } from '@/lib/paystack';
import { sendEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const reference = searchParams.get('reference');
    
    if (!reference) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      );
    }
    
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
    
    if (!paystackSecretKey) {
      return NextResponse.json(
        { error: 'Payment system configuration error' },
        { status: 500 }
      );
    }
    
    // Verify payment with Paystack
    const verificationData = await verifyPaystackPayment(reference, paystackSecretKey);
    
    if (!verificationData.status) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }
    
    const { data } = verificationData;
    
    // Check if payment was successful
    if (data.status !== 'success') {
      return NextResponse.json({
        success: false,
        status: data.status,
        message: 'Payment was not successful',
      });
    }
    
    // Payment successful - extract details
    const paymentDetails = {
      reference: data.reference,
      amount: convertFromKobo(data.amount),
      currency: data.currency,
      status: data.status,
      paidAt: data.paid_at,
      customer: {
        email: data.customer.email,
        name: data.metadata?.customerName || 'Guest',
        phone: data.metadata?.customerPhone || '',
      },
      cartItems: data.metadata?.cartItems || [],
      channel: data.channel,
      transactionDate: data.transaction_date,
    };
    
    // Send order confirmation email
    try {
      await sendOrderConfirmationEmail(paymentDetails);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the verification if email fails
    }
    
    return NextResponse.json({
      success: true,
      payment: paymentDetails,
    });
    
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'An error occurred while verifying payment' },
      { status: 500 }
    );
  }
}

// Helper function to send order confirmation email
async function sendOrderConfirmationEmail(paymentDetails: any) {
  const { subject, html, text } = getOrderConfirmationEmail(paymentDetails);
  
  await sendEmail({
    to: paymentDetails.customer.email,
    subject,
    html,
    text,
  });
  
  // Send notification to admin
  if (process.env.ADMIN_EMAIL) {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Order: ${paymentDetails.reference}`,
      html: getAdminNotificationEmail(paymentDetails).html,
    });
  }
}

// Order confirmation email template
function getOrderConfirmationEmail(paymentDetails: any) {
  const subject = `Order Confirmation - ${paymentDetails.reference}`;
  
  const itemsHtml = paymentDetails.cartItems
    .map((item: any) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${item.title}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">${paymentDetails.currency} ${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `)
    .join('');
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">✅ Payment Successful!</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <p style="font-size: 18px; color: #1f2937;">Hello ${paymentDetails.customer.name},</p>
    
    <p style="font-size: 16px; color: #4b5563;">
      Thank you for your purchase! Your payment has been successfully processed.
    </p>
    
    <div style="background: white; padding: 25px; margin: 25px 0; border-radius: 8px; border-left: 4px solid #10b981;">
      <h2 style="color: #10b981; margin-top: 0; font-size: 22px;">Order Details</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Order Reference:</td>
          <td style="padding: 10px 0; color: #1f2937; text-align: right;">${paymentDetails.reference}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Payment Date:</td>
          <td style="padding: 10px 0; color: #1f2937; text-align: right;">${new Date(paymentDetails.paidAt).toLocaleDateString()}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Payment Method:</td>
          <td style="padding: 10px 0; color: #1f2937; text-align: right;">${paymentDetails.channel}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: white; padding: 25px; margin: 25px 0; border-radius: 8px;">
      <h3 style="color: #1f2937; margin-top: 0; font-size: 18px;">Items Purchased</h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th style="padding: 10px; text-align: left; color: #6b7280;">Item</th>
            <th style="padding: 10px; text-align: center; color: #6b7280;">Qty</th>
            <th style="padding: 10px; text-align: right; color: #6b7280;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
        <tfoot>
          <tr style="font-weight: bold; background: #f9fafb;">
            <td colspan="2" style="padding: 15px; text-align: left; color: #1f2937;">Total</td>
            <td style="padding: 15px; text-align: right; color: #10b981; font-size: 18px;">${paymentDetails.currency} ${paymentDetails.amount.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    
    <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; border-radius: 4px; margin: 25px 0;">
      <p style="color: #047857; margin: 0; font-size: 16px;">
        <strong>📦 What's Next?</strong><br>
        Your order is being processed. You will receive access details or shipping information within 24-48 hours.
      </p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/store" 
         style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
        Continue Shopping
      </a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="font-size: 14px; color: #6b7280; text-align: center;">
      Questions? Contact us at <a href="mailto:support@readafrik.com" style="color: #10b981;">support@readafrik.com</a><br>
      <strong>ReadAfrik</strong> - Empowering Your Learning Journey
    </p>
  </div>
</body>
</html>
  `;
  
  const text = `
Order Confirmation - ${paymentDetails.reference}

Hello ${paymentDetails.customer.name},

Thank you for your purchase! Your payment has been successfully processed.

Order Details:
- Order Reference: ${paymentDetails.reference}
- Payment Date: ${new Date(paymentDetails.paidAt).toLocaleDateString()}
- Payment Method: ${paymentDetails.channel}
- Total Amount: ${paymentDetails.currency} ${paymentDetails.amount.toFixed(2)}

Items Purchased:
${paymentDetails.cartItems
  .map(
    (item: any) =>
      `- ${item.title} (Qty: ${item.quantity}) - ${paymentDetails.currency} ${(item.price * item.quantity).toFixed(2)}`
  )
  .join('\n')}

Your order is being processed. You will receive access details or shipping information within 24-48 hours.

Questions? Contact us at support@readafrik.com

ReadAfrik - Empowering Your Learning Journey
  `;
  
  return { subject, html, text };
}

// Admin notification email template
function getAdminNotificationEmail(paymentDetails: any) {
  const itemsList = paymentDetails.cartItems
    .map((item: any) => `<li>${item.title} - Qty: ${item.quantity} - ${paymentDetails.currency} ${(item.price * item.quantity).toFixed(2)}</li>`)
    .join('');
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Order Notification</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #10b981;">🛒 New Order Received</h2>
  
  <p><strong>Order Reference:</strong> ${paymentDetails.reference}</p>
  <p><strong>Customer:</strong> ${paymentDetails.customer.name} (${paymentDetails.customer.email})</p>
  <p><strong>Phone:</strong> ${paymentDetails.customer.phone || 'Not provided'}</p>
  <p><strong>Total Amount:</strong> ${paymentDetails.currency} ${paymentDetails.amount.toFixed(2)}</p>
  <p><strong>Payment Method:</strong> ${paymentDetails.channel}</p>
  <p><strong>Payment Date:</strong> ${new Date(paymentDetails.paidAt).toLocaleString()}</p>
  
  <h3>Items:</h3>
  <ul>
    ${itemsList}
  </ul>
  
  <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666;">
    This is an automated notification from ReadAfrik payment system.
  </p>
</body>
</html>
  `;
  
  return { html };
}

