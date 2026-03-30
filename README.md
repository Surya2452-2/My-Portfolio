# Portfolio Website - Next.js

A modern portfolio website built with **Next.js 14** using the App Router, featuring responsive design, smooth animations, and optimized images.

## Features

✨ **Modern Tech Stack**
- Next.js 14 with App Router
- React 18
- CSS Modules for styling
- Next.js Image Optimization
- Next.js Link Component for client-side navigation

🎨 **Design & UX**
- Fully responsive design
- Smooth animations and transitions
- Beautiful gradient backgrounds
- Mobile-first approach
- Optimized performance

📱 **Pages**
- **Home** - Hero section with introduction
- **About** - About me section with personal description
- **Projects** - Showcase of projects with descriptions
- **Skills** - Technical skills with progress bars
- **Education** - Timeline of educational background
- **Contact** - Social media links and contact information

## Project Structure

```
/
├── app/
│   ├── (pages)/           # Route group for organized pages
│   │   ├── about/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── education/
│   │   └── contact/
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   └── page.module.css
├── components/
│   ├── Footer.jsx         # Reusable footer component
│   └── Footer.module.css
├── styles/
│   └── globals.css        # Global styles
├── public/
│   ├── images/            # Optimized images
│   │   ├── Surya.jpg
│   │   ├── port.jpg
│   │   ├── aboutback.jpg
│   │   ├── projectsback.jpg
│   │   ├── skillsback.jpeg
│   │   ├── educationback.jpg
│   │   └── contact.jpg
├── package.json
├── next.config.js
├── tsconfig.json
├── .eslintrc.json
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Key Conversions from HTML to Next.js

### 1. **HTML Pages → React Components**
- Each HTML page converted to a `.jsx` file inside `/app/(pages)/`
- Static content wrapped in functional React components
- Pages automatically routed based on folder structure

### 2. **CSS → CSS Modules**
- Original inline styles extracted to `.module.css` files
- One module per page component for better organization
- Global styles in `styles/globals.css`

### 3. **`<a>` Tags → Next.js `<Link>`**
- All anchor tags replaced with `next/link` component
- Enables client-side navigation without full page reload
- Better performance and user experience

### 4. **`<img>` Tags → Next.js `<Image>`**
- All images using `next/image` component
- Automatic optimization and lazy loading
- Responsive and adaptive image serving
- Better Core Web Vitals

### 5. **Images Management**
- All images moved to `/public/images` folder
- Optimized for web delivery
- Accessible via `/images/filename` path

### 6. **Routing Structure**
- Home page: `/` → `app/page.jsx`
- About page: `/about` → `app/(pages)/about/page.jsx`
- Projects page: `/projects` → `app/(pages)/projects/page.jsx`
- Skills page: `/skills` → `app/(pages)/skills/page.jsx`
- Education page: `/education` → `app/(pages)/education/page.jsx`
- Contact page: `/contact` → `app/(pages)/contact/page.jsx`

## Component Reusability

### **Footer Component**
Reusable footer used across all pages:
- `components/Footer.jsx` - React component
- `components/Footer.module.css` - Styling
- Imported in all page layouts

## Performance Optimizations

✅ **Next.js Automatic Optimizations**
- Image optimization with next/image
- Automatic code splitting per route
- CSS module scoping
- CSS minification

## Responsive Design

All pages are fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Font

Using Google Fonts:
- **Poppins** (400, 500, 600, 700 weights)

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Environment: Node.js 18+

## Contact & Social Links

- **LinkedIn**: https://www.linkedin.com/in/surya-polupalli-5b794025a/
- **GitHub**: https://github.com/Surya2452-2
- **Instagram**: https://www.instagram.com/_one.and.only_surya_/

## License

© 2025 Polupalli Surya Narayana — All Rights Reserved

---

**Built with ❤️ using Next.js**
