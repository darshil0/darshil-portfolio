# Darshil Shah - Professional Portfolio

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/darshil0/darshil-portfolio)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

A modern, responsive portfolio website showcasing professional experience, projects, certifications, and technical expertise in Healthcare QA, AI/ML, and Digital Health.

🔗 **Live Site:** [https://darshil0.github.io/darshil-portfolio/](https://darshil0.github.io/darshil-portfolio/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Recent Updates](#recent-updates)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio website represents my professional journey as a Healthcare QA Leader with 10+ years of experience in AI/ML, digital health, and compliance. The site showcases measurable achievements including 40% cost savings and safer patient outcomes.

### Key Highlights

- 🏆 **40% Cost Reduction** in patient care costs through shift-left strategies
- ⏱️ **30% Faster** patient wait times via enhanced QA strategies
- 📈 **25% Increase** in test coverage across healthcare applications
- ⭐ **100% Quality** delivery with zero defects (client recognized)
- 👥 **15+ Engineers** led across global teams

---

## ✨ Features

### Design & User Experience
- ✅ **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- ✅ **Fast Loading** - Optimized assets and efficient CSS
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML

### Functionality
- ✅ **Mobile Navigation** - Smooth hamburger menu with slide-in animation
- ✅ **Interactive Cards** - Hover effects and smooth transitions
- ✅ **Certification Filtering** - Dynamic filtering by category (AI/ML, Cloud, PM)
- ✅ **Timeline View** - Professional experience displayed chronologically
- ✅ **Dark/Light Compatibility** - Readable on all background colors

### Technical Features
- ✅ **Semantic HTML5** - Proper structure and accessibility
- ✅ **CSS3 Animations** - Smooth transitions and effects
- ✅ **Vanilla JavaScript** - No dependencies, fast performance
- ✅ **GitHub Pages Ready** - Easy deployment and hosting

---

## 📄 Pages

### 1. **Home** (`index.html`)
Hero section with key achievements, quick stats, top skills, languages, honors & awards, areas of expertise, recent highlights, and call-to-action.

### 2. **Experience** (`experience.html`)
Detailed professional timeline spanning 2011-2025, including roles at Accenture, Infosys, TCS, and freelance work. Features downloadable resume button.

### 3. **Projects** (`projects.html`)
Showcase of major projects including:
- Kaiser Permanente Mobile Healthcare Platform
- AI Evaluation QA Framework
With detailed achievements and technologies used.

### 4. **Tools & Tech** (`tools.html`)
Comprehensive technical expertise organized into 6 categories:
- QA & Automation
- Cloud & DevOps
- AI & Machine Learning
- Programming & Databases
- Healthcare Domain
- Project Management

### 5. **Certifications** (`certifications.html`)
15+ professional certifications with filtering by category. Includes issuing authorities section with direct links to credential profiles.

### 6. **Education** (`education.html`)
Academic background including MBA in Information Technology and Bachelor of Engineering.

### 7. **Contact** (`contact.html`)
Multiple ways to connect via email, LinkedIn, phone, and GitHub.

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive features and animations
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Montserrat font family

### Tools & Platforms
- **GitHub Pages** - Hosting and deployment
- **Git** - Version control
- **VS Code** - Development environment

---

## 🆕 Recent Updates

### Version 2.0.0 (November 2025)

#### Major Enhancements

##### **Tools & Tech Page - Complete Redesign**
- Transformed from basic list to comprehensive showcase
- Added 6 detailed expertise categories with skill groups
- Enhanced visual hierarchy and professional presentation
- Better demonstrates full technical skillset

##### **Education Page - Structure Improvement**
- Added descriptive page subtitle
- Restructured education cards with better visual layout
- Separated degree titles from specializations
- Added calendar icons to duration fields
- Improved responsive design

##### **Experience Page - Visual Enhancements**
- Added duration badge for Accenture position (4 years 11 months)
- Enhanced timeline styling with better spacing
- Improved mobile responsiveness
- Better visual hierarchy

##### **All Pages - Consistency Fixes**
- Standardized footer across all pages
- Fixed X/Twitter link consistency (`https://x.com/darshil_s_shah`)
- Added proper `target="_blank"` and `rel="noopener noreferrer"` to all external links
- Unified icon usage (`fa-twitter` consistently)

#### CSS Improvements
- Added education-specific card styles
- Enhanced timeline with duration badges
- Added skill-group styling for tools page
- Improved button variants (primary, secondary, outline, download)
- Enhanced mobile navigation menu
- Better hover effects on all cards
- Improved responsive breakpoints
- Better typography hierarchy

#### HTML Validation Fixes
- Changed `<b>` tags to `<strong>` for semantic correctness
- Removed duplicate ARIA attributes
- Fixed icon inconsistencies
- Enhanced accessibility labels
- Improved semantic structure

#### Accessibility Enhancements
- Added proper ARIA labels throughout
- Enhanced keyboard navigation support
- Improved screen reader compatibility
- Better color contrast ratios
- Proper focus states on interactive elements

---

## 💻 Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git (for cloning)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshil0/darshil-portfolio.git
   cd darshil-portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. **Access locally**
   - Open `http://localhost:8000` in your browser

### Deployment to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Save and wait for deployment

3. **Access your site**
   - Visit `https://yourusername.github.io/darshil-portfolio/`

---

## 📁 Project Structure

```
darshil-portfolio/
│
├── index.html              # Home page
├── experience.html         # Professional experience timeline
├── projects.html           # Project showcase
├── tools.html             # Technical expertise (enhanced)
├── certifications.html    # Professional certifications
├── education.html         # Academic background
├── contact.html           # Contact information
│
├── style.css              # Main stylesheet (enhanced v2.0)
├── script.js              # JavaScript functionality
│
├── README.md              # This file
├── LICENSE                # MIT License
│
└── assets/                # Images and other assets (optional)
    └── images/
```

---

## 📝 Changelog

### [2.0.0] - 2025-11-28

#### Added
- Comprehensive tools page with 6 expertise categories
- Duration badges on experience timeline
- Page subtitles for better context
- Skill group styling for organized presentation
- Enhanced card layouts across all pages
- Better mobile navigation with smooth animations

#### Changed
- Complete redesign of tools.html page
- Enhanced education card structure and layout
- Improved experience timeline visual hierarchy
- Updated CSS with new component styles
- Better responsive breakpoints for all devices
- Enhanced button styling with multiple variants

#### Fixed
- Footer consistency across all pages
- X/Twitter link standardization
- Removed duplicate ARIA attributes
- Fixed icon inconsistencies
- Semantic HTML improvements (b → strong tags)
- Mobile menu z-index and positioning
- Card hover effects and transitions
- Typography hierarchy and spacing

### [1.0.0] - 2025-10-01

#### Initial Release
- Basic portfolio structure
- 7 main pages (Home, Experience, Projects, Tools, Certifications, Education, Contact)
- Responsive design
- Basic CSS styling
- JavaScript navigation menu

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and bug reports are welcome!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Reporting Issues

Found a bug? Have a suggestion? Please open an issue with:
- Clear description of the problem/suggestion
- Steps to reproduce (for bugs)
- Screenshots (if applicable)
- Browser and device information

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Darshil Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Darshil Shah**  
Healthcare QA Leader | AI/ML Enthusiast | Digital Health Expert

- 📧 **Email:** [darshils99@gmail.com](mailto:darshils99@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead)
- 🐙 **GitHub:** [github.com/darshil0](https://github.com/darshil0)
- 📍 **Location:** Irving, Texas, United States
- 📱 **Phone:** 469-987-6574

---

## 🙏 Acknowledgments

- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For the Montserrat font family
- **GitHub Pages** - For free hosting and deployment
- **Claude AI (Anthropic)** - For assistance with code optimization and bug fixes

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Blog section for technical articles
- [ ] Dark mode toggle
- [ ] Testimonials section
- [ ] Interactive skills chart
- [ ] Case studies for major projects
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Contact form backend integration

### Under Consideration
- [ ] Animation library integration (AOS, GSAP)
- [ ] Progressive Web App (PWA) features
- [ ] Performance optimization with lazy loading
- [ ] Advanced SEO techniques
- [ ] Social media integration

---

## 📊 Project Stats

- **Total Pages:** 7
- **Lines of Code:** ~3,500+ (HTML/CSS/JS)
- **Last Updated:** November 28, 2024
- **Version:** 2.0.0
- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Support:** iOS, Android
- **Accessibility Score:** WCAG 2.1 Level AA Compliant

---

## 💡 Tips for Using This Portfolio

### For Developers
- Use this as a template for your own portfolio
- Customize colors in CSS variables (search for `#007bff` and `#0056b3`)
- Add your own projects and experience
- Update meta tags for SEO

### For Recruiters
- All pages are designed for easy navigation
- Download resume button on Experience page
- Direct links to LinkedIn, GitHub, and email
- Comprehensive skills breakdown on Tools page

### For Collaborators
- Follow the existing code structure
- Maintain consistent naming conventions
- Test on multiple devices before committing
- Update README for any significant changes

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Darshil Shah](https://github.com/darshil0)

[🔝 Back to Top](#darshil-shah---professional-portfolio)

</div>
