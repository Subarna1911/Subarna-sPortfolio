# Subarna | Front End Engineer Portfolio

A modern, highly interactive, and aesthetically premium portfolio web application built to showcase my journey, skills, and projects as a Front End Engineer. 

Turning websites into experiences people love.

## ✨ Current Features (WIP)

- **Immersive Hero Section:** Includes a muted, looped video background overlay with custom playback rates.
- **Dynamic Theme Switcher:** Fully functional Light, Dark, and System preference theme toggling using the Context API and `localStorage`.
- **Custom Animated Cursor:** A tailored glowing cursor effect that follows the mouse movement for a premium feel.
- **Scroll-Linked Overlay Navigation:** A sleek, animated full-screen menu powered by Framer Motion.
- **Interactive Projects Carousel:** Features touch-friendly sliding carousels utilizing `Swiper.js` to showcase my recent work and GitHub repsitories.
- **Animated Quotations & Typography:** Subtle staggering micro-animations on text to boost engagement.
- **Functional Contact Form:** Integrated with `Formik` and `Web3Forms` with environment variable security for receiving live messages straight to my inbox.
- **SEO & Accessibility Optimized:** Includes appropriate ARIA labels, semantic tags, and Open Graph metadata for social sharing.
- **Fully Responsive:** Tailored experiences from mobile phones to high-resolution desktop monitors.

## 🛠️ Tech Stack & Dependencies

### Core Engine
- **Vite:** Next Generation Frontend Tooling.
- **React (v19):** For building the component-based UI.

### Styling & Animation
- **Tailwind CSS (v4):** Utility-first CSS framework for rapid UI development and dark mode handling.
- **Framer Motion:** For fluid, declarative mount/unmount and scroll animations.
- **Lucide React / React Icons:** For clean, scalable iconography.

### Utilities
- **Swiper:** Modern touch slider for the project showcase.
- **Formik:** For scalable and validated form state management.

## 🚀 Running Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Subarna1911/MyPortfolio.git
   cd MyPortfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root of the `portfolio` directory and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key_here"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Upcoming Features / Roadmap
- [ ] Add dedicated 'Gallery' page.
- [ ] Add dedicated 'Blogs' page.
- [ ] Enhance loading screens and page transitions.
- [ ] Further performance optimizations and bundle size reduction.

---
*Designed and Developed with ❤️ by Subarna.*
