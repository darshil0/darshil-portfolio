// ====================================
// MOBILE NAVIGATION
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ====================================
// SMOOTH SCROLL
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#top') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ====================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ====================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ====================================
// SCROLL ANIMATIONS
// ====================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.cert-category, .cert-item, .stat-item, .cert-stats, ' +
        '.experience-card, .project-card, .skill-card, .expertise-card, ' +
        '.highlight-card, .education-card, .contact-method-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        fadeInObserver.observe(el);
    });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================

let lastScroll = 0;
const nav = document.querySelector('nav');

if (nav) {
    window.addEventListener('scroll', throttle(function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            nav.classList.add('scrolled');
        } else {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, 100));
}

// ====================================
// SCROLL TO TOP BUTTON
// ====================================

function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    const styles = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '999',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        fontSize: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    Object.assign(scrollBtn.style, styles);
    
    window.addEventListener('scroll', throttle(function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    }, 100));
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
    
    document.body.appendChild(scrollBtn);
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTop);

// ====================================
// COUNTER ANIMATION
// ====================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (Number.isInteger(target) ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (Number.isInteger(target) ? '+' : '');
        }
    }, 16);
}

// Animate stats when visible
function initCounterAnimations() {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number, .stat-item h3, h3.stat-number');
                statNumbers.forEach(item => {
                    const text = item.textContent.replace(/\D/g, '');
                    const target = parseInt(text);
                    if (!isNaN(target) && target > 0) {
                        item.setAttribute('data-animated', 'true');
                        animateCounter(item, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe all stat sections
    const statSections = document.querySelectorAll(
        '.cert-stats, .quick-stats, .experience-summary, ' +
        '.project-stats, .education-stats, .stats-grid'
    );
    
    statSections.forEach(section => {
        if (section) statsObserver.observe(section);
    });
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', initCounterAnimations);

// ====================================
// CONTACT FORM HANDLING
// ====================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Hide form and show success message
            const successMsg = document.getElementById('form-success');
            const errorMsg = document.getElementById('form-error');
            
            // Simple validation
            if (data.name && data.email && data.subject && data.message) {
                contactForm.style.display = 'none';
                if (successMsg) {
                    successMsg.style.display = 'block';
                }
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    if (successMsg) {
                        successMsg.style.display = 'none';
                    }
                }, 5000);
            } else {
                if (errorMsg) {
                    errorMsg.style.display = 'block';
                    setTimeout(() => {
                        errorMsg.style.display = 'none';
                    }, 5000);
                }
            }
        });
        
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#10b981';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#2563eb';
            });
        });
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', initContactForm);

// ====================================
// SEARCH/FILTER FUNCTIONALITY
// ====================================

function createCertificateSearch() {
    const section = document.querySelector('#certifications');
    if (!section) return;
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        margin: 2rem 0;
        text-align: center;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search certifications...';
    searchInput.className = 'cert-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 500px;
        padding: 0.875rem 1.25rem;
        font-size: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
        outline: none;
    `;
    
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#2563eb';
        this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#e5e7eb';
        this.style.boxShadow = 'none';
    });
    
    searchInput.addEventListener('input', debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const certItems = document.querySelectorAll('.cert-item');
        let visibleCount = 0;
        
        certItems.forEach(item => {
            const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
            const issuer = item.querySelector('.cert-issuer')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || issuer.includes(searchTerm)) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide categories with no visible items
        const categories = document.querySelectorAll('.cert-category');
        categories.forEach(category => {
            const visibleItems = Array.from(category.querySelectorAll('.cert-item'))
                .filter(item => item.style.display !== 'none');
            
            category.style.display = (searchTerm && visibleItems.length === 0) ? 'none' : 'block';
        });
        
        // Show "no results" message if needed
        showNoResultsMessage(visibleCount, section);
    }, 300));
    
    searchContainer.appendChild(searchInput);
    const titleElement = section.querySelector('.page-subtitle');
    if (titleElement) {
        titleElement.parentNode.insertBefore(searchContainer, titleElement.nextSibling);
    }
}

function showNoResultsMessage(count, container) {
    const existingMsg = container.querySelector('.no-results-message');
    
    if (count === 0 && !existingMsg) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.style.cssText = `
            text-align: center;
            padding: 3rem;
            color: #6b7280;
            font-size: 1.125rem;
        `;
        noResults.innerHTML = '<i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>No certifications found matching your search.';
        container.appendChild(noResults);
    } else if (count > 0 && existingMsg) {
        existingMsg.remove();
    }
}

// Uncomment to enable search functionality on certifications page
// document.addEventListener('DOMContentLoaded', createCertificateSearch);

// ====================================
// UTILITY FUNCTIONS
// ====================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ====================================
// LAZY LOADING IMAGES (if needed)
// ====================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// ====================================
// KEYBOARD NAVIGATION ACCESSIBILITY
// ====================================

function initKeyboardNavigation() {
    // Trap focus in mobile menu when open
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });
    }
    
    // ESC key closes mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', initKeyboardNavigation);

// ====================================
// PERFORMANCE MONITORING
// ====================================

function logPerformance() {
    if ('performance' in window && 'timing' in performance) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const timing = performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`%c⚡ Page loaded in ${(loadTime / 1000).toFixed(2)}s`, 'color: #10b981; font-weight: bold;');
            }, 0);
        });
    }
}

// Log performance
logPerformance();

// ====================================
// CONSOLE MESSAGE
// ====================================

console.log('%c🎓 Darshil Shah Portfolio', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cHealthcare QA Leader | AI/ML Expert', 'color: #7c3aed; font-size: 14px;');
console.log('%c💼 Open to: QA Lead, AI Consultant, PM roles', 'color: #059669; font-size: 12px;');
console.log('%c📧 Contact: darshils99@gmail.com', 'color: #6b7280; font-size: 12px;');
