# PraxisNova Website

Modern Next.js 14 website with animations for PraxisNova - KI-Schulungen für Bau & Immobilien

## Features ✨

- ✅ Responsive Design (Mobile + Desktop)
- ✅ Animated Hero Section with scroll effects
- ✅ Workshop Cards with 3D Flip Animation
- ✅ Email Popup (appears after 10 seconds)
- ✅ Pricing Cards
- ✅ Team Section
- ✅ Calendly Integration ready
- ✅ Full Tailwind CSS styling
- ✅ Framer Motion animations

## Quick Start 🚀

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## Deploy to Vercel 🌐

### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/Google/Email
3. Click "Add New Project"
4. Upload this folder or connect your Git repo
5. Click "Deploy"

Your site will be live at: `your-project-name.vercel.app`

## Customize 🎨

### Update Calendly Link
Search for `https://calendly.com` in `src/app/page.js` and replace with your actual Calendly link.

### Email Popup
Emails are currently logged to console. To actually send emails, you need to:
1. Set up a backend endpoint (e.g., using Vercel Serverless Functions)
2. Or use a service like Formspree, EmailJS, or SendGrid

### Colors
All colors are defined in `tailwind.config.js`:
- Primary Blue: #1565C0
- Blue Light: #42A5F5
- Gray: #455A64
- Gray Light: #ECEFF1
- Red: #D32F2F
- Red Light: #EF5350

### Add Team Photos
Place your team photos in `public/` folder and update the image paths in `src/app/page.js` in the Team Section.

## File Structure 📁

```
praxisnova-website/
├── src/
│   └── app/
│       ├── page.js          # Main homepage
│       ├── layout.js        # Root layout
│       └── globals.css      # Global styles
├── public/                  # Static files (images, etc.)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Features Explained 🔍

### Email Popup
- Appears automatically after 10 seconds
- Can be triggered by "Mehr Infos" button
- Collects name + email
- Currently logs to console (needs backend integration)

### Workshop Cards
- Click to flip and see modules
- Animated 3D rotation effect
- Module 4 is highlighted in red (custom system integration)

### Animations
- Hero text slides in on load
- Sections fade in on scroll
- Cards have hover effects
- Smooth transitions throughout

## Support 💬

Contact: anjuli.hertle@gmail.com
Phone: 0176/6660906

## License

© 2026 PraxisNova. All rights reserved.
