# ReadAfrik - Literacy Studies Website

A modern, interactive website for literacy and numeracy education resources, career development, and educational materials with a complete e-commerce solution.

## 🌟 Features

### Educational Content
- **Literacy Resources**: Comprehensive reading and writing materials
- **Numeracy Content**: Mathematical tools and resources
- **Career Development**: Professional growth resources and guidance
- **Event Management**: Subscribe to workshops and educational events

### E-Commerce
- **Educational Store**: Premium materials and free resources
- **Shopping Cart**: Full-featured cart system with:
  - ✅ Add to cart functionality
  - ✅ Persistent storage (survives page refresh)
  - ✅ Quantity management (+/- controls)
  - ✅ Real-time cart count badge in header
  - ✅ Toast notifications for user feedback
  - ✅ Slide-in cart sidebar
  - ✅ Multiple payment options (Cards, Mobile Money, PayPal)
  - ✅ Complete checkout flow
  - ✅ Free resource downloads

### UI/UX
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Built with Radix UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1 (App Router)
- **React**: v19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.6
- **UI Components**: Radix UI (Dialog, Dropdown, Navigation, Tabs)
- **Icons**: Lucide React
- **Email**: Resend API
- **State Management**: React Context API
- **TypeScript**: v5

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eckintosh-4ai360/ReadAfrik.git
   cd ReadAfrik
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   EMAIL_FROM=noreply@yourdomain.com
   ```
   
   See `ENV_TEMPLATE.txt` for more details.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
literacy-studies-website/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── api/               # API routes
│   │   │   ├── register-event/
│   │   │   └── subscribe/
│   │   ├── career/            # Career development page
│   │   ├── events/            # Events page
│   │   ├── literacy/          # Literacy resources page
│   │   ├── numeracy/          # Numeracy resources page
│   │   ├── store/             # Store pages
│   │   │   ├── free/         # Free resources
│   │   │   └── page.tsx      # Main store page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── FeaturedSections.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PaymentModal.tsx
│   │   ├── ShoppingCart.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── Toast.tsx
│   │   └── UpcomingEvents.tsx
│   ├── contexts/              # React contexts
│   │   └── CartContext.tsx    # Shopping cart state management
│   └── lib/                   # Utility functions
│       └── email.ts           # Email service
├── public/                    # Static assets
├── CART_FEATURES.md          # Cart documentation
├── EMAIL_SETUP.md            # Email setup guide
├── SETUP_INSTRUCTIONS.md     # Setup guide
└── README.md                 # This file
```

## 🛒 Shopping Cart Usage

### For Users
1. Browse products in the Store section
2. Click "Add to Cart" on any product
3. View cart by clicking the cart icon in the header
4. Adjust quantities or remove items
5. Proceed to checkout
6. Select payment method and complete purchase

### For Developers

Import the cart context in any component:

```typescript
import { useCart } from '@/contexts/CartContext';

function MyComponent() {
  const { addToCart, cartItems, getTotalPrice } = useCart();
  
  const handleAdd = () => {
    addToCart({
      id: 1,
      title: 'Product Name',
      price: 29.99,
      image: '📚',
      type: 'Digital Book'
    });
  };
  
  return <button onClick={handleAdd}>Add to Cart</button>;
}
```

For detailed cart documentation, see [CART_FEATURES.md](./CART_FEATURES.md)

## 📧 Email Configuration

The website includes email functionality for:
- Event registrations
- Newsletter subscriptions
- Order confirmations

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for configuration details.

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme.

### Components
All components are in `src/components/` and use Tailwind CSS for styling.

### Store Products
Edit `src/app/store/page.tsx` to add/modify products in the store.

## 🧪 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📚 Documentation

- **[CART_FEATURES.md](./CART_FEATURES.md)** - Complete shopping cart documentation
- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - Email service configuration
- **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Detailed setup guide
- **[QUICK_START_EMAIL.md](./QUICK_START_EMAIL.md)** - Quick email setup reference

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Version:** 1.0.0  
**Last Updated:** December 3, 2025  
**Developed by:** ReadAfrik Team
