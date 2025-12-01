# 🚀 Skyline Corps - Advanced Tech Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?style=for-the-badge&logo=framer)

**A cutting-edge, futuristic portfolio website with advanced animations and holographic effects**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

### 🎨 **Advanced Animations**
- **Matrix Rain Effect** - Authentic digital rain background with customizable density and speed
- **Holographic Cards** - 3D holographic effects with shimmer, scan lines, and grid patterns
- **Glitch Text** - RGB split effects with customizable intensity (low/medium/high)
- **Cyber Grid** - Animated cyber grid background with moving lines and glowing intersections
- **Typing Animation** - Auto-typing text effect with multiple text rotation
- **Counter Animation** - Smooth number counting with customizable duration
- **Cursor Trail** - Interactive mouse trail with glowing particles

### 🎯 **Page-Specific Features**

#### 🏠 Homepage
- Matrix rain background with cyber grid overlay
- Tech badge with animated icons
- Glitch text on main title
- Typing animation for dynamic taglines
- Enhanced CTA buttons with neon pulse effects
- Holographic feature cards
- Animated statistics with counter animations

#### 🛍️ Products/Services Page
- Holographic product cards with scan line effects
- Tech-styled search bar and category filters
- Animated favorite button
- Neon pulse on featured badges
- Enhanced pricing display with tech gradient

#### 👥 About Page
- "Core Protocols" section with holographic value cards
- Circuit-style timeline ("System Evolution")
- Holographic team cards with scan-line effects
- Open Source contributions showcase
- Tech-themed CTA sections

#### 🔧 Services Page
- 6 service modules with holographic cards
- "Execution Pipeline" with circuit flow diagram
- Interactive hover states for service icons
- Tech-styled pricing/feature lists

### 🎨 **Design System**

#### Color Palette
```css
--primary: Electric Blue (#0EA5E9)
--accent: Cyber Purple (#A855F7)
--tech-green: Matrix Green (#10B981)
--highlight: Hot Pink (#EC4899)
--matrix: Neon Green (#00FF41)
--background: Deep Space (#0A0E27)
```

#### CSS Utilities
- `.holographic` - Holographic background with shimmer
- `.tech-card` - Tech-themed card styling
- `.tech-gradient-text` - Gradient text effect
- `.cyber-glow` - Multi-color tech glow
- `.neon-pulse` - Pulsing neon glow
- `.scan-line` - Horizontal scan animation
- `.circuit-pattern` - Tech grid background
- `.glitch` - RGB split glitch effect

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/skyline-corps.git
cd skyline-corps
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### Animations
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **Custom Canvas Animations** - Matrix rain, cyber grid effects

### Icons & UI
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[React Hot Toast](https://react-hot-toast.com/)** - Notifications

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 📁 Project Structure

```
modern-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── products/          # Products page
│   │   ├── services/          # Services page
│   │   ├── contact/           # Contact page
│   │   └── globals.css        # Global styles & utilities
│   │
│   ├── components/
│   │   ├── animations/        # Custom animation components
│   │   │   ├── matrix-rain.tsx
│   │   │   ├── holographic-card.tsx
│   │   │   ├── glitch-text.tsx
│   │   │   ├── cyber-grid.tsx
│   │   │   ├── typing-animation.tsx
│   │   │   ├── counter-animation.tsx
│   │   │   └── cursor-trail.tsx
│   │   │
│   │   ├── ui/                # Reusable UI components
│   │   └── layout/            # Layout components
│   │
│   ├── contexts/              # React contexts
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript types
│
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── next.config.js             # Next.js configuration
```

---

## 🎨 Custom Components

### Matrix Rain
```tsx
import MatrixRain from '@/components/animations/matrix-rain';

<MatrixRain className="opacity-10" />
```

### Holographic Card
```tsx
import HolographicCard from '@/components/animations/holographic-card';

<HolographicCard className="p-8">
  {/* Your content */}
</HolographicCard>
```

### Glitch Text
```tsx
import GlitchText from '@/components/animations/glitch-text';

<GlitchText intensity="high">
  Your Text
</GlitchText>
```

### Typing Animation
```tsx
import TypingAnimation from '@/components/animations/typing-animation';

<TypingAnimation 
  texts={[
    "Building the Future",
    "Innovative Solutions",
    "Digital Transformation"
  ]}
/>
```

---

## ⚡ Performance Optimizations

- **GPU Acceleration** - All animations use CSS transforms for hardware acceleration
- **Canvas Optimization** - Matrix rain and cyber grid use `requestAnimationFrame`
- **Lazy Loading** - Components loaded on-demand
- **Reduced Motion Support** - Respects `prefers-reduced-motion` media query
- **Optimized Background Animations** - Fixed backgrounds use `will-change` and `translate3d` for smooth scrolling

---

## 🎯 Key Features Breakdown

### Scroll Performance
- Background animations optimized with `will-change-transform`
- Reduced opacity (5%) for better performance
- GPU-accelerated rendering with `translate3d(0,0,0)`

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Touch-friendly interactive elements

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ahmad Revaldi Saputra**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Design inspiration from modern tech companies
- Animation concepts from cyberpunk aesthetics
- Community feedback and contributions

---

## 📸 Screenshots

### Homepage
![Homepage](./screenshots/homepage.png)

### Services Page
![Services](./screenshots/services.png)

### About Page
![About](./screenshots/about.png)

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**

⭐ Star this repo if you find it helpful!

</div>
