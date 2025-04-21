# KOSTÜME Fashion Website

A modern, responsive fashion brand website built with Next.js.

## Project Overview

KOSTÜME is a fashion brand from Buenos Aires, Argentina, selling ready-to-wear clothing and accessories. This website serves as their main landing page with region-specific shopping experiences for Argentina and worldwide customers.

## Tech Stack

- **Framework**: Next.js with static export
- **Styling**: Tailwind CSS
- **Deployment**: Static hosting (no server-side features)

## Key Features

- Region-specific content and shopping experience (Argentina/Worldwide)
- Responsive design optimized for mobile and desktop
- Image galleries with optimized aspect ratios
- Multilingual support (Spanish/English)
- Performance-optimized with code splitting and resource hints

## Development

### Prerequisites

- Node.js 16.x or higher
- npm/yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Image Guidelines

The site uses specific image dimensions and aspect ratios for optimal display:

### Banner/Hero Images
- **Desktop**: 1800px × 900px (2:1 aspect ratio)
- **Mobile**: 800px × 600px (4:3 aspect ratio)

### Gallery Images
- **Desktop**: 800px × 1067px (3:4 aspect ratio)
- **Mobile**: 400px × 500px (4:5 aspect ratio)

## SEO Implementation

- Comprehensive metadata with Open Graph and Twitter tags
- JSON-LD structured data for rich search results
- Semantic HTML throughout the site
- Proper heading hierarchy
- Sitemap.xml and robots.txt

## Performance Optimizations

- Responsive images with proper dimensions and aspect ratios
- Lazy loading for below-the-fold content
- Resource hints for external domains
- Font display optimization
- Client-side page transitions

## Directory Structure

- `/app`: Main application code (Next.js App Router)
- `/app/components`: Reusable UI components
- `/app/data`: Data files for menus, galleries, and banners
- `/app/home`: Main landing page
- `/public`: Static assets including images, fonts, and icons

## Contributing

When contributing to this project, please follow these guidelines:

1. Maintain consistent styling with Tailwind CSS
2. Follow existing naming conventions
3. Optimize images before adding them to the project
4. Test on both mobile and desktop viewports

## License

All rights reserved, KOSTÜME 2023 