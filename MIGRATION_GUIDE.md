# Migration Guide: HTML to Next.js

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

---

## Key Changes & Examples

### 1. Navigation Links

**Before (HTML):**
```html
<a href="about.html">Learn About Me</a>
<a href="projects.html">View Projects</a>
```

**After (Next.js):**
```jsx
import Link from 'next/link';

<Link href="/about">Learn About Me</Link>
<Link href="/projects">View Projects</Link>
```

**Benefits:**
✅ Client-side navigation (no full page reload)
✅ Automatic code splitting
✅ Faster page transitions

---

### 2. Images

**Before (HTML):**
```html
<img src="images/Surya.jpg" alt="Profile" width="280" height="280">
```

**After (Next.js):**
```jsx
import Image from 'next/image';

<Image 
  src="/images/Surya.jpg" 
  alt="Profile" 
  width={280}
  height={280}
  priority
/>
```

**Benefits:**
✅ Automatic image optimization
✅ Lazy loading (except with `priority`)
✅ Responsive image delivery
✅ Better Core Web Vitals
✅ WebP format support

---

### 3. CSS Styling

**Before (HTML with inline styles):**
```html
<style>
  .hero {
    display: flex;
    padding: 100px 10%;
  }
  
  .btn {
    padding: 12px 22px;
    border-radius: 12px;
  }
</style>
```

**After (CSS Modules):**
```jsx
// page.jsx
import styles from './page.module.css';

<div className={styles.hero}>
  <button className={styles.btn}>Click Me</button>
</div>
```

```css
/* page.module.css */
.hero {
  display: flex;
  padding: 100px 10%;
}

.btn {
  padding: 12px 22px;
  border-radius: 12px;
}
```

**Benefits:**
✅ Scoped styles (no naming conflicts)
✅ Better maintainability
✅ Automatic CSS minification
✅ Smaller bundle size

---

### 4. Page Structure

**Before (Multiple HTML files):**
```
index.html
about.html
projects.html
skills.html
education.html
contact.html
```

**After (App Router structure):**
```
app/
├── page.jsx              (/)
├── (pages)/
│   ├── about/page.jsx    (/about)
│   ├── projects/page.jsx (/projects)
│   ├── skills/page.jsx   (/skills)
│   ├── education/page.jsx (/education)
│   └── contact/page.jsx  (/contact)
└── layout.jsx            (Root layout)
```

**Benefits:**
✅ Automatic file-based routing
✅ Better organization with route groups
✅ Layouts and metadata per route
✅ No manual routing configuration

---

### 5. Metadata (SEO)

**Before (HTML):**
```html
<head>
  <title>About — Polupalli Surya Narayana</title>
  <meta name="description" content="...">
</head>
```

**After (Next.js):**
```jsx
// app/(pages)/about/page.jsx
export const metadata = {
  title: 'About — Polupalli Surya Narayana',
  description: 'About Polupalli Surya Narayana...',
};

export default function About() {
  return (...)
}
```

**Benefits:**
✅ Dynamic metadata generation
✅ Automatic Open Graph tags
✅ Better SEO
✅ Proper social media previews

---

### 6. Reusable Components

**Before (HTML duplicated):**
```html
<!-- Repeated in every page -->
<footer>
  © 2025 Polupalli Surya Narayana — All Rights Reserved
</footer>
```

**After (React Component):**
```jsx
// components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © 2025 Polupalli Surya Narayana — All Rights Reserved
    </footer>
  );
}
```

```jsx
// Used in every page
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <main>...</main>
      <Footer />
    </>
  );
}
```

**Benefits:**
✅ DRY principle (Don't Repeat Yourself)
✅ Easier maintenance
✅ Consistent styling
✅ Props for dynamic content

---

### 7. Animations & Transitions (Unchanged)

All CSS animations work the same in CSS Modules:

```css
/* page.module.css */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.heroText {
  animation: fadeUp 1.2s ease-out forwards;
}
```

---

## File Structure Overview

```
My-Portfolio/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root wrapper for all pages
│   ├── page.jsx           # Home page
│   ├── page.module.css
│   └── (pages)/           # Organized route group
│       ├── about/
│       ├── contact/
│       ├── education/
│       ├── projects/
│       └── skills/
├── components/            # Reusable React components
│   ├── Footer.jsx
│   └── Footer.module.css
├── public/               # Static assets (images, etc.)
│   └── images/
├── styles/              # Global styles
│   └── globals.css
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tsconfig.json        # TypeScript config
├── .eslintrc.json       # ESLint config
└── .gitignore           # Git ignore patterns
```

---

## Running the Project

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## Browser Support

Next.js 14 supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## Performance Improvements

| Aspect | Improvement |
|--------|------------|
| **Image Optimization** | Automatic formats (WebP), lazy loading |
| **Code Splitting** | Per-route bundle splitting |
| **CSS** | Module scoping, minification |
| **Navigation** | Client-side with no full reload |
| **SEO** | Dynamic metadata per page |
| **Core Web Vitals** | Optimized for LCP, FID, CLS |

---

## Debugging Tips

### Check build errors
```bash
npm run build
```

### View console errors
```bash
# Development server shows errors in terminal and browser
npm run dev
```

### Inspect styles
- Open DevTools (F12)
- Find elements and check CSS module classes
- Module classes are auto-generated hash names

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ✅ Test all pages and links
4. ✅ Build for production: `npm run build`
5. ✅ Deploy to Vercel (recommended) or your hosting

---

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- Railway
- Render
- AWS Amplify
- GitHub Pages (with static export)

---

**Questions?** Check the README.md for more details!
