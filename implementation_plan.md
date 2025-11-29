# Portfolio Website Issues - Implementation Plan

## Problem Description

The portfolio website has several issues that need to be fixed:

1. **Semantic HTML**: Using `<b>` tags instead of `<strong>` tags for emphasis
2. **Missing X/Twitter Links**: Footer sections are missing X/Twitter social media links
3. **Accessibility Issue**: One instance of `aria-hidden="false"` which should be `aria-hidden="true"`

## Proposed Changes

### HTML Files

#### [MODIFY] [index.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/index.html)

**Semantic HTML Fixes:**
- Replace 6 instances of `<b>` tags with `<strong>` tags (lines 80, 82, 83, 84, 85, 86)
  - Line 80: `<p><b>🏆 Key Achievements:</b></p>` → `<p><strong>🏆 Key Achievements:</strong></p>`
  - Line 82: `<li>🩺 <b>-40% Costs:</b>` → `<li>🩺 <strong>-40% Costs:</strong>`
  - Line 83: `<li>⏱️ <b>-30% Time:</b>` → `<li>⏱️ <strong>-30% Time:</strong>`
  - Line 84: `<li>📈 <b>+25% Coverage:</b>` → `<li>📈 <strong>+25% Coverage:</strong>`
  - Line 85: `<li>⭐ <b>100% Quality:</b>` → `<li>⭐ <strong>100% Quality:</strong>`
  - Line 86: `<li>👥 <b>15+ Engineers:</b>` → `<li>👥 <strong>15+ Engineers:</strong>`

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer (after line 387)

---

#### [MODIFY] [contact.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/contact.html)

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer (after line 127)

---

#### [MODIFY] [certifications.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/certifications.html)

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer (after line 355)

---

#### [MODIFY] [projects.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/projects.html)

**Accessibility Fix:**
- Line 203: Change `aria-hidden="false"` to `aria-hidden="true"` for decorative icon

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer (after line 236)

---

#### [MODIFY] [education.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/education.html)

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer

---

#### [MODIFY] [experience.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/experience.html)

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer

---

#### [MODIFY] [tools.html](file:///C:/Users/darsh/.gemini/antigravity/scratch/portfolio/darshil-portfolio-main/tools.html)

**Footer Enhancement:**
- Add X/Twitter link after LinkedIn link in footer

## Verification Plan

### Automated Tests

No existing automated tests were found in the repository. The portfolio is a static website without a test suite.

### Manual Verification

1. **Open the portfolio website in a browser**
   - Navigate to `C:\Users\darsh\.gemini\antigravity\scratch\portfolio\darshil-portfolio-main\index.html`
   - Open in browser to verify changes

2. **Verify Semantic HTML Changes**
   - On the home page, check that the "Key Achievements" section displays correctly
   - Inspect the HTML source to confirm `<strong>` tags are used instead of `<b>` tags

3. **Verify Footer Links on All Pages**
   - Visit each page: Home, Experience, Projects, Tools & Tech, Certifications, Education, Contact
   - Confirm footer contains 4 social links: GitHub, LinkedIn, X/Twitter, Email
   - Click X/Twitter link to verify it opens `https://x.com/darshil_s_shah` in a new tab

4. **Verify Accessibility Fix**
   - On the Projects page, inspect the envelope icon in the "Get In Touch" button
   - Confirm `aria-hidden="true"` is set correctly

5. **Test Responsive Design**
   - Resize browser window to mobile size
   - Verify footer links display correctly on mobile
   - Test navigation menu functionality
