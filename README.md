# Professional Portfolio Website

A modern, minimalist professional portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a resume/work history display, project showcase with media galleries, blog section, contact form, and analytics integration.

## Features

- 🎨 **Minimalist Design** - Clean, professional interface with responsive layout
- 📝 **Markdown Content** - Manage projects and blog posts using markdown files
- 🖼️ **Media Galleries** - Photo galleries with lightbox and video embeds
- 📄 **Resume/CV** - Interactive resume with work history, education, and skills
- 📧 **Contact Form** - Integrated contact form with validation
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and sitemap generation
- 📊 **Analytics Ready** - Support for Vercel Analytics, Plausible, or Google Analytics
- ⚡ **Performance** - Optimized images, code splitting, and static generation

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Deployment**: [Vercel](https://vercel.com) (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
- Add your email service credentials (Resend, SendGrid, or SMTP)
- Add your contact email address
- Add analytics ID (optional)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Updating Personal Information

Edit the following files to customize with your information:

- **Resume Data**: `content/data/resume.json` - Personal info, work experience, education, skills
- **Site Config**: `content/data/site-config.json` - Site metadata, navigation, social links

### Adding Projects

Create a new markdown file in `content/projects/`:

```markdown
---
title: "Project Title"
description: "Full project description"
excerpt: "Short description for cards"
date: "2024-01-15"
featured: true
status: "completed"
tags: ["React", "TypeScript", "Node.js"]
links:
  live: "https://example.com"
  github: "https://github.com/user/repo"
images:
  thumbnail: "/images/projects/project-name/thumb.jpg"
  gallery:
    - "/images/projects/project-name/screen1.jpg"
videos:
  - type: "youtube"
    url: "https://youtube.com/watch?v=xxxxx"
---

# Project content in markdown...
```

### Adding Blog Posts

Create a new markdown file in `content/blog/`:

```markdown
---
title: "Post Title"
excerpt: "Brief summary"
date: "2024-02-01"
author: "Your Name"
tags: ["React", "Tutorial"]
readTime: 8
featured: true
published: true
image: "/images/blog/post-image.jpg"
---

# Blog post content in markdown...
```

### Adding Images

Place images in the `public/images/` directory:
- Profile photos: `public/images/profile/`
- Project images: `public/images/projects/[project-name]/`
- Blog images: `public/images/blog/`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy

The site will automatically redeploy on every push to the main branch.

### Other Platforms

You can also deploy to:
- Netlify
- Railway
- AWS Amplify
- Any platform that supports Next.js

## Email Integration

The contact form supports multiple email providers:

### Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxx
```

4. Uncomment the Resend code in `src/app/api/contact/route.ts`

### SendGrid

1. Sign up at [SendGrid](https://sendgrid.com)
2. Create an API key
3. Add to `.env.local`:
```
SENDGRID_API_KEY=SG.xxxxx
```

### SMTP

For Gmail or other SMTP providers:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASSWORD=your_app_password
```

## Customization

### Colors and Theme

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    50: '#your-color',
    // ... more shades
  },
}
```

### Typography

Update fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

## Project Structure

```
├── content/              # Content files
│   ├── projects/        # Project markdown files
│   ├── blog/           # Blog post markdown files
│   └── data/           # JSON data files
├── public/             # Static assets
│   └── images/        # Images
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── types/        # TypeScript types
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please [open an issue](https://github.com/yourusername/portfolio/issues) on GitHub.
