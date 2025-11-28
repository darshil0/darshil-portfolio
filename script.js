document.addEventListener("DOMContentLoaded", function () {
  // ====================================
  // MOBILE NAVIGATION
  // ====================================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    // Toggle mobile menu
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");

      // Animate hamburger icon
      const spans = hamburger.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(10px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-10px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnHamburger &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });

    // Keyboard navigation for accessibility
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hamburger.click();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // ====================================
  // SMOOTH SCROLL
  // ====================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "#top") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ====================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ====================================
  setActiveNavLink();

  // ====================================
  // SCROLL ANIMATIONS
  // ====================================
  initScrollAnimations();

  // ====================================
  // SCROLL TO TOP BUTTON
  // ====================================
  createScrollToTop();

  // ====================================
  // COUNTER ANIMATION
  // ====================================
  initCounterAnimations();

  // ====================================
  // CONTACT FORM HANDLING
  // ====================================
  initContactForm();

  // ====================================
  // LAZY LOADING IMAGES
  // ====================================
  initLazyLoading();

  // ====================================
  // CERTIFICATION FILTER
  // ====================================
  initCertificationFilter();
});

// ====================================
// FUNCTIONS
// ====================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (navLinks.length > 0) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkPage = link.getAttribute("href");

      if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html") ||
        (currentPage === "/" && linkPage === "index.html")
      ) {
        link.classList.add("active");
      }
    });
  }
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeInObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".cert-category, .cert-item, .stat-item, .cert-stats, " +
      ".experience-card, .project-card, .skill-card, .expertise-card, " +
      ".highlight-card, .education-card, .contact-method-card",
  );

  if (animatedElements.length > 0) {
    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
      fadeInObserver.observe(el);
    });
  }
}

// FIX: Declare lastScroll before using it
const nav = document.querySelector("nav");
if (nav) {
  let lastScroll = 0;

  window.addEventListener(
    "scroll",
    throttle(function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
        nav.classList.add("scrolled");
      } else {
        nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        nav.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    }, 100),
  );
}

function createScrollToTop() {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.className = "scroll-to-top";
  scrollBtn.setAttribute("aria-label", "Scroll to top");

  const styles = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    border: "none",
    cursor: "pointer",
    opacity: "0",
    visibility: "hidden",
    transition: "all 0.3s ease",
    zIndex: "999",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  Object.assign(scrollBtn.style, styles);

  window.addEventListener(
    "scroll",
    throttle(function () {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";
      } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
      }
    }, 100),
  );

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  });

  scrollBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  });

  document.body.appendChild(scrollBtn);
}

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (Number.isInteger(target) ? "+" : "");
      clearInterval(timer);
    } else {
      element.textContent =
        Math.floor(current) + (Number.isInteger(target) ? "+" : "");
    }
  }, 16);
}

function initCounterAnimations() {
  const statSections = document.querySelectorAll(
    ".cert-stats, .quick-stats, .experience-summary, " +
      ".project-stats, .education-stats, .stats-grid",
  );

  if (statSections.length > 0) {
    const statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll(
              ".stat-number, .stat-item h3, h3.stat-number",
            );
            statNumbers.forEach((item) => {
              const text = item.textContent.replace(/\D/g, "");
              const target = parseInt(text);
              if (!isNaN(target) && target > 0) {
                item.setAttribute("data-animated", "true");
                animateCounter(item, target);
              }
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    statSections.forEach((section) => {
      statsObserver.observe(section);
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      const successMsg = document.getElementById("form-success");
      const errorMsg = document.getElementById("form-error");

      if (data.name && data.email && data.subject && data.message) {
        contactForm.style.display = "none";
        if (successMsg) {
          successMsg.style.display = "block";
        }

        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = "block";
          if (successMsg) {
            successMsg.style.display = "none";
          }
        }, 5000);
      } else {
        if (errorMsg) {
          errorMsg.style.display = "block";
          setTimeout(() => {
            errorMsg.style.display = "none";
          }, 5000);
        }
      }
    });

    const inputs = contactForm.querySelectorAll(
      "input[required], textarea[required]",
    );
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        if (this.value.trim() === "") {
          this.style.borderColor = "#ef4444";
        } else {
          this.style.borderColor = "#10b981";
        }
      });

      input.addEventListener("focus", function () {
        this.style.borderColor = "#2563eb";
      });
    });
  }
}

function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

function initCertificationFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const certCards = document.querySelectorAll(".cert-card");
  const certItems = document.querySelectorAll(".cert-item");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        const category = this.getAttribute("data-category");

        if (certCards.length > 0) {
          certCards.forEach((card) => {
            if (
              category === "all" ||
              card.getAttribute("data-category") === category
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        }

        if (certItems.length > 0) {
          certItems.forEach((item) => {
            if (
              category === "all" ||
              item.getAttribute("data-category") === category
            ) {
              item.style.display = "flex";
            } else {
              item.style.display = "none";
            }
          });
        }
      });
    });
  }
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
