## 📋 QUICK START GUIDE

### ⚡ 3-Step Setup

```bash
cd My-Portfolio
npm install
npm run dev
```

→ Open **http://localhost:3000** ✅

---

## 🗺️ URL Routing

| Link | Goes To |
|------|---------|
| `/` | Home page |
| `/about` | About page |
| `/projects` | Projects |
| `/skills` | Skills |
| `/education` | Education |
| `/contact` | Contact |

---

## 📂 Core Files Structure

```
app/
├── layout.jsx              ← Root layout (all pages)
├── page.jsx                ← Home page (/)
└── (pages)/                ← Organized folder
    ├── about/page.jsx      ← /about
    ├── projects/page.jsx   ← /projects
    ├── skills/page.jsx     ← /skills
    ├── education/page.jsx  ← /education
    └── contact/page.jsx    ← /contact

components/
└── Footer.jsx              ← Reused on all pages

public/images/              ← All images stored here
```

---

## ⚙️ Scripts

```bash
npm run dev         # Development (hot reload)
npm run build       # Build for production
npm start           # Run production build
npm run lint        # Check code quality
```

---

## 🎨 How to Make Changes

### Edit Page Content
```jsx
// app/(pages)/about/page.jsx
export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>Your new content here</p>
    </section>
  );
}
```

### Edit Styles
```css
/* app/(pages)/about/about.module.css */
section {
  /* Your CSS here */
}
```

### Edit Navigation
```jsx
// app/page.jsx or any page
import Link from 'next/link';

<Link href="/about">About</Link>
```

### Add Images
1. Place image in `/public/images/`
2. Use in component:
```jsx
import Image from 'next/image';

<Image 
  src="/images/myimage.jpg" 
  alt="Description"
  width={300}
  height={300}
/>
```

---

## 🔍 File Locations

| What | Where |
|------|-------|
| Pages | `app/(pages)/*/page.jsx` |
| Styles | `*.module.css` in same folder as page |
| Components | `components/` |
| Images | `public/images/` |
| Global CSS | `styles/globals.css` |
| Config | Root: `next.config.js`, `package.json`, `tsconfig.json` |

---

## 🎯 Common Tasks

### Change Metadata (Title, Description)
```jsx
export const metadata = {
  title: 'Your New Title',
  description: 'Your new description',
};
```

### Add a Navigation Link
```jsx
import Link from 'next/link';

<Link href="/your-page">Link Text</Link>
```

### Update Skills List
```jsx
const skills = [
  { title: 'Skill 1', progress: 90 },
  // Add more...
];
```

### Update Projects List
```jsx
const projects = [
  { 
    title: 'Project Name',
    description: 'Description here'
  },
  // Add more...
];
```

---

## ❌ To Delete (After Testing)

- `index.html` (old)
- `about.html` (old)
- `projects.html` (old)
- `skills.html` (old)
- `education.html` (old)
- `contact.html` (old)
- `images/` folder (old)

---

## ✨ What's New

✅ **Next.js 14** - Latest framework
✅ **App Router** - Modern file-based routing
✅ **React 18** - Latest React version
✅ **Image Optimization** - Automatic WebP, lazy loading
✅ **CSS Modules** - Scoped styling, no conflicts
✅ **Component Reuse** - DRY principle (Footer)
✅ **SEO Ready** - Metadata per page
✅ **Mobile Responsive** - Works on all devices

---

## 🚀 Deploy When Ready

```bash
# Vercel (Recommended)
npm install -g vercel
vercel

# Or push to GitHub and connect to Vercel
```

---

## 📱 Test on Mobile

1. Run: `npm run dev`
2. Open DevTools: F12
3. Click mobile icon (📱)
4. Select device and test

---

## 💾 Environment Setup

Required:
- Node.js 18.17+
- npm or yarn

Check:
```bash
node --version
npm --version
```

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Images missing | Check `/public/images/` folder |
| Links broken | Use `next/link` component |
| Styles not applied | Import CSS Module correctly |
| Build fails | Run `npm install` again |

---

## 📞 Social Links in Code

Located in: `app/(pages)/contact/page.jsx`

Update URLs:
```jsx
<a href="https://your-linkedin-url">LinkedIn</a>
<a href="https://your-github-url">GitHub</a>
<a href="https://your-instagram-url">Instagram</a>
```

---

## 🎓 Learn More

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **CSS Modules**: https://nextjs.org/docs/basic-features/modules

---

**Ready to start? Run `npm install && npm run dev` now!** 🚀
