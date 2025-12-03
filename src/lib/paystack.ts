// Paystack utility functions

export interface PaystackConfig {
  publicKey: string;
  email: string;
  amount: number; // in kobo (smallest currency unit)
  reference: string;
  currency?: string;
  metadata?: Record<string, any>;
  channels?: string[];
  callback?: (response: any) => void;
  onClose?: () => void;
}

export interface PaymentMetadata {
  cartItems: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
  }>;
  customerName?: string;
  customerPhone?: string;
}

/**
 * Generate a unique payment reference
 */
export function generatePaymentReference(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `READAFRIK-${timestamp}-${random}`;
}

/**
 * Convert amount to kobo (Paystack requires amount in kobo)
 * 1 Naira = 100 kobo, 1 Dollar = 100 cents, 1 Cedi = 100 pesewas
 */
export function convertToKobo(amount: number): number {
  return Math.round(amount * 100);
}

/**
 * Convert kobo to main currency
 */
export function convertFromKobo(amountInKobo: number): number {
  return amountInKobo / 100;
}

/**
 * Initialize Paystack popup
 */
export function initializePaystack(config: PaystackConfig): void {
  // @ts-ignore - PaystackPop is loaded from CDN
  if (typeof window !== 'undefined' && window.PaystackPop) {
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: config.publicKey,
      email: config.email,
      amount: config.amount,
      ref: config.reference,
      currency: config.currency || 'NGN',
      channels: config.channels || ['card', 'bank', 'ussd', 'mobile_money'],
      metadata: config.metadata,
      callback: (response: any) => {
        if (config.callback) {
          config.callback(response);
        }
      },
      onClose: () => {
        if (config.onClose) {
          config.onClose();
        }
      },
    });

    handler.openIframe();
  } else {
    console.error('Paystack script not loaded');
    alert('Payment system is not available. Please refresh the page and try again.');
  }
}

/**
 * Verify payment with Paystack
 * This should be called from the server-side
 */
export async function verifyPaystackPayment(reference: string, secretKey: string) {
  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
}

/**
 * Get supported currencies
 */
export const SUPPORTED_CURRENCIES = {
  NGN: { name: 'Nigerian Naira', symbol: '₦' },
  GHS: { name: 'Ghanaian Cedi', symbol: '₵' },
  ZAR: { name: 'South African Rand', symbol: 'R' },
  USD: { name: 'US Dollar', symbol: '$' },
  KES: { name: 'Kenyan Shilling', symbol: 'KSh' },
};

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: string = 'NGN'): string {
  const currencyInfo = SUPPORTED_CURRENCIES[currency as keyof typeof SUPPORTED_CURRENCIES];
  if (!currencyInfo) {
    return `${amount.toFixed(2)}`;
  }
  return `${currencyInfo.symbol}${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

