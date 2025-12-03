# Darshil Shah - Professional Portfolio

[![Version](https://img.shields.io/badge/version-2.9.5-blue.svg)](https://github.com/darshil0/darshil-portfolio)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen.svg)]()

A modern, fully responsive portfolio website showcasing expertise in Healthcare QA Leadership, AI/ML innovation, and Digital Health transformation.

🔗 **[View Live Portfolio](https://darshil0.github.io/darshil-portfolio/)**

---

## 🎯 Overview

This portfolio represents over a decade of professional excellence in Healthcare Quality Assurance, demonstrating measurable impact across patient care optimization, operational efficiency, and engineering leadership.

### Key Highlights

**Impact Metrics:**
- 40% reduction in patient care costs through strategic shift-left testing
- 30% decrease in patient wait times via enhanced QA methodologies
- 25% expansion of test coverage across healthcare applications
- 100% quality delivery with zero production defects
- Leadership of 15+ engineers across distributed global teams

**Professional Focus:**
- Healthcare QA & Test Automation
- AI/ML Integration & Prompt Engineering
- Digital Health Innovation
- Agile & DevOps Practices
- Team Leadership & Mentorship

---

## ✨ Features

### Design & User Experience
- **Fully Responsive:** Seamless experience across desktop, tablet, and mobile devices
- **Accessibility:** WCAG 2.1 Level AA compliant with semantic HTML and ARIA labels
- **Modern Aesthetic:** Clean, professional design with intuitive navigation
- **Performance Optimized:** Fast load times with minimal dependencies

### Interactive Elements
- **Mobile Navigation:** Smooth hamburger menu with elegant animations
- **Dynamic Filtering:** Interactive certification categories (AI/ML, Cloud, Project Management)
- **Professional Timeline:** Visual representation of career progression
- **Smooth Transitions:** Engaging hover effects and animations throughout

### Technical Implementation
- **Semantic HTML5:** Proper document structure for SEO and accessibility
- **Modern CSS3:** Custom properties, flexbox, grid, and animations
- **Vanilla JavaScript:** Zero external dependencies for core functionality
- **SEO Optimized:** Meta tags, structured data, and descriptive content

---

## 📂 Site Structure

### Pages

| Page | Description | Key Features |
|------|-------------|--------------|
| **Home** | Landing page with hero section | Quick stats, key skills, highlights, CTA |
| **Experience** | Professional journey (2011-2025) | Career timeline, achievements, roles |
| **Projects** | Showcase of signature work | Detailed project cards, impact metrics |
| **Tools & Tech** | Technical expertise | 6 technology domains, tools mastery |
| **Certifications** | Professional credentials | 17+ certifications, interactive filters |
| **Education** | Academic background | MBA, BE Computer Science |
| **Contact** | Communication channels | Email, LinkedIn, GitHub, X (Twitter) |

---

## 🚀 Quick Start

### View Locally

```bash
# Clone the repository
git clone https://github.com/darshil0/darshil-portfolio.git
cd darshil-portfolio

# Option 1: Open directly in browser
# Simply double-click index.html

# Option 2: Use Python's built-in server (recommended)
python -m http.server 8000
# Visit http://localhost:8000 in your browser

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

### Deploy to GitHub Pages

```bash
# Commit and push your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Enable GitHub Pages
# Navigate to: Settings > Pages > Source: Deploy from main branch
# Your site will be live at: https://[username].github.io/[repository-name]
```

---

## 🛠️ Tech Stack

**Frontend Technologies**
- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript ES6+ (Vanilla, no frameworks)

**Design Resources**
- Font Awesome 6.4.0 (Icons)
- Google Fonts - Montserrat (Typography)

**Development Tools**
- Git & GitHub (Version control)
- VS Code (Code editor)
- GitHub Pages (Hosting)

**Build Process**
- No build tools required
- Pure static site
- Cache busting via version query strings

---

## 📁 Project Structure

```
darshil-portfolio/
│
├── index.html              # Home page with hero and highlights
├── experience.html         # Professional timeline and roles
├── projects.html           # Project showcase with metrics
├── tools.html             # Technical skills and tools
├── certifications.html    # Professional certifications
├── education.html         # Academic credentials
├── contact.html           # Contact information
│
├── style.css              # Global styles and components
├── script.js              # Interactive features
│
├── images/                # Visual assets
│   ├── favicon.png        # Site favicon
│   └── [certificates]     # Certification images/PDFs
│
├── README.md              # Project documentation
└── LICENSE                # MIT License
```

---

## 🎨 Customization Guide

### Update Personal Information

1. **Header & Footer:** Edit name and credentials in all HTML files
2. **Contact Details:** Update email, phone, and social links in `contact.html` and footer
3. **Hero Section:** Modify intro text and tagline in `index.html`

### Modify Styling

```css
/* Edit CSS custom properties in style.css */
:root {
  --ocean-blue: #0076BE;     /* Primary color */
  --magenta: #E91E8C;        /* Accent color */
  --blue: #1E90FF;           /* Secondary color */
  --green: #10B981;          /* Success color */
}
```

### Add New Content

**Adding a Project:**
```html
<article class="project-card">
  <div class="project-header">
    <i class="fas fa-project-icon project-icon"></i>
    <span class="project-badge">Category</span>
  </div>
  <h3>Project Title</h3>
  <p>Project description...</p>
  <!-- Add tech tags and impact metrics -->
</article>
```

**Adding a Certification:**
```html
<article class="cert-card" data-category="ai-ml">
  <div class="cert-badge">
    <i class="fas fa-certificate"></i>
  </div>
  <h4>Certification Name</h4>
  <p class="cert-issuer">
    <i class="fas fa-graduation-cap"></i> Issuer
  </p>
  <p class="cert-date">Issued: Month Year</p>
</article>
```

---

## 📋 Recent Updates

### v2.9.5 (2025-12-03)
**Fixed:**
- Certification titles no longer truncated after 2 lines
- Removed CSS line-clamp properties preventing full text display

**Improved:**
- Added word-wrap and overflow-wrap for proper text wrapping
- Enhanced readability of long certification names

### v2.9.4 (2025-12-03)
**Critical Fixes:**
- Restored corrupted `certifications.html` with complete content
- Added cache busting to CSS links for immediate user updates
- Version bump to `style.css?v=2.9.4`

### v2.9.3 (2025-12-03)
**Layout Fixes:**
- Fixed broken grid layout on Certifications page
- Corrected HTML structure for proper card rendering
- Ensured consistency with other section layouts

### v2.9.2 (2025-12-03)
**Grid Implementation:**
- Converted Experience page from timeline to modern card grid
- Applied responsive grid layouts across all major sections
- Added CSS grid utilities for Projects, Tools, Education

### v2.9.1 (2025-12-03)
**Data Accuracy:**
- Corrected swapped certificate links (AI Fluency Framework & Scrum Basics)
- Removed incorrect certificate link for Introduction to MCP
- Audited all 17 certifications for accurate name-issuer-file mapping

### v2.9.0 (2025-12-03)
**Quality Improvements:**
- New professional "DS" logo favicon in PNG format
- Removed duplicate CSS `.stat-card` definition (14 lines)
- Fixed GitHub URL inconsistency in contact page
- Comprehensive browser testing with verification screenshots

[View Full Changelog](#changelog)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add: amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Bug Reports

When reporting bugs, please include:
- Browser name and version
- Device type (desktop/mobile/tablet)
- Operating system
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)

### Feature Requests

For feature suggestions, please:
- Describe the feature clearly
- Explain the use case
- Provide examples or mockups if possible

---

## 🗺️ Roadmap

### Planned Features
- [ ] Blog section for technical articles and insights
- [ ] Dark mode toggle with theme persistence
- [ ] Interactive skills visualization with proficiency levels
- [ ] Detailed case studies for major projects
- [ ] Multi-language support (English, Spanish, Hindi)
- [ ] Enhanced testimonials with client photos ✅ (Completed v2.7.0)

### Under Consideration
- [ ] Animation library integration (GSAP or Framer Motion)
- [ ] Progressive Web App (PWA) features
- [ ] Backend contact form with email notifications
- [ ] Google Analytics or privacy-focused analytics
- [ ] Content Management System (CMS) integration
- [ ] Downloadable resume builder

### Future Enhancements
- [ ] Video testimonials
- [ ] Interactive project demos
- [ ] Skills assessment quiz
- [ ] Newsletter subscription
- [ ] RSS feed for blog

---

## 📊 Changelog

### [2.9.5] - 2025-12-03
**Fixed**
- Certification card titles now display complete text without truncation
- Removed `-webkit-line-clamp: 2` CSS property limiting title height

**Changed**
- Updated word-wrap properties for better text handling on long names
- Improved mobile responsiveness for certification cards

### [2.9.4] - 2025-12-03
**Fixed**
- Restored missing certification content in HTML file
- Added version query string to CSS for cache invalidation

**Deployment**
- CSS now loads as `style.css?v=2.9.4` to force browser refresh

### [2.9.3] - 2025-12-03
**Fixed**
- Certification page grid layout properly renders all cards
- Corrected HTML structure with proper container nesting

**Verified**
- Grid consistency across all major pages confirmed

### [2.9.2] - 2025-12-03
**Changed**
- Experience page converted from vertical timeline to card grid layout
- All major sections now use consistent responsive grid system
- Enhanced mobile viewing experience

**Added**
- CSS grid definitions for `.experience-grid`, `.education-grid`
- Responsive breakpoints for optimal viewing on all devices

### [2.9.1] - 2025-12-03
**Fixed**
- Swapped certificate links now point to correct files
- Removed broken link for Introduction to MCP certificate

**Verified**
- Complete audit of 17 certifications confirms 100% accuracy

### [2.9.0] - 2025-12-03
**Added**
- Professional "DS" logo favicon across all 7 pages
- Comprehensive browser testing suite

**Changed**
- Consolidated duplicate CSS rules for cleaner codebase
- Improved code maintainability

**Fixed**
- GitHub URL trailing slash inconsistency resolved
- Removed 14 lines of duplicate CSS

### [2.8.0] - 2025-12-03
**Added**
- Certificate images to `/images` directory
- Proper file attachments for all certifications

**Fixed**
- All broken certificate links now functional
- Image display issues on certifications page

### [2.7.0] - 2025-12-03
**Added**
- 273+ lines of enhanced CSS styling
- Dedicated styling class for Quick Stats display

**Changed**
- Experience timeline with improved layout
- Enhanced card spacing and typography
- Optimized responsive design for all breakpoints

**Cleanup**
- Removed verification directory and temporary files
- Streamlined repository structure

### [2.6.0] - 2025-12-02
**Added**
- "Back to Top" link in footer for easier navigation
- Grid layout implementation for certifications page

**Changed**
- Formatted all HTML files for consistency

### [2.5.0] - 2025-12-02
**Added**
- 7 new professional certifications with downloadable certificates
- Interactive "View Certificate" buttons
- Total: 17 certifications showcased

**Updated**
- Resume PDF with latest experience and credentials
- Social media links (X/Twitter URL updated)

### [2.4.0] - 2025-12-02
**Major Update**
- 980+ lines of comprehensive CSS styling
- Complete UI overhaul with light theme consistency
- Fully functional mobile hamburger menu

**Added**
- Hero section with profile placeholder
- Contact page grid layout
- Project cards with badges and tech tags
- Testimonials section structure

**Verified**
- Desktop and mobile testing completed for all 7 pages

### [2.3.0] - 2025-12-01
**Added**
- New professional color scheme
- Modern design system with CSS custom properties

**Changed**
- Complete CSS overhaul for improved consistency
- Enhanced typography and spacing

### [2.2.0] - 2025-11-29
**Added**
- Custom favicon integration
- Brand identity elements

### [2.1.0] - 2025-11-29
**Added**
- X/Twitter social integration
- Security attributes for external links
- Comprehensive ARIA labels

**Changed**
- Semantic HTML improvements
- Standardized footer across all pages

### [2.0.0] - 2025-11-28
**Major Release**
- Complete redesign of multiple pages
- Comprehensive tools page with 6 categories
- Enhanced responsive design

**Added**
- Duration badges for experience
- Page subtitles for context
- Organized skill groups

### [1.0.0] - 2025-10-01
**Initial Release**
- Seven-page portfolio structure
- Responsive design foundation
- Core functionality implemented

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**MIT License Summary:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 👤 Contact

**Darshil Shah**  
Healthcare QA Leader | AI/ML Enthusiast | Digital Health Expert

📧 **Email:** [darshils99@gmail.com](mailto:darshils99@gmail.com)  
💼 **LinkedIn:** [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead)  
🐙 **GitHub:** [github.com/darshil0](https://github.com/darshil0)  
🐦 **X (Twitter):** [x.com/soulsurfer300](https://x.com/soulsurfer300)  
📍 **Location:** Irving, Texas, United States  
📱 **Phone:** 469-987-6574

---

## 🙏 Acknowledgments

This portfolio was built using exceptional open-source tools and resources:

**Technology:**
- [Font Awesome](https://fontawesome.com/) - Comprehensive icon library
- [Google Fonts](https://fonts.google.com/) - Montserrat typeface
- [GitHub Pages](https://pages.github.com/) - Free and reliable hosting

**Development Assistance:**
- [Anthropic Claude AI](https://www.anthropic.com/) - Code optimization and review
- [Google Labs Jules](https://labs.google/) - Development support

**Inspiration:**
- The open-source community for countless examples and best practices
- Fellow developers who share their knowledge freely

---

## 📈 Stats & Performance

**Site Metrics:**
- **Pages:** 7 fully responsive pages
- **Lines of Code:** 3,500+ (HTML, CSS, JS combined)
- **Load Time:** < 2 seconds (average)
- **Mobile Score:** 100% responsive
- **Accessibility:** WCAG 2.1 Level AA compliant

**Browser Support:**
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 💡 Tips for Users

**For Recruiters:**
- Check the Experience page for detailed work history
- Review Projects for technical implementation examples
- Certifications page shows commitment to continuous learning

**For Developers:**
- Code is clean, well-commented, and follows best practices
- Responsive design techniques can be studied in `style.css`
- JavaScript interactions are vanilla JS (no frameworks)

**For Designers:**
- Color scheme and design system defined in CSS custom properties
- Component-based approach for consistent UI
- Accessibility considerations built into every element

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ and ☕ by [Darshil Shah](https://github.com/darshil0)**

*Last Updated: December 3, 2025*

[Report Bug](https://github.com/darshil0/darshil-portfolio/issues) · [Request Feature](https://github.com/darshil0/darshil-portfolio/issues) · [View Live Site](https://darshil0.github.io/darshil-portfolio/)

</div>
