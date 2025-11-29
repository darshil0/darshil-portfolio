# Darshil Shah - Professional Portfolio

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/darshil0/darshil-portfolio)
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
- ✅ **Social Integration** - Direct links to GitHub, LinkedIn, X/Twitter, and Email

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

### Version 2.1.0 (November 29, 2025)

#### Quality & Accessibility Improvements

##### **Semantic HTML Enhancements**
- ✅ Replaced all `<b>` tags with `<strong>` tags for proper semantic meaning
- ✅ Improved accessibility for screen readers
- ✅ Better SEO optimization through semantic structure

##### **Footer Consistency & Social Media Integration**
- ✅ Added X/Twitter social link to all 7 pages
- ✅ Updated X handle to correct URL: `https://x.com/soulsurfer300`
- ✅ Fixed icon display issue (changed from `fa-x-twitter` to `fab fa-twitter` for Font Awesome 6.4.0 compatibility)
- ✅ Ensured all external links have `target="_blank"` and `rel="noopener noreferrer"` for security
- ✅ Consistent footer structure across all pages

##### **Accessibility Fixes**
- ✅ Fixed `aria-hidden="false"` to `aria-hidden="true"` on decorative icons
- ✅ Proper ARIA labels on all social media links
- ✅ Enhanced keyboard navigation support
- ✅ Improved screen reader compatibility

##### **Code Quality**
- ✅ Validated HTML5 compliance
- ✅ Removed duplicate attributes
- ✅ Consistent code formatting
- ✅ Better maintainability

#### Files Modified
- `index.html` - Semantic HTML fixes, footer enhancement
- `contact.html` - Footer enhancement
- `certifications.html` - Footer enhancement
- `projects.html` - Accessibility fix, footer enhancement
- `education.html` - Footer enhancement
- `experience.html` - Footer enhancement
- `tools.html` - Footer enhancement

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
├── tools.html             # Technical expertise
├── certifications.html    # Professional certifications
├── education.html         # Academic background
├── contact.html           # Contact information
│
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
│
├── README.md              # This file
├── LICENSE                # MIT License
│
└── images/                # Images and assets
    └── hero-background.jpg
```

---

## 📝 Changelog

### [2.1.0] - 2025-11-29

#### Added
- X/Twitter social link to all 7 page footers
- Proper security attributes (`target="_blank"` and `rel="noopener noreferrer"`) on all external links
- Comprehensive accessibility labels for social media links

#### Changed
- Updated X/Twitter handle to `https://x.com/soulsurfer300`
- Replaced `<b>` tags with `<strong>` tags for semantic HTML (6 instances in index.html)
- Changed icon class from `fa-x-twitter` to `fab fa-twitter` for Font Awesome 6.4.0 compatibility

#### Fixed
- Accessibility issue: Changed `aria-hidden="false"` to `aria-hidden="true"` on decorative icons
- Footer consistency across all pages
- Icon display issue in footer
- Semantic HTML compliance

### [2.0.1] - 2025-11-28

#### Fixed
- Removed Twitter/X icon from the footer across all pages
- Corrected styling of the GitHub icon in the footer for consistency
- Updated the email button text on the contact page to prevent overflow

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
- Semantic HTML improvements
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

---

## 📞 Contact

**Darshil Shah**  
Healthcare QA Leader | AI/ML Enthusiast | Digital Health Expert

- 📧 **Email:** [darshils99@gmail.com](mailto:darshils99@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead)
- 🐙 **GitHub:** [github.com/darshil0](https://github.com/darshil0)
- 🐦 **X (Twitter):** [x.com/soulsurfer300](https://x.com/soulsurfer300)
- 📍 **Location:** Irving, Texas, United States
- 📱 **Phone:** 469-987-6574

---

## 🙏 Acknowledgments

- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For the Montserrat font family
- **GitHub Pages** - For free hosting and deployment
- **Anthropic (Claude AI)** - For assistance with code optimization and quality improvements

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
- **Last Updated:** November 29, 2025
- **Version:** 2.1.0
- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Support:** iOS, Android
- **Accessibility Score:** WCAG 2.1 Level AA Compliant

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Darshil Shah](https://github.com/darshil0)

[🔝 Back to Top](#darshil-shah---professional-portfolio)

</div>
