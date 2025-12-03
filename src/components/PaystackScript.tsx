'use client';

import { useEffect } from 'react';

/**
 * Component to load Paystack Inline JS
 * This should be included in the layout to make Paystack available globally
 */
export default function PaystackScript() {
  useEffect(() => {
    // Check if Paystack script is already loaded
    if (typeof window !== 'undefined' && !window.PaystackPop) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('✅ Paystack script loaded successfully');
      };

      script.onerror = () => {
        console.error('❌ Failed to load Paystack script');
      };

      return () => {
        // Cleanup on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    PaystackPop?: any;
  }
}

