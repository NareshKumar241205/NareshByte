# NareshByte

AI/ML Engineer Portfolio — a modern, scroll-animated personal website built with React 19, Vite 8, and Framer Motion.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter)

## Live Demo

🔗 [nareshkumar.dev](https://nareshkumar.dev)

---

## Features

- **Dark / Light Theme** — persisted in localStorage, respects `prefers-color-scheme`
- **Custom Scroll Animations** — WordReveal, clipReveal, distort, tilt3D, MagneticElement, ParallaxSection
- **Tabbed Tech Stack** — icons via simple-icons and react-icons with category filtering
- **Education Cards** — edge-to-edge images with gradient overlays
- **Experience Preview** — timeline with role and tech tags
- **Projects Gallery** — filterable grid with hover effects
- **Contact Form** — EmailJS integration with file upload (localStorage)
- **SEO & Meta Tags** — react-helmet-async with Open Graph, Twitter cards, apple-touch-icon
- **Accessibility** — aria-live, aria-expanded, focus-visible outlines, semantic landmarks
- **Error Boundary** — catches render crashes gracefully
- **Responsive** — mobile-first with fluid typography and glassmorphism

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 19, React Router 7 |
| Build | Vite 8 |
| Animation | Framer Motion 12 |
| Icons | simple-icons, react-icons |
| Email | @emailjs/browser |
| SEO | react-helmet-async |
| Linting | oxlint |
| Fonts | Inter, Playfair Display (Google Fonts) |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/NareshKumar241205/NareshByte.git
cd NareshByte

# Install dependencies
npm install

# Copy env file and fill in your EmailJS credentials
cp .env.example .env

# Start dev server
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [EmailJS](https://www.emailjs.com/).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

---

## Project Structure

```
src/
├── components/
│   ├── about/        # AboutHero, Bio, TechStack, ExperiencePreview, EducationSection
│   ├── contact/      # ContactForm, FileDropZone
│   ├── home/         # Hero, Stats, Services, HomeBio, FeaturedProjects, CTAStrip
│   ├── layout/       # Navbar, Footer, ScrollProgress, PageTransition
│   ├── projects/     # ProjectCard, ProjectFilter
│   └── shared/       # ScrollReveal, TextReveal, MagneticElement, ParallaxSection, ScrollLine, SEO, ErrorBoundary
├── context/          # ThemeContext, ToastContext
├── data/             # education, experience, projects
├── pages/            # Home, About, Projects, Contact, NotFound
├── App.jsx           # Routes and layout
├── main.jsx          # Entry point
└── index.css         # Global styles and CSS variables
```

---

## Author

**Naresh Kumar V** — AI/ML Engineer

- GitHub: [@NareshKumar241205](https://github.com/NareshKumar241205)
- LinkedIn: [nareshkumar241205](https://www.linkedin.com/in/nareshkumar241205/)
- Email: narikumar2011@gmail.com

---

## License

MIT
