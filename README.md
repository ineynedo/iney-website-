# INEY - Premium Digital Agency Website

A modern, premium website for INEY digital agency featuring minimalist design with 3D typography, multilingual support, and interactive portfolio.

## Features

- ✨ **Premium Design**: Minimalist white background with deep black 3D titles
- 🌍 **Multilingual**: French and English support with easy language switching
- 📱 **Fully Responsive**: Perfect on all devices
- 🎨 **Modern UI**: Smooth animations and micro-interactions
- 💼 **Portfolio Gallery**: Interactive demos with iframe embeds
- 📝 **Contact Form**: Validated form with service selection
- 🎬 **Video Support**: Embed testimonial videos and project demos

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Forms**: React Hook Form

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
iney-website/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with i18n
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles with 3D effects
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── i18n/                  # Internationalization config
│   ├── routing.ts
│   └── request.ts
├── messages/              # Translation files
│   ├── fr.json
│   └── en.json
└── middleware.ts          # i18n middleware

```

## Customization

### Adding Portfolio Items

Edit the `portfolioItems` array in `components/sections/Portfolio.tsx`:

```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project',
    category: 'websites', // or 'apps', 'videos'
    thumbnail: 'https://your-image-url.com',
    demoUrl: 'https://your-demo-url.com',
    type: 'website' // or 'video'
  }
];
```

### Updating Testimonials

Edit the `testimonials` array in `components/sections/Testimonials.tsx`.

### Changing Colors

Update the color palette in `tailwind.config.ts` and `app/globals.css`.

## Languages

Currently supports:
- 🇫🇷 French (default)
- 🇬🇧 English

To add more languages, create a new JSON file in `messages/` and update `i18n/routing.ts`.

## License

© 2026 INEY. All rights reserved.
