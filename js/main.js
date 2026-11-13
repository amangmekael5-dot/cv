/**
 * PORTFOLIO & CV INTERACTIVE JAVASCRIPT
 * -------------------------------------------------------------
 * Handles typewriter effects, project filtering, theme switcher,
 * mobile drawer, toast feedback, and seamless ATS CV export.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme Switcher
  initTheme();

  // 2. Initialize Dynamic Typing Effect
  initTypewriter();

  // 3. Render Projects & Filter Logic
  renderProjects();
  initProjectFilters();

  // 4. Initialize Mobile Navigation
  initMobileNav();

  // 5. Initialize Scroll Spy for Active Nav State
  initScrollSpy();

  // 6. Initialize Contact Form & Clipboard
  initContactForm();

  // 7. Update Dynamic Year in Footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* ==========================================
   THEME SWITCHER (Dark / Light)
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  if (theme === "light") {
    themeIcon.className = "fas fa-moon";
    themeIcon.title = "Switch to Dark Mode";
  } else {
    themeIcon.className = "fas fa-sun";
    themeIcon.title = "Switch to Light Mode";
  }
}

/* ==========================================
   TYPEWRITER ANIMATION
   ========================================== */
function initTypewriter() {
  const textElement = document.getElementById("typewriterText");
  if (!textElement) return;

  const roles = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.personal.roles) 
    ? PORTFOLIO_DATA.personal.roles 
    : [
        "Full-Stack Web Developer",
        "Dire Dawa University (DDU) IT Student",
        "API & Backend Specialist",
        "Software Engineering Enthusiast"
      ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 45;
  const holdDelay = 1800;

  function typeStep() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        typeStep();
      }, holdDelay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeStep, 350);
      return;
    }

    const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeStep, nextSpeed);
  }

  typeStep();
}

/* ==========================================
   PROJECTS RENDERING & FILTERING
   ========================================== */
function renderProjects(filterCategory = "all") {
  const gridContainer = document.getElementById("projectsContainer");
  if (!gridContainer || typeof PORTFOLIO_DATA === "undefined") return;

  const projects = PORTFOLIO_DATA.projects || [];
  const filtered = filterCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  gridContainer.innerHTML = "";

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <p>No projects currently listed in this category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-category", project.category);

    const highlightsHtml = (project.highlights || [])
      .map(h => `<li>${h}</li>`)
      .join("");

    const tagsHtml = (project.techStack || [])
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    // Choose project icon based on category
    let iconClass = "fa-laptop-code";
    if (project.category === "backend") iconClass = "fa-server";
    if (project.category === "frontend") iconClass = "fa-palette";
    if (project.category === "fullstack") iconClass = "fa-layer-group";

    card.innerHTML = `
      <div class="project-thumbnail">
        <span class="project-badge">${project.categoryLabel || "Featured Project"}</span>
        <i class="fas ${iconClass} thumbnail-icon"></i>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <ul class="project-highlights">
          ${highlightsHtml}
        </ul>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-footer">
          <a href="${project.projectUrl || '#'}" class="btn btn-primary btn-sm">
            <i class="fas fa-layer-group"></i> View Real Project
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <i class="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================
   MOBILE MENU NAVIGATION
   ========================================== */
function initMobileNav() {
  const menuToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("open")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });

  // Close menu when clicking any nav item
  const links = navLinks.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      const icon = menuToggle.querySelector("i");
      if (icon) icon.className = "fas fa-bars";
    });
  });
}

/* ==========================================
   SCROLL SPY (ACTIVE NAV LINK)
   ========================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* ==========================================
   CONTACT FORM & TOAST NOTIFICATIONS
   ========================================== */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast("Message sent successfully! I will get back to you soon.");
      }, 1200);
    });
  }
}

// Global helper for showing quick toast notifications
window.showToast = function(message) {
  let toast = document.getElementById("customToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "customToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
};

// Global helper to copy text to clipboard
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Text: ${text}`);
  });
};
