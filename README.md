# Ali Hasnain — Portfolio (React)

A single-page React portfolio built with Vite. Content is pulled from your CV/old site: about,
stack, experience, EmotionSense + other projects, and contact info.

## Run it locally

    npm install
    npm run dev

Opens at http://localhost:5173.

## Build for production

    npm run build

Outputs a static site to dist/. Deploy that folder to Vercel, Netlify, GitHub Pages, or any
static host — no server needed.

## Structure

    src/
      components/
        Nav.jsx           top navigation + mobile menu
        Hero.jsx          landing section with the request/response "console" visual
        About.jsx         bio, photo, quick facts
        Skills.jsx        stack, grouped by category
        Experience.jsx    internship timeline + education
        Projects.jsx      EmotionSense (flagship) + other projects
        Contact.jsx       contact channels (email / WhatsApp / LinkedIn / GitHub)
        Footer.jsx
      index.css           design tokens (colors, type, spacing) — edit here to reskin
    public/
      cv/Ali_Hasnain_CV.pdf     linked from the "curl --resume" buttons
      images/ali-hasnain.jpg   your photo, used in the About section

## Things worth doing next

- Contact form: right now Contact links straight to email/WhatsApp/LinkedIn/GitHub — no
  contact form is wired up, since that needs a backend or a service like Formspree or EmailJS.
  Say the word and I'll wire one in.
- Real project links: the project cards don't link out yet because the old site's GitHub links
  were placeholders. Add real repo/live-demo URLs in src/components/Projects.jsx once
  EmotionSense and the others are pushed somewhere public.
- Project screenshots: swap the code-badge cards for real screenshots once you have them — drop
  images in public/images/projects/ and reference them in Projects.jsx.
- Update Experience.jsx any time a new internship, role, or milestone happens.
