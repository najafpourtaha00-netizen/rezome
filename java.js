document.addEventListener("DOMContentLoaded", () => {

    // سال جاری در فوتر
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // منوی موبایل
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
  
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }
  
    // اسکرول نرم برای لینک‌های داخلی
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
    // برجسته‌سازی لینک فعال منو هنگام اسکرول
    const sections = document.querySelectorAll("section[id]");
    const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach(a => {
            a.style.color = a.getAttribute("href") === '#${id}' ? "#e6a13c" : "";
          });
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });
  
    sections.forEach(sec => observer.observe(sec));
  });