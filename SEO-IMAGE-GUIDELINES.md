# KOSTÜME SEO Image Guidelines

This document provides specifications for all SEO-related images for the KOSTÜME website.

## Image Directory Structure

```
public/
├── favicon.ico                   # Main favicon (32×32px)
├── apple-touch-icon.png          # Apple touch icon (180×180px)
├── icon-192.png                  # Android/PWA icon (192×192px)
├── icon-512.png                  # Large PWA icon (512×512px)
├── safari-pinned-tab.svg         # Safari pinned tab icon (SVG)
└── img/
    ├── seo/                      # Dedicated SEO images folder
    │   ├── kostume-og-main.jpg      # Main OpenGraph image (1200×630px)
    │   ├── kostume-collection-og.jpg # Collection OpenGraph (1200×630px)
    │   ├── kostume-denim-og.jpg     # Denim OpenGraph (1200×630px)
    │   ├── kostume-eyewear-og.jpg   # Eyewear OpenGraph (1200×630px)
    │   ├── kostume-twitter-large.jpg # Twitter large card (1200×600px)
    │   ├── kostume-twitter-summary.jpg # Twitter summary (800×800px)
    │   ├── kostume-logo.png          # Brand logo for structured data (512×512px)
    │   └── kostume-catalog.jpg       # Product catalog image (1000×1000px)
    ├── desktop/                  # Desktop product images
    ├── mobile/                   # Mobile product images
    └── ...                       # Other website images
```

## Image Specifications

### OpenGraph (Social Sharing) Images

| Image Filename | Dimensions | Format | Purpose |
|---------------|------------|--------|---------|
| kostume-og-main.jpg | 1200×630px | JPG/WebP | Main sharing image for social media |
| kostume-collection-og.jpg | 1200×630px | JPG/WebP | Collection-specific sharing image |
| kostume-denim-og.jpg | 1200×630px | JPG/WebP | Denim collection sharing image |
| kostume-eyewear-og.jpg | 1200×630px | JPG/WebP | Eyewear collection sharing image |

### Twitter Card Images

| Image Filename | Dimensions | Format | Purpose |
|---------------|------------|--------|---------|
| kostume-twitter-large.jpg | 1200×600px | JPG/WebP | Twitter large card format |
| kostume-twitter-summary.jpg | 800×800px | JPG/WebP | Twitter summary card format |

### Structured Data Images

| Image Filename | Dimensions | Format | Purpose |
|---------------|------------|--------|---------|
| kostume-logo.png | 512×512px | PNG | Brand logo for structured data |
| kostume-catalog.jpg | 1000×1000px | JPG/WebP | Product catalog for structured data |

### Favicon/Icon Set

| Image Filename | Dimensions | Format | Purpose |
|---------------|------------|--------|---------|
| favicon.ico | 32×32px | ICO | Main favicon |
| apple-touch-icon.png | 180×180px | PNG | iOS home screen icon |
| icon-192.png | 192×192px | PNG | Android home screen icon |
| icon-512.png | 512×512px | PNG | Large PWA icon |
| safari-pinned-tab.svg | SVG | SVG | Safari pinned tab |

## Design Guidelines

1. **Consistency**: Maintain consistent branding across all SEO images
2. **Clarity**: Ensure text is readable at small sizes
3. **Focus**: Keep the main subject centered and clear
4. **Branding**: Include logo and brand colors
5. **Quality**: Use high-quality, crisp images (no pixelation)
6. **Compression**: Optimize file sizes (aim for <200KB for OpenGraph images)

## Image Content Recommendations

### Main OG Image
- Feature your brand prominently
- Include a simple, clear tagline
- Use a clean, minimal design that stands out in feeds

### Collection Images
- Showcase best items from the collection
- Use a consistent layout across collections
- Include collection name clearly visible

### Twitter Images
- More concise with less text than OG images
- Ensure subject is clearly visible in center
- Test how they appear in Twitter's card validator

### Logos and Icons
- Use transparent background for logo PNG
- Ensure icons are recognizable at small sizes
- Test favicons across different browsers

## File Format Recommendations

- **JPG**: Use for photographic images with complex details
- **WebP**: Best choice for web optimization (with JPG fallbacks)
- **PNG**: Use for logos and graphics requiring transparency
- **SVG**: Ideal for simple icons that need to scale (like safari-pinned-tab)

## Testing

Before deployment, test your SEO images with:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Schema.org Validator](https://validator.schema.org/)

## Updating Images

Update these SEO images whenever:
- Your brand identity changes
- You launch a new major collection
- Your messaging or positioning changes
- You notice poor engagement on shared links 