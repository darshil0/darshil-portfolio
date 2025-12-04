# Darshil Shah - Professional Portfolio

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/darshil0/darshil-portfolio)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen.svg)]()

A modern, fully responsive portfolio website showcasing expertise in Healthcare QA Leadership, AI/ML innovation, and Digital Health transformation.

🔗 **[View Live Portfolio](https://darshil0.github.io/darshil-portfolio/)**

---

## Overview

This portfolio demonstrates over a decade of professional excellence in Healthcare Quality Assurance, highlighting measurable impact across patient care optimization, operational efficiency, and engineering leadership.

### Key Achievements

- 40% reduction in patient care costs through strategic shift-left testing
- 30% decrease in patient wait times via enhanced QA methodologies
- 25% expansion of test coverage across healthcare applications
- 100% quality delivery with zero production defects
- Leadership of 15+ engineers across distributed global teams

### Areas of Expertise

Healthcare QA and Test Automation, AI/ML Integration and Prompt Engineering, Digital Health Innovation, Agile and DevOps Practices, and Team Leadership and Mentorship.

---

## Features

### Design & User Experience

The site offers a fully responsive experience across desktop, tablet, and mobile devices, with WCAG 2.1 Level AA accessibility compliance. The design prioritizes clean aesthetics with intuitive navigation and optimized performance for fast load times.

### Interactive Elements

Mobile users benefit from a smooth hamburger menu with elegant animations. The certifications page includes dynamic filtering by category such as AI/ML, Cloud, and Project Management. A professional timeline visually represents career progression, while smooth transitions and hover effects create an engaging experience throughout.

### Technical Implementation

Built with semantic HTML5 for proper document structure and SEO optimization, the site uses modern CSS3 features including custom properties, flexbox, grid, and animations. Core functionality relies on vanilla JavaScript with zero external dependencies, ensuring clean, maintainable code.

---

## Site Structure

The portfolio consists of seven interconnected pages. The Home page features a hero section with quick stats, key skills, and highlights. Experience showcases a professional timeline from 2011 to 2025 with career achievements and roles. Projects presents detailed cards demonstrating impact metrics from signature work. Tools and Tech displays expertise across six technology domains. Certifications hosts 15+ professional credentials with interactive filters. Education outlines academic credentials including MBA and BE Computer Science degrees. Contact provides communication channels including email, LinkedIn, GitHub, and X.

---

## Quick Start

### Local Development

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/darshil0/darshil-portfolio.git
cd darshil-portfolio
```

You can open the site directly by double-clicking index.html, or use Python's built-in server for a better experience:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser. Alternatively, use Node.js http-server:

```bash
npx http-server -p 8000
```

### GitHub Pages Deployment

After making changes, commit and push to your repository:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Enable GitHub Pages by navigating to Settings, then Pages, and selecting Deploy from main branch as your source. Your site will be live at https://[username].github.io/[repository-name].

---

## Technology Stack

The frontend uses HTML5 for semantic markup, CSS3 with custom properties, Grid, and Flexbox, and vanilla JavaScript ES6+ without frameworks. Design resources include Font Awesome 6.4.0 for icons and Google Fonts Montserrat for typography. Development tools comprise Git and GitHub for version control, VS Code as the code editor, and GitHub Pages for hosting. No build tools are required as this is a pure static site with cache busting via version query strings.

---

## Project Structure

```
darshil-portfolio/
├── index.html              # Home page with hero and highlights
├── experience.html         # Professional timeline and roles
├── projects.html           # Project showcase with metrics
├── tools.html             # Technical skills and tools
├── certifications.html    # Professional certifications
├── education.html         # Academic credentials
├── contact.html           # Contact information
├── style.css              # Global styles and components
├── script.js              # Interactive features
├── images/                # Visual assets
│   ├── favicon.png        # Site favicon
│   └── [certificates]     # Certification images/PDFs
├── README.md              # Project documentation
└── LICENSE                # MIT License
```

---

## Customization Guide

### Updating Personal Information

Edit your name and credentials in the header and footer sections across all HTML files. Update contact details including email, phone, and social links in contact.html and the footer. Modify the hero section intro text and tagline in index.html to reflect your personal brand.

### Styling Modifications

Edit CSS custom properties in style.css to change the color scheme:

```css
:root {
  --ocean-blue: #0076BE;     /* Primary color */
  --magenta: #E91E8C;        /* Accent color */
  --blue: #1E90FF;           /* Secondary color */
  --green: #10B981;          /* Success color */
}
```

### Adding Content

To add a project, insert a new article element with the project-card class in projects.html:

```html
<article class="project-card">
  <div class="project-header">
    <i class="fas fa-project-icon project-icon"></i>
    <span class="project-badge">Category</span>
  </div>
  <h3>Project Title</h3>
  <p>Project description...</p>
</article>
```

To add a certification, insert a new article element in certifications.html:

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

## Recent Updates

### Version 3.0.0 (2025-12-04)

Fixed severely broken HTML structure in certifications.html that prevented 15 of 17 certification cards from displaying. Complete rewrite of the certifications page now properly structures all 17 cards. Added missing cert-date CSS style definition for proper date styling. Updated CSS version to 3.0.0 across all seven HTML pages for cache busting.

### Version 2.9.5 (2025-12-03)

Fixed certification titles that were truncated after two lines by removing CSS line-clamp properties. Resolved IBM Certification Icon display issue. Improved text wrapping with enhanced word-wrap and overflow-wrap properties for better readability of long certification names.

### Version 2.9.4 (2025-12-03)

Restored corrupted certifications.html with complete content. Added cache busting to CSS links with version bump to style.css?v=2.9.4 for immediate user updates.

### Version 2.9.3 (2025-12-03)

Fixed broken grid layout on Certifications page by correcting HTML structure for proper card rendering and ensuring consistency with other section layouts.

---

## Contributing

Contributions, issues, and feature requests are welcome. To contribute, fork the repository, create a feature branch with git checkout -b feature/amazing-feature, commit your changes with descriptive messages, push to the branch, and open a Pull Request.

When reporting bugs, include browser name and version, device type, operating system, steps to reproduce the issue, expected versus actual behavior, and screenshots if applicable. For feature requests, describe the feature clearly, explain the use case, and provide examples or mockups if possible.

---

## Roadmap

Planned features include a blog section for technical articles and insights, dark mode toggle with theme persistence, interactive skills visualization with proficiency levels, detailed case studies for major projects, and multi-language support for English, Spanish, and Hindi.

Under consideration are animation library integration with GSAP or Framer Motion, Progressive Web App features, backend contact form with email notifications, Google Analytics or privacy-focused analytics alternatives, Content Management System integration, and downloadable resume builder functionality.

Future enhancements may include video testimonials, interactive project demos, skills assessment quiz, newsletter subscription, and RSS feed for blog content.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details. The MIT License allows commercial use, modification, distribution, and private use, but comes without liability or warranty.

---

## Contact

**Darshil Shah**  
Healthcare QA Leader | AI/ML Enthusiast | Digital Health Expert

- Email: darshils99@gmail.com
- LinkedIn: linkedin.com/in/darshil-qa-lead
- GitHub: github.com/darshil0
- X (Twitter): x.com/soulsurfer300
- Location: Irving, Texas, United States
- Phone: 469-987-6574

---

## Acknowledgments

This portfolio was built using exceptional open-source tools and resources. Technology includes Font Awesome for comprehensive icon library, Google Fonts for Montserrat typeface, and GitHub Pages for free and reliable hosting. Development assistance came from Anthropic Claude AI for code optimization and review, and Google Labs Jules for development support. Inspiration came from the open-source community and fellow developers who share their knowledge freely.

---

## Performance & Browser Support

The site consists of seven fully responsive pages with over 3,500 lines of combined HTML, CSS, and JavaScript code. Average load time is under two seconds with 100% mobile responsiveness and WCAG 2.1 Level AA accessibility compliance. Supported browsers include the latest versions of Chrome, Firefox, Safari, Edge, and mobile browsers including iOS Safari and Chrome Mobile.

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ and ☕ by [Darshil Shah](https://github.com/darshil0)**

*Last Updated: December 4, 2025*

[Report Bug](https://github.com/darshil0/darshil-portfolio/issues) · [Request Feature](https://github.com/darshil0/darshil-portfolio/issues) · [View Live Site](https://darshil0.github.io/darshil-portfolio/)

</div>
