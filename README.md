# Shoply - E-Commerce Application

**Shoply** - Shop simply for amazing products at unbeatable prices

A modern, responsive e-commerce web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

🌐 **[Live Demo](https://shoply-app-nine.vercel.app/)** - Try it now!

---

## 🚀 Features Implemented

### 🏠 **Home Page**
- Hero section with compelling call-to-action
- Category browsing with visual cards
- Featured products grid (first 8 products)
- Responsive design for all screen sizes

### 🛍️ **Product Catalog**
- Product listing page with grid layout
- Advanced filtering system:
  - Filter by category (multiple selection)
  - Filter by price range (dual slider)
- Sorting options:
  - Featured (default)
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
  - Name: Z to A
  - Highest Rated
- Product cards with:
  - Product image
  - Title (truncated to 2 lines)
  - Rating and review count
  - Price
  - Hover effects
- Results count display
- Reset filters functionality

### 📦 **Product Details**
- Detailed product information
- High-quality product images
- Star rating and review count
- Product description
- Quantity selector
- **Mobile-optimized sticky action bar** (< 1024px):
  - Fixed at bottom of screen
  - Total price calculation
  - Quantity selector
  - Add to Cart button
  - Buy Now button
- Desktop layout with inline buttons
- Category breadcrumb
- Add to Cart with success notification
- Buy Now (adds to cart and redirects)

### 🛒 **Shopping Cart**
- Persistent cart using localStorage
- Cart badge with item count in navbar
- Smart cart access behavior:
  - **Home/Categories pages:** Cart icon navigates to cart page
  - **Other pages:** Cart icon opens slide-in drawer
  - Drawer auto-closes on navigation
- Slide-in cart drawer:
  - View all cart items
  - Update quantities (+/-)
  - Remove items
  - Real-time price calculation
  - Subtotal, tax, and total display
  - Empty cart state
- Dedicated cart page:
  - Full cart summary
  - Order summary card
  - Proceed to checkout
- Cart state management with React Context

### 🏷️ **Categories**
- Category listing page with visual cards
- Individual category pages:
  - Filter products by category
  - All product filtering/sorting features available
  - Category-specific breadcrumbs
- Categories supported:
  - Electronics
  - Jewelry (handles API spelling "jewelery")
  - Men's Clothing
  - Women's Clothing
- URL normalization for category variations

### 🔍 **Search Functionality**
- Real-time search bar in navbar
- Search suggestions with debouncing (300ms)
- Autocomplete dropdown showing matching products
- "Search for..." option for full-text search
- Search results page with filtering
- Highlights matching terms
- Loading states for better UX

### 📱 **Responsive Design**
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Touch-optimized for mobile devices
- Hamburger menu for mobile navigation
- Adaptive layouts for all pages
- Sticky mobile action bars where appropriate

### 🎨 **UI/UX Features**
- Clean, modern interface
- Consistent color scheme 
- Smooth transitions and animations
- **Skeleton loading states** for better perceived performance:
  - Product grid skeletons
  - Product detail skeletons
  - Search results skeletons
  - Cart page skeletons
  - Category grid skeletons
- Toast notifications for user actions
- Empty states with helpful messages
- Error handling with user-friendly messages
- Accessible UI components
- Hover effects and visual feedback
- Custom favicon with brand identity

### 🔧 **Technical Features**
- Server-side rendering (SSR) for product pages
- Client-side filtering and sorting for performance
- Image optimization with Next.js Image component
- Type-safe with TypeScript
- Modular component architecture
- Reusable UI components (Button, Toast, EmptyState, etc.)
- Custom hooks (useDebounce, useLocalStorage)
- Context API for global state management
- API abstraction layer
- Responsive routing with App Router

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/cathrinaumali/shoply-app.git
   cd shoply-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Environment Variables

No environment variables are required. The app uses the [Fake Store API](https://fakestoreapi.com/) for demo products.

To use a different API, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## 📁 Project Structure

```
shoply-app/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── products/             # Products pages
│   │   │   ├── page.tsx          # Product listing
│   │   │   ├── ProductsClient.tsx
│   │   │   └── [id]/             # Product detail
│   │   │       ├── page.tsx
│   │   │       ├── ProductDetailClient.tsx
│   │   │       └── ProductDetailSkeleton.tsx
│   │   ├── categories/           # Category pages
│   │   │   ├── page.tsx
│   │   │   └── [category]/
│   │   │       └── page.tsx
│   │   ├── cart/                 # Cart page
│   │   │   ├── page.tsx
│   │   │   └── CartPageSkeleton.tsx
│   │   └── search/               # Search page
│   │       ├── page.tsx
│   │       ├── SearchResults.tsx
│   │       └── SearchResultsSkeleton.tsx
│   │
│   ├── components/               # Reusable components
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── CartBadge.tsx
│   │   │   └── CategoryGridSkeleton.tsx
│   │   ├── products/             # Product components
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductFilterBar.tsx
│   │   │   ├── ProductGridSkeleton.tsx
│   │   │   └── ProductSkeleton.tsx
│   │   ├── cart/                 # Cart components
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── EmptyCart.tsx
│   │   └── ui/                   # UI components
│   │       ├── Button.tsx
│   │       ├── Toast.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── EmptyState.tsx
│   │       └── ErrorMessage.tsx
│   │
│   ├── context/                  # React Context
│   │   └── CartContext.tsx       # Cart state management
│   │
│   ├── hooks/                    # Custom hooks
│   │   └── useLocalStorage.ts    # localStorage hook
│   │
│   ├── lib/                      # Utilities
│   │   ├── api.ts                # API functions
│   │   ├── constants.ts          # Global constants
│   │   └── utils.ts              # Helper functions
│   │
│   └── types/                    # TypeScript types
│       ├── product.ts            # Product types
│       └── cart.ts               # Cart types
│
├── public/                       # Static assets
│   ├── favicon.svg               # Browser tab icon
│   ├── hero.jpg                  # Hero image
│   └── categories/               # Category images
│       ├── electronics.jpg
│       ├── jewelry.jpg
│       ├── mens-clothing.jpg
│       └── womens-clothing.jpg
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
├── postcss.config.mjs            # PostCSS config
├── eslint.config.mjs             # ESLint config
├── AI_USAGE.md                   # AI contribution documentation
└── README.md                     # This file
```

---

## 🎯 Key Technical Decisions & Assumptions

### **API Integration**
- **Assumption**: Using [Fake Store API](https://fakestoreapi.com/) for demo purposes
- **Decision**: All API calls wrapped in abstraction layer (`lib/api.ts`) for easy replacement
- **Note**: The API uses "jewelery" spelling (not "jewelry")

### **State Management**
- **Cart State**: React Context API with localStorage persistence
- **Filter/Sort State**: Component-level state with useMemo for performance
- **Rationale**: Context for global state, local state for component-specific data

### **Routing Strategy**
- **Next.js App Router** (v13+) for modern routing
- **Server Components** for initial page loads (SEO-friendly)
- **Client Components** for interactive features (filtering, cart)

### **Responsive Design**
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Tailwind CSS default (sm: 640px, lg: 1024px)
- **Touch-Optimized**: Larger tap targets on mobile

### **Performance Optimizations**
- Image optimization with Next.js Image component
- Debounced search (300ms) to reduce API calls
- Memoized filter/sort calculations
- Lazy loading for product images

### **Data Persistence**
- **Cart**: Stored in localStorage (persists across sessions)
- **No user authentication**: Assumption that this is a demo/prototype
- **No backend**: All data from external API

### **Category Handling**
- **URL Normalization**: Handles variations ("jewelry" → "jewelery")
- **Display Names**: User-friendly names vs. API names
- **Mapping**: Constants file maps display names to API categories

### **Dark Mode**
- **Disabled**: Forced light mode for consistency across devices
- **Reason**: Prevents mobile dark mode from affecting design
- **Implementation**: CSS media query override in globals.css

### **Browser Compatibility**
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari 12+, Chrome Mobile
- **Progressive Enhancement**: Core features work without JavaScript

### **Accessibility**
- Semantic HTML elements
- ARIA labels for icons and buttons
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for all images

---

## 🧪 Testing the Application

### **Manual Testing Checklist**

#### Homepage
- [ ] Hero section loads with image
- [ ] Categories display correctly
- [ ] Featured products grid shows 8 items
- [ ] "Shop Now" button navigates to /products

#### Product Listing
- [ ] All products load correctly
- [ ] Filters work (category, price range)
- [ ] Sorting changes product order
- [ ] Results count updates correctly
- [ ] Reset filters works

#### Product Detail
- [ ] Product information displays
- [ ] Quantity selector works (+/-)
- [ ] Add to Cart updates cart badge
- [ ] Buy Now redirects to cart
- [ ] Mobile sticky bar appears on small screens
- [ ] Desktop buttons hidden on mobile

#### Shopping Cart
- [ ] Cart badge shows correct count
- [ ] Cart drawer opens/closes
- [ ] Quantity updates work
- [ ] Remove item works
- [ ] Totals calculate correctly
- [ ] Empty cart shows appropriate message
- [ ] Cart persists after page reload

#### Search
- [ ] Search bar shows suggestions
- [ ] Suggestions update as you type
- [ ] Clicking suggestion searches
- [ ] Search results page displays matches
- [ ] No results shows helpful message

#### Categories
- [ ] Category listing page works
- [ ] Individual category pages filter correctly
- [ ] Category navigation breadcrumbs work

#### Responsive Design
- [ ] Test on mobile device (< 640px)
- [ ] Test on tablet (640px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Sticky mobile bar appears correctly
- [ ] Cart drawer works on all sizes

---

## 🐛 Known Issues & Limitations

1. **No Backend**: All cart data is local (localStorage)
2. **No Checkout**: Checkout flow not implemented (demo app)
3. **No User Authentication**: No login/signup functionality
4. **API Limitations**: Using demo API with limited product data
5. **Image Loading**: Some product images may load slowly from external API
6. **No Payment Integration**: This is a frontend demo only

---

## 🔮 Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Complete checkout flow
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Admin dashboard
- [ ] Real backend integration
- [ ] Product inventory management
- [ ] Email notifications
- [ ] Social sharing
- [ ] Product comparisons
- [ ] Advanced search filters
- [ ] Related products recommendations
- [ ] Multi-language support

---

## 👨‍💻 Author

**Cathrina Umali**
- GitHub: [@cathrinaumali](https://github.com/cathrinaumali)
- Repository: [shoply-app](https://github.com/cathrinaumali/shoply-app)

---

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for icons
- [Vercel](https://vercel.com/) for hosting (if deployed)
- **Claude Sonnet 4.5** (via GitHub Copilot) for AI-assisted code implementation

> **Note:** This project was built with AI assistance. See [AI_USAGE.md](AI_USAGE.md) for full transparency on the 65/35 human-AI contribution split, including details on what was designed vs. implemented.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
