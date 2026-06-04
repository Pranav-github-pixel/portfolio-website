# Version 1.0 Website Specification

## Vision
A personal website that feels:
- Elegant
- Minimal
- Professional
- Thoughtful

The website should present both my professional work and my personality/interests while remaining lightweight, fast, and easy to maintain.

---

## Technical Stack
- Next.js 15+ (App Router)
- Tailwind CSS v4
- Framer Motion
- MDX-driven content

---

## Design Direction

### Primary Inspiration: Bill Chien's Website (https://www.billchien.net/)
**NOT copying visuals. Only borrowing:**
- Simplicity
- Navigation philosophy
- Overall experience

### Elements To Borrow
1. **Landing Page Presence**: Large typography, clear visual hierarchy, significant whitespace, minimal distractions. Hero should feel intentional and premium.
2. **Navigation Philosophy**: Single navigation trigger, expands on click/hover, reveals all sections, minimal when collapsed, smooth and polished.
3. **Motion Design Language**: Smooth, intentional, lightweight, refined. Enhance navigation and storytelling.
4. **Layout Rhythm**: Large breathing room between sections, strong separation, generous margins, comfortable reading width.
5. **Premium Simplicity**: Thoughtfully designed, modern, professional, human.

### Elements To AVOID
- Exact layouts/animations/typography/colors from Bill Chien
- Corporate feel
- Template-based look
- Startup landing page
- Over-engineered portfolio

### Desired Emotional Response
- "This person is thoughtful."
- "This website is intentionally designed."
- "The content matters."
- "I want to keep exploring."

---

## Color Palette (Warm Modern)
| Role | Color | Hex |
|------|-------|-----|
| Background | Warm Ivory | #F8F5EF |
| Surface | Soft Cream | #F1ECE2 |
| Primary Text | Deep Graphite | #1E1E1E |
| Secondary Text | Warm Gray | #5B5B5B |
| Accent | Antique Gold | #C29A5C |
| Accent Hover | Burnished Gold | #A98247 |
| Border | Light Linen | #DDD5C7 |

## Typography
- **Headings**: Outfit (geometric, clean, modern)
- **Body**: Inter (gold standard readability)
- Typography is a PRIMARY design element

---

## Global Navigation
Single expandable navigation button (inspired by Bill Chien).
- Logo visible
- Click → reveals Home, Portfolio, About, Blog
- Appears consistently across all pages
- Feels smooth and polished

---

## Page Structure

### 1. HOME
- **Hero Section**: Name, profile image, short tagline. Large typography.
- **Introduction Section**: 2-3 paragraphs (Who am I? What am I doing? What interests me?)
- **Quick Navigation**: Buttons for Portfolio, About Me, Skills
- **Latest Writing**: Auto-pulled from blog folder

### 2. PORTFOLIO
- **Skills Shortcut**: Top button scrolls to skills section
- **Experience**: Chronological (newest→oldest), alternating left-right layout
- **Projects**: Chronological, each with title/summary/cover/tech/links, alternating layout
- **Achievements**: Date, title, description, image, alternating layout
- **Skills**: Categories (Programming, Frameworks, Tools, AI/ML, Soft Skills) - visually interesting
- **Education**: College (degree, institution, CGPA), 11th-12th, 10th

### 3. ABOUT
- Personal, not professional
- **Introduction**: Longer personal story
- **Values**: Continuous learning, building useful things, intellectual honesty, consistency
- **Philosophy**: Learning in public, systems over goals, curiosity-driven growth
- **Interests & Hobbies**: Reading, fitness, open source, writing, travel, photography
- **Current Focus**: What currently learning/building

### 4. BLOG
- Content from content/blog/
- Each article: Title, Date, Tags, Reading Time

---

## Footer
- GitHub, LinkedIn, Email, Resume
- Simple and consistent on every page

---

## Motion System (4 categories ONLY)
1. **Page Transitions**: Smooth fade, 200-400ms
2. **Scroll Reveal**: Sections gently appear, small upward motion
3. **Hover Effects**: Links, buttons, cards, navigation
4. **Timeline Progress**: Experience/Projects/Achievements timeline fills progressively on scroll (SIGNATURE animation)

---

## Visual Principles
### Prioritize
- Typography
- White space
- Content readability
- Subtle motion

### Avoid
- Excessive 3D
- Particle effects
- Heavy WebGL
- Unnecessary motion
