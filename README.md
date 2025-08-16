# Brew & Bloom — Coffee Shop Website

A modern, full-width, responsive coffee shop website demo built with plain HTML, Tailwind CSS (via CDN), and a small Express server for handling contact and reservation/order requests.

Files

- index.html — Main landing page (hero, menu highlights, gallery, mini-quiz, reservation modal)
- about.html — Story, team, sourcing
- contact.html — Contact form, details, map placeholder
- server/index.js — Minimal Express server with /api/reserve and /api/contact endpoints
- package.json — Node scripts and dependencies
- render.yaml — Example deployment config for Render.com
- README.md — This file

Key features

- Full-width responsive layouts: all primary wrappers use fluid/w-full and avoid fixed max widths so content flows edge-to-edge on all devices.
- Tailwind CSS classes used directly in HTML via the CDN for quick prototyping.
- Google Fonts are referenced via comments at the top of HTML files in the required format: <!-- {{font: Montserrat}} {{font: Playfair Display}} -->
- Subtle animations: reveal-on-scroll, micro-interactions, accordions, and modal dialogs.
- Reservation / order modal that posts to /api/reserve (server simulates processing).
- Contact form posting to /api/contact.
- Image placeholders use the AI-requested format: https://pixabay.com/get/g67f5f3fdd51cdba95cbcdbf3a905c670d2670f7a502e15fe70f14b0df6683d9ac307794dc575a1f66b79c4d86a54ec71fffb590107065cab01884a002acd7961_640.jpg — replaceable by the image system to fetch high-quality photos.

Local development

1. Save files to a project folder.
2. Install dependencies:
   npm install
3. Start the server:
   npm start
4. Open http://localhost:3000

Notes

- This is a demo template. Swap in your brand colors, text, and real images. Replace the https://images.unsplash.com/photo-1663010363660-d75c1c69958b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw4fHwuLi58ZW58MHwwfHx8MTc1NTM0MjE1NXww&ixlib=rb-4.1.0&q=80&w=1080 placeholders with actual image URLs if you prefer.
- For production, consider integrating a build step for Tailwind to purge unused styles and to host fonts locally.
- To connect reservations and contacts to real systems, integrate an email provider (SendGrid, Mailgun) or a database.

If you want, I can:
- Replace image placeholders with curated Unsplash/Pexels URLs.
- Add an ordering integration or calendar booking system.
- Expand server to persist submissions (SQLite/Postgres) and send email notifications.

Enjoy building your coffee shop site!