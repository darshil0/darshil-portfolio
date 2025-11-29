# Darshil Shah - Professional Portfolio

[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/darshil0/darshil-portfolio)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

A modern, responsive portfolio website showcasing professional experience, projects, certifications, and technical expertise in Healthcare QA, AI/ML, and Digital Health.

🔗 **Live Site:** [https://darshil0.github.io/darshil-portfolio/](https://darshil0.github.io/darshil-portfolio/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Pages](#pages)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Recent Updates](#recent-updates)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Future Roadmap](#future-roadmap)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio represents a decade of professional excellence in Healthcare QA Leadership, combining deep expertise in AI/ML, digital health innovation, and compliance-driven quality assurance. The site demonstrates measurable impact across patient care, operational efficiency, and team leadership.

### Professional Highlights

- 🏆 Achieved 40% reduction in patient care costs through strategic shift-left testing approaches
- ⏱️ Reduced patient wait times by 30% via enhanced QA methodologies
- 📈 Expanded test coverage by 25% across critical healthcare applications
- ⭐ Delivered 100% quality with zero defects, earning formal client recognition
- 👥 Led and mentored 15+ engineers across distributed global teams

---

## ✨ Key Features

### Design Philosophy
- **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- **Modern Aesthetics** - Clean, professional interface with intuitive navigation
- **Accessibility First** - WCAG 2.1 Level AA compliant with comprehensive ARIA support
- **Performance Optimized** - Fast loading times through efficient asset management
- **SEO Enhanced** - Structured data and semantic HTML for better discoverability
- **Brand Consistency** - Custom favicon and cohesive visual identity

### Interactive Elements
- **Mobile-First Navigation** - Smooth hamburger menu with slide-in animations
- **Dynamic Cards** - Engaging hover effects and fluid transitions
- **Smart Filtering** - Category-based certification filtering (AI/ML, Cloud, PM)
- **Timeline Visualization** - Chronological professional journey with clear milestones
- **Social Integration** - Direct connections to GitHub, LinkedIn, X/Twitter, and Email

### Technical Excellence
- **Semantic HTML5** - Proper document structure for accessibility and SEO
- **Modern CSS3** - Advanced animations and responsive layouts
- **Vanilla JavaScript** - Zero dependencies for optimal performance
- **GitHub Pages Compatible** - Simplified deployment and hosting workflow

---

## 📄 Pages

### Home (`index.html`)
Dynamic hero section featuring key achievements, quick statistics, technical skills, spoken languages, professional honors, areas of expertise, recent highlights, and clear calls-to-action.

### Experience (`experience.html`)
Comprehensive professional timeline spanning 2011-2024, documenting roles at Accenture, Infosys, TCS, and freelance engagements. Includes downloadable resume functionality.

### Projects (`projects.html`)
Detailed showcase of signature projects:
- Kaiser Permanente Mobile Healthcare Platform
- AI Evaluation QA Framework

Each project highlights measurable achievements and technology stack.

### Tools & Tech (`tools.html`)
Organized technical expertise across six domains:
- QA & Automation
- Cloud & DevOps
- AI & Machine Learning
- Programming & Databases
- Healthcare Domain Knowledge
- Project Management

### Certifications (`certifications.html`)
Portfolio of 15+ professional certifications with interactive category filtering. Features issuing authorities section with direct credential verification links.

### Education (`education.html`)
Academic credentials including MBA in Information Technology and Bachelor of Engineering in Computer Science.

### Contact (`contact.html`)
Multiple communication channels including email, LinkedIn, phone, and GitHub with clear accessibility labels.

---

## 🛠️ Technical Stack

### Frontend Technologies
- **HTML5** - Semantic markup and modern document structure
- **CSS3** - Flexbox and Grid layouts with custom animations
- **JavaScript (ES6+)** - Interactive features and DOM manipulation
- **Font Awesome 6.4.0** - Comprehensive icon library
- **Google Fonts (Montserrat)** - Professional typography

### Development Tools
- **GitHub Pages** - Static site hosting and continuous deployment
- **Git** - Distributed version control system
- **VS Code** - Integrated development environment

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor or IDE for modifications
- Git for version control

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshil0/darshil-portfolio.git
   cd darshil-portfolio
   ```

2. **Launch locally**
   
   Option A: Direct browser access
   ```bash
   # Simply open index.html in your browser
   ```
   
   Option B: Local server (recommended)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **View in browser**
   ```
   Navigate to http://localhost:8000
   ```

### GitHub Pages Deployment

1. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Access repository Settings
   - Navigate to Pages section
   - Select `main` branch as deployment source
   - Save configuration and await automatic deployment

3. **Access live site**
   ```
   https://yourusername.github.io/darshil-portfolio/
   ```

---

## 📁 Project Structure

```
darshil-portfolio/
│
├── index.html              # Landing page with hero and highlights
├── experience.html         # Professional timeline
├── projects.html           # Project showcase
├── tools.html             # Technical skills and expertise
├── certifications.html    # Professional credentials
├── education.html         # Academic background
├── contact.html           # Contact information
│
├── style.css              # Global stylesheet
├── script.js              # Interactive functionality
│
├── README.md              # Documentation (this file)
├── LICENSE                # MIT License
│
└── images/                # Visual assets
    ├── hero-background.jpg
    └── favicon.ico
```

---

## 🆕 Recent Updates

### Version 2.2.0 (November 29, 2025)

#### Brand Identity Enhancement
- Added custom `favicon.ico` for improved brand recognition
- Integrated favicon across all seven pages for consistent identity
- Updated documentation to reflect branding improvements

### Version 2.1.0 (November 29, 2025)

#### Accessibility & Standards Compliance
- Replaced all `<b>` tags with semantic `<strong>` tags for better screen reader support
- Enhanced SEO through improved semantic HTML structure
- Added X/Twitter social media integration across all pages
- Corrected X handle URL to `https://x.com/soulsurfer300`
- Fixed Font Awesome icon compatibility (updated to `fab fa-twitter`)
- Implemented security best practices with `target="_blank"` and `rel="noopener noreferrer"` on external links
- Corrected ARIA attributes (`aria-hidden="true"` on decorative elements)
- Standardized footer structure across entire site
- Validated HTML5 compliance and removed duplicate attributes

---

## 📝 Changelog

### [2.2.0] - 2025-11-29

#### Added
- Custom favicon integration in images directory
- Favicon links across all HTML pages for brand consistency

#### Changed
- Updated README.md with favicon documentation and version information

---

### [2.1.0] - 2025-11-29

#### Added
- X/Twitter social links in all page footers
- Security attributes for external link safety
- Comprehensive ARIA labels for social media accessibility

#### Changed
- Updated X/Twitter handle to correct URL
- Converted bold tags to strong tags for semantic HTML (6 instances)
- Updated icon library class for Font Awesome compatibility

#### Fixed
- Corrected ARIA hidden attributes on decorative icons
- Standardized footer implementation across pages
- Resolved icon display issues
- Enhanced semantic HTML compliance

---

### [2.0.1] - 2025-11-28

#### Fixed
- Removed Twitter/X icon from footer navigation
- Corrected GitHub icon styling for visual consistency
- Adjusted contact page email button text to prevent overflow

---

### [2.0.0] - 2025-11-28

#### Added
- Comprehensive tools page with six expertise categories
- Duration badges on experience timeline for context
- Page subtitles for improved navigation clarity
- Organized skill groups with enhanced styling
- Improved card layouts across entire site
- Smooth mobile navigation animations

#### Changed
- Complete tools.html redesign with better organization
- Enhanced education card structure and visual hierarchy
- Improved experience timeline with clearer milestones
- Updated CSS component library
- Refined responsive breakpoints for all device sizes
- Enhanced button styling with multiple variants

#### Fixed
- Standardized footer across all pages
- Consistent X/Twitter link implementation
- Removed duplicate ARIA attributes
- Corrected icon inconsistencies throughout site
- Improved semantic HTML structure
- Fixed mobile menu z-index and positioning issues
- Enhanced card hover effects and transitions
- Refined typography hierarchy and spacing

---

### [1.0.0] - 2025-10-01

#### Initial Release
- Seven-page portfolio structure
- Responsive design foundation
- Core CSS styling framework
- JavaScript navigation implementation
- Basic interactive elements

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and bug reports are appreciated.

### Contribution Process

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/improvement-description
   ```
3. Implement your changes
4. Commit with clear messages
   ```bash
   git commit -m "Add: detailed change description"
   ```
5. Push to your fork
   ```bash
   git push origin feature/improvement-description
   ```
6. Submit a pull request with detailed description

### Issue Reporting

Found a bug or have a suggestion? Please open an issue including:
- Clear problem description or enhancement proposal
- Steps to reproduce (for bugs)
- Screenshots or recordings (if applicable)
- Browser, device, and OS information

---

## 🎯 Future Roadmap

### Planned Enhancements
- Blog section for technical articles and insights
- Dark mode toggle for user preference
- Client testimonials section with recommendations
- Interactive skills visualization chart
- Detailed case studies for major projects
- Multi-language support for global audience
- Analytics integration for visitor insights
- Backend integration for contact form

### Under Consideration
- Animation library integration (AOS or GSAP)
- Progressive Web App capabilities
- Advanced lazy loading for performance
- Enhanced SEO implementation
- Expanded social media integration

---

## 📊 Project Statistics

- **Total Pages:** 7
- **Codebase:** ~3,500+ lines (HTML/CSS/JS)
- **Last Updated:** November 29, 2025
- **Current Version:** 2.2.0
- **Browser Support:** Latest versions of Chrome, Firefox, Safari, Edge
- **Mobile Support:** iOS and Android platforms
- **Accessibility:** WCAG 2.1 Level AA Compliant

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.

---

## 📞 Contact

**Darshil Shah**  
Healthcare QA Leader | AI/ML Enthusiast | Digital Health Expert

- 📧 Email: [darshils99@gmail.com](mailto:darshils99@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead)
- 🐙 GitHub: [github.com/darshil0](https://github.com/darshil0)
- 🐦 X (Twitter): [x.com/soulsurfer300](https://x.com/soulsurfer300)
- 📍 Location: Irving, Texas, United States
- 📱 Phone: 469-987-6574

---

## 🙏 Acknowledgments

Special thanks to the open-source community and tools that made this portfolio possible:

- **Font Awesome** for the comprehensive icon library
- **Google Fonts** for the professional Montserrat typeface
- **GitHub Pages** for reliable hosting and deployment
- **Anthropic (Claude AI)** for code optimization and quality improvements

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Darshil Shah](https://github.com/darshil0)

[🔝 Back to Top](#darshil-shah---professional-portfolio)

</div>
