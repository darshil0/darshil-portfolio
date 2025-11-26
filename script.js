// ====================================
// MOBILE NAVIGATION
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

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
setActiveNavLink();

// ====================================
// SCROLL ANIMATIONS
// ====================================

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
    '.cert-category, .cert-item, .stat-item, .cert-stats'
);

animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeInObserver.observe(el);
});

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================

let lastScroll = 0;
const nav = document.querySelector('nav');

if (nav) {
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
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

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

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
createScrollToTop();

// ====================================
// CERTIFICATION COUNTER ANIMATION
// ====================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === parseInt(target) ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === parseInt(target) ? '+' : '');
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h3');
            statItems.forEach(item => {
                const target = parseInt(item.textContent.replace(/\D/g, ''));
                if (!isNaN(target)) {
                    animateCounter(item, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const certStats = document.querySelector('.cert-stats');
if (certStats) {
    statsObserver.observe(certStats);
}

// ====================================
// SEARCH/FILTER FUNCTIONALITY (OPTIONAL)
// ====================================

function createCertificateSearch() {
    const section = document.querySelector('#certifications');
    if (!section) return;

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        margin-bottom: 2rem;
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

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const certItems = document.querySelectorAll('.cert-item');

        certItems.forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            const issuer = item.querySelector('.cert-issuer').textContent.toLowerCase();

            if (title.includes(searchTerm) || issuer.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });

        // Hide categories with no visible items
        const categories = document.querySelectorAll('.cert-category');
        categories.forEach(category => {
            const visibleItems = category.querySelectorAll('.cert-item[style="display: flex;"], .cert-item:not([style*="display: none"])');
            if (searchTerm && visibleItems.length === 0) {
                category.style.display = 'none';
            } else {
                category.style.display = 'block';
            }
        });
    });

    searchContainer.appendChild(searchInput);
    const titleElement = document.querySelector('.page-subtitle');
    if (titleElement) {
        titleElement.parentNode.insertBefore(searchContainer, titleElement.nextSibling);
    }
}

// Uncomment to enable search functionality
// createCertificateSearch();

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
// CONSOLE MESSAGE
// ====================================

console.log('%c🎓 Darshil Shah Portfolio', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cView certifications and professional credentials', 'color: #7c3aed; font-size: 14px;');
