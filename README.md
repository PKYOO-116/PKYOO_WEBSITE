# PKYOO_WEBSITE — Personal Portfolio Website

This is my personal portfolio website built with React, Vite, and SCSS.  
It’s designed to showcase my academic background, professional experience, technical skills, and selected projects, along with a few creative sections like photo experiments and volunteer work.

I focused on creating something clean, responsive, and engaging—across all devices.

Live site: [https://pkyoo-116.github.io/PKYOO_WEBSITE/]

---

## Overview

The site is organized into a series of themed sections, each carefully styled and, where appropriate, interactive.  
Animations, card sliders, fullscreen popups, and responsive grids are used to create a smooth user experience.

---

## Sections

| Section    | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| Home       | Landing page with animated name/title                                   |
| Education  | Timeline-style academic history (USC, MSU)                              |
| Experience | Vertical timeline with support for multiple roles per company           |
| Projects   | Custom card slider with GitHub/Web links and fullscreen image previews  |
| Skills     | Grouped skills by category (AI, Web, DevOps, etc.), with logos and tags |
| Community  | Volunteering and activities, some with image galleries                  |
| Daily      | Creative photo collage with randomized layout and animation             |
| Contact    | Email form (Formspree) with animated confirmation popup                 |

---

## Tech Stack

- React (functional components + hooks)
- Vite
- SCSS modules (custom mixins, breakpoints)
- Formspree (email service)
- GitHub Pages (for deployment)

---

## Features

- Responsive layout for all device types (mobile to UHD desktop)
- Section-specific animations triggered via IntersectionObserver
- Interactive card sliders with arrow and dot navigation
- Image lightbox for projects and community photos
- Contact form with popup confirmation and fade-out effect
- Clean design with grid-based layout and dynamic scaling

---

## Getting Started

To run locally:

```bash
# Clone the repository
git clone https://github.com/PKYOO-116/PKYOO_WEBSITE.git
cd PKYOO_WEBSITE

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```
