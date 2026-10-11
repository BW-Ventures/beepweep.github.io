# BeepWeep Ventures - Feature Documentation

This document provides detailed information about all features implemented in the BeepWeep Ventures website.

## Table of Contents
1. [Theme System](#theme-system)
2. [Navigation & Header](#navigation--header)
3. [Hero Section](#hero-section)
4. [Ecosystems](#ecosystems)
5. [Partners Section](#partners-section)
6. [Team Section](#team-section)
7. [Footer](#footer)
8. [Interactive Elements](#interactive-elements)
9. [SEO & Analytics](#seo--analytics)
10. [Accessibility](#accessibility)

---

## Theme System

### Light/Dark Mode Toggle

**Location**: Header (top right)

**Features**:
- **Auto-Detection**: On first visit, the site automatically detects your system's color scheme preference (`prefers-color-scheme`)
- **Manual Toggle**: Click the sun/moon icon to switch between themes
- **Smooth Transitions**: All color changes animate over 0.3 seconds for a polished experience
- **Persistence**: Your theme choice is saved in `localStorage` and persists across sessions
- **System Sync**: If no manual preference is set, the site continues to follow system changes

**Implementation Details**:
```javascript
// Theme stored in localStorage as 'beepweep-theme'
// Values: 'light' | 'dark'
// Applied via data-theme attribute on <html> element
```

**Color Schemes**:

*Light Mode*:
- Background: `#ffffff`
- Text: `#000000`
- Accents: International Orange (`#ff4d00`), Hyper Blue (`#0055ff`)

*Dark Mode*:
- Background: `#111111`
- Text: `#ffffff`
- Inverted borders and shadows for contrast

---

## Navigation & Header

### Brand Mark
- Skewed design with orange shadow
- Uppercase Space Grotesk font
- Hover scale effect

### Greeting Badges
- Multi-language greetings (English, Hindi, Japanese, Chinese)
- Button-style design with borders and shadows
- Hidden on mobile to save space

### Theme Toggle
- Sun icon for light mode
- Moon icon for dark mode
- Tactile click effect

**Responsive Behavior**:
- Desktop: Horizontal layout
- Mobile: Vertical stack, greeting hidden

---

## Hero Section

### Main Headline
- Massive uppercase text (6.5rem max, scales down on mobile)
- "10x builders" highlighted with orange background and tilt
- Decorative crosshairs (+) in corners

### Bio Section
- Left-aligned text with blue accent border
- White background with shadow
- Responsive font sizing

### Call-to-Action Buttons
- "Careers" (primary orange button)
- "Get in Touch" (outline button)
- Full width on mobile
- Tactile press effects

---

## Ecosystems

### Investment Areas Grid

**Layout**:
- Bento-style responsive grid
- Blockchain card spans 2x2 on desktop
- Auto-fit layout for smaller screens

**Card Features**:
- Emoji icons with colored shadows
- Uppercase headings with accent underlines
- Year badges
- Diagonal stripe pattern on hover
- Hard offset shadows that lift on hover

**Areas Covered**:
1. Blockchain (2020 Onwards)
2. Fund Manager (2018)
3. Payments (2017)
4. Ad Tech (2017)
5. Travel (2016)
6. News Media (2015)

---

## Partners Section

### Trusted Companies Marquee

**Visual Design**:
- Black background for maximum contrast
- White/orange text
- Inverted from main theme

**Animation**:
- Infinite horizontal scroll
- Smooth CSS animation (20s loop)
- Duplicated content for seamless loop

**Partners Displayed**:
- Acme Corp, Globex, Soylent, Initech, Umbrella
- Massive, Hooli, Vehement, Stark, Cyberdyne

**Hover Effects**:
- Full opacity
- Orange color change
- Text shadow

---

## Team Section

### The Architects

**Title**: Changed from singular "The Architect" to plural "The Architects"

**Layout**:
- Responsive grid (2 columns on desktop, 1 on mobile)
- Auto-fit with 400px minimum card width

### Team Member Cards

**Components**:
1. **Profile Image** (if available)
   - Circular crop
   - 150px diameter
   - Black border with orange shadow
   
2. **Name** (h3)
   - Blue background with skew effect
   - White text
   - Black shadow

3. **Role with Subtitle**
   - Primary role in uppercase
   - Creative abbreviation expansion below
   - Semi-transparent subtitle

4. **Bio** (for primary members)
   - Left-aligned text
   - Slightly smaller font
   - 90% opacity for softer look

5. **Social Links**
   - LinkedIn and X (Twitter) icons
   - Opacity hover effect
   - Scale animation on hover

**Current Team**:
- **Madhur Satija**: CEO (Chief Execution Officer)
- **Abhishek Kaushik**: CTO (Chief Troubleshooting Officer)

---

## Footer

### Legal Information
- Bold typography with thick left border
- **Dynamic Copyright Year**: Automatically updates via JavaScript
- Format: "© 2015 to [CURRENT_YEAR] | BeepWeep Ventures. All rights reserved."

### Navigation Links
- Privacy Policy (internal page)
- LinkedIn (company page)
- GitHub (repository)

**Link Styling**:
- Button-style design
- Hard shadows
- Lift effect on hover
- Press effect on click

**Responsive**:
- Horizontal layout on desktop
- Vertical stack on mobile
- Centered alignment

---

## Interactive Elements

### Cookie Banner

**Position**: Fixed bottom-right corner

**Features**:
- Auto-dismiss after 10 seconds
- Visual countdown timer
- Manual accept button
- Privacy policy link
- Stored consent in localStorage

**Behavior**:
- Shows once per browser session
- Dismisses on button click or timeout
- Fade-out animation

**Dark Mode Support**:
- Inverted colors in dark mode
- White background becomes dark
- Black text becomes white

---

## SEO & Analytics

### Meta Tags
- Complete Open Graph tags for social sharing
- Twitter Card support
- Descriptive meta description
- Viewport configuration

### Structured Data
- JSON-LD Organization schema
- Company name, URL, logo
- Social media links (sameAs)

### Google Analytics
- Tracking ID: G-171E0C1V7V
- Standard gtag.js implementation
- Privacy-compliant cookie usage

### Performance
- No external frameworks
- Minimal JavaScript
- Pure CSS animations
- Optimized images

---

## Accessibility

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Meaningful section elements
- Navigation landmarks

### ARIA Labels
- All icon-only buttons labeled
- Screen reader context for images
- Role attributes where needed

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Visible focus states

### Color Contrast
- WCAG AA compliant ratios
- High contrast in both themes
- Bold, thick text for readability

### Responsive Text
- Relative units (rem) throughout
- Scales with browser settings
- No horizontal scrolling
- Touch-friendly button sizes (minimum 44px)

---

## Browser Support

**Modern Browsers** (last 2 versions):
- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Opera ✅

**Features Used**:
- CSS Custom Properties
- CSS Grid & Flexbox
- LocalStorage API
- matchMedia (for dark mode detection)

**Graceful Degradation**:
- Works without JavaScript (static theme)
- CSS fallbacks for older browsers
- Progressive enhancement approach

---

## Performance Metrics

**Lighthouse Scores** (Target):
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Optimizations**:
- No render-blocking resources
- Minimal JavaScript execution
- Efficient CSS selectors
- Optimized image formats

---

## Future Enhancements

**Planned Features**:
- [ ] Blog/News section
- [ ] Portfolio case studies
- [ ] Contact form
- [ ] Team member profile pages
- [ ] Investment criteria page
- [ ] Application process workflow

**Technical Improvements**:
- [ ] Service Worker for offline support
- [ ] Image lazy loading
- [ ] Font subsetting
- [ ] Critical CSS inlining
- [ ] Automated accessibility testing

---

## Maintenance

### Regular Updates
- ✅ Copyright year (automated)
- 📅 Team member information (as needed)
- 📅 Partners list (quarterly review)
- 📅 Investment ecosystems (annual update)

### Monitoring
- Google Analytics for traffic insights
- GitHub Pages deployment status
- Browser console for errors
- User feedback via contact form

---

*Last Updated: November 24, 2024*
