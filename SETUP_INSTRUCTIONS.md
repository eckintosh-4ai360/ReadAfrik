# LiteracyHub - Next.js Website Setup Instructions

## Project Overview

LiteracyHub is a comprehensive educational platform built with Next.js 15, featuring:

- **Literacy Section**: Blog posts and reading resources
- **Numeracy Section**: Visual gallery, articles, and digital books
- **Career Development**: Professional growth resources and success stories
- **Store**: E-commerce functionality with MoMo payment integration
- **Modern UI**: Responsive design with Framer Motion animations
- **Shopping Cart**: Full cart functionality with payment processing

## Prerequisites

Before setting up the project, ensure you have:

- Node.js 18.0 or later
- npm or yarn package manager
- Git (for version control)

## Installation Steps

### 1. Extract the Project
```bash
unzip literacy-studies-website.zip
cd literacy-studies-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Production Build
```bash
npm run build
npm start
```

## Project Structure

```
literacy-studies-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── literacy/          # Literacy section
│   │   ├── numeracy/          # Numeracy section  
│   │   ├── career/            # Career development
│   │   ├── store/             # E-commerce store
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   └── components/            # Reusable components
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Site footer
│       ├── Hero.tsx           # Homepage hero section
│       ├── FeaturedSections.tsx # Main sections showcase
│       ├── UpcomingEvents.tsx # Events display
│       ├── ShoppingCart.tsx   # Cart functionality
│       └── PaymentModal.tsx   # Payment processing
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── next.config.ts            # Next.js configuration
```

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Responsive navigation and layouts

### 2. Animations
- Framer Motion for smooth animations
- Hover effects and transitions
- Scroll-triggered animations

### 3. E-commerce Functionality
- Product catalog with filtering
- Shopping cart with local storage
- Payment integration (MoMo and other methods)
- Free and paid resource downloads

### 4. Modern UI Components
- Lucide React icons
- Gradient backgrounds
- Card-based layouts
- Interactive buttons and forms

## Customization

### Adding New Products
Edit the products array in `src/app/store/page.tsx`:

```typescript
const products = [
  {
    id: 1,
    title: "Your Product Title",
    description: "Product description",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    category: "Digital Books",
    type: "paid", // or "free"
    image: "📚"
  }
];
```

### Modifying Colors
Update the color schemes in:
- `src/components/FeaturedSections.tsx` (colorClasses)
- `src/components/UpcomingEvents.tsx` (categoryColors)
- `src/app/numeracy/page.tsx` (difficultyColors)

### Adding New Events
Edit the events array in `src/components/UpcomingEvents.tsx`:

```typescript
const events = [
  {
    id: 1,
    title: "Event Title",
    description: "Event description",
    date: "2025-08-15",
    time: "10:00 AM",
    location: "Virtual",
    category: "literacy",
    type: "Workshop",
    attendees: 45,
    maxAttendees: 50,
    image: "📚"
  }
];
```

## Payment Integration

The project includes MoMo payment integration setup in `src/components/PaymentModal.tsx`. To fully implement:

1. Sign up for MoMo API access
2. Add your API credentials to environment variables
3. Implement the actual payment processing logic
4. Add webhook handling for payment confirmations

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the generated files to your hosting provider

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
MOMO_API_KEY=your_momo_api_key
MOMO_SECRET_KEY=your_momo_secret_key
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Issues
If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build`

### TypeScript Errors
The project is configured to ignore TypeScript errors during build. If you want to fix them:
1. Remove `ignoreBuildErrors: true` from `next.config.ts`
2. Fix the type issues in the components

### Performance
For better performance:
1. Optimize images in the `public` folder
2. Implement lazy loading for heavy components
3. Use Next.js Image component for better optimization

## Support

For technical support or questions about the implementation, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Framer Motion Documentation: https://www.framer.com/motion/

## License

This project is created for educational purposes. Modify and use as needed for your literacy education platform.

