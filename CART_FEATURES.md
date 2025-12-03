# Shopping Cart Feature Documentation

## Overview
The shopping cart feature provides a complete e-commerce experience for your literacy studies website, allowing users to browse, add items to cart, manage quantities, and proceed to checkout.

## Features Implemented

### 1. **Global Cart State Management**
- Centralized cart state using React Context API
- Location: `src/contexts/CartContext.tsx`
- Provides cart state and actions to all components
- Persistent storage using localStorage

### 2. **Add to Cart Functionality**
- Users can add products to cart from the store page
- Duplicate items automatically increment quantity instead of creating new entries
- Real-time cart count badge in the header
- Visual feedback when items are added

### 3. **Shopping Cart Sidebar**
- Slide-in cart panel accessible from anywhere via the header
- Displays all cart items with:
  - Product image (emoji)
  - Product title and type
  - Individual and total prices
  - Quantity controls (+/-)
  - Remove item button
- Total price calculation
- Total items count
- "Proceed to Checkout" button
- "Clear Cart" button

### 4. **Visual Feedback**
- Button state changes (green checkmark) when item is added
- Toast notifications at the top of the screen
- Animated cart count badge in header
- Smooth animations using Framer Motion

### 5. **Quantity Management**
- Increment/decrement quantity directly in cart
- Automatic removal when quantity reaches 0
- Real-time price updates

### 6. **Persistent Storage**
- Cart contents saved to localStorage
- Survives page refreshes
- Loaded automatically on page load

### 7. **Payment Integration**
- Payment modal with multiple payment options:
  - Credit/Debit Cards
  - Mobile Money (MTN MoMo, Airtel Money, Vodafone Cash)
  - PayPal
- Form validation
- Processing states
- Success confirmation

## Component Structure

```
src/
├── contexts/
│   └── CartContext.tsx          # Global cart state management
├── components/
│   ├── ShoppingCart.tsx         # Cart sidebar component
│   ├── Toast.tsx                # Toast notification component
│   ├── PaymentModal.tsx         # Payment checkout modal
│   └── Header.tsx               # Navigation with cart button
└── app/
    └── store/
        └── page.tsx             # Store page with products
```

## Usage

### Adding Cart to Your Application

The cart is already integrated! The `CartProvider` wraps your entire application in `src/app/layout.tsx`:

```typescript
<CartProvider>
  <Header />
  <main>{children}</main>
  <Footer />
</CartProvider>
```

### Using Cart Functions in Components

Import the `useCart` hook to access cart functionality:

```typescript
import { useCart } from '@/contexts/CartContext';

function MyComponent() {
  const {
    cartItems,        // Array of items in cart
    addToCart,        // Add item to cart
    updateQuantity,   // Update item quantity
    removeItem,       // Remove item from cart
    clearCart,        // Clear all items
    getTotalPrice,    // Get total cart price
    getTotalItems,    // Get total item count
    openCart,         // Open cart sidebar
    closeCart,        // Close cart sidebar
    isCartOpen        // Cart open state
  } = useCart();

  return (
    // Your component JSX
  );
}
```

### Adding a Product to Cart

```typescript
const handleAddToCart = () => {
  addToCart({
    id: 1,
    title: 'Product Name',
    price: 29.99,
    image: '📚',
    type: 'Digital Book'
  });
};
```

## Cart Context API

### CartItem Interface
```typescript
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}
```

### Available Functions

| Function | Parameters | Description |
|----------|-----------|-------------|
| `addToCart` | `product: Omit<CartItem, 'quantity'>` | Adds product to cart or increments quantity |
| `updateQuantity` | `id: number, newQuantity: number` | Updates quantity of item |
| `removeItem` | `id: number` | Removes item from cart |
| `clearCart` | None | Removes all items from cart |
| `getTotalPrice` | None | Returns total price of all items |
| `getTotalItems` | None | Returns total count of items |
| `openCart` | None | Opens the cart sidebar |
| `closeCart` | None | Closes the cart sidebar |

## Customization

### Styling
All components use Tailwind CSS. You can customize colors, spacing, and animations by modifying the className properties in:
- `src/components/ShoppingCart.tsx` - Cart sidebar styles
- `src/components/Toast.tsx` - Toast notification styles
- `src/app/store/page.tsx` - Product card and button styles

### Adding New Payment Methods
Edit `src/components/PaymentModal.tsx` and add to the `paymentMethods` array:

```typescript
const paymentMethods = [
  // ... existing methods
  {
    id: 'new-method',
    name: 'New Method',
    icon: YourIcon,
    description: 'Description of payment method'
  }
];
```

### Free Products
Products with `price: 0` are handled as free downloads and don't get added to cart. The download action triggers a toast notification instead.

## Best Practices

1. **Always use the `useCart` hook** - Don't directly manipulate localStorage
2. **Validate product data** - Ensure all required fields are present before adding to cart
3. **Handle errors gracefully** - Use try-catch when dealing with localStorage
4. **Test on different browsers** - localStorage behavior may vary
5. **Provide feedback** - Always show user feedback when cart actions occur

## Future Enhancements

Potential improvements you could add:
- [ ] Save carts to a backend database for logged-in users
- [ ] Add product variants (size, color, etc.)
- [ ] Implement discount codes/coupons
- [ ] Add wishlist functionality
- [ ] Email cart recovery for abandoned carts
- [ ] Multi-currency support
- [ ] Product recommendations in cart
- [ ] Checkout progress indicator
- [ ] Order history page
- [ ] Guest checkout option

## Troubleshooting

### Cart not persisting
- Check browser's localStorage is enabled
- Verify no errors in browser console
- Clear cache and try again

### Cart count not updating
- Ensure `CartProvider` wraps all components that use cart
- Check that you're using the context, not managing separate state

### Items duplicating
- Make sure product IDs are unique
- The cart automatically handles duplicates by incrementing quantity

## Testing Checklist

- [ ] Add item to cart
- [ ] Add same item twice (should increment quantity)
- [ ] Update quantity using +/- buttons
- [ ] Remove item from cart
- [ ] Clear entire cart
- [ ] Cart persists after page refresh
- [ ] Cart count badge updates correctly
- [ ] Toast notifications appear
- [ ] Checkout modal opens
- [ ] Free products trigger download (not cart addition)
- [ ] Mobile responsiveness

## Support

For issues or questions about the cart feature, check:
1. Browser console for JavaScript errors
2. Network tab for API issues
3. React DevTools for state inspection
4. This documentation for usage examples

---

**Version:** 1.0  
**Last Updated:** December 2, 2025  
**Author:** ReadAfrik Development Team

