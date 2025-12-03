import { NextRequest, NextResponse } from 'next/server';
import { generatePaymentReference, convertToKobo } from '@/lib/paystack';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, cartItems, customerName, customerPhone } = body;
    
    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json(
        { error: 'Email and amount are required' },
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
    
    // Generate unique reference
    const reference = generatePaymentReference();
    
    // Convert amount to kobo
    const amountInKobo = convertToKobo(amount);
    
    // Prepare metadata
    const metadata = {
      cartItems: cartItems || [],
      customerName: customerName || 'Guest',
      customerPhone: customerPhone || '',
      paymentDate: new Date().toISOString(),
    };
    
    // Initialize payment with Paystack API
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
    
    if (!paystackSecretKey) {
      return NextResponse.json(
        { error: 'Payment system configuration error' },
        { status: 500 }
      );
    }
    
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amountInKobo,
        reference,
        metadata,
        currency: process.env.NEXT_PUBLIC_CURRENCY || 'NGN',
        channels: ['card', 'bank', 'ussd', 'mobile_money'],
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/payment/callback`,
      }),
    });
    
    const data = await response.json();
    
    if (!data.status) {
      return NextResponse.json(
        { error: data.message || 'Payment initialization failed' },
        { status: 400 }
      );
    }
    
    // Return payment details
    return NextResponse.json({
      success: true,
      reference,
      authorizationUrl: data.data.authorization_url,
      accessCode: data.data.access_code,
    });
    
  } catch (error) {
    console.error('Payment initialization error:', error);
    return NextResponse.json(
      { error: 'An error occurred while initializing payment' },
      { status: 500 }
    );
  }
}

