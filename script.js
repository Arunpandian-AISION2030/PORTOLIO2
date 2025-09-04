// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll("section, .glass-card");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Typing Effect
const texts = ["Arun Pandian", "MERN Stack Developer", "AI & Data Science"];
let count = 0, index = 0;
function typeEffect() {
  const current = texts[count];
  document.getElementById("typing").textContent = current.slice(0, ++index);
  if (index === current.length) {
    setTimeout(() => { index = 0; count = (count + 1) % texts.length; }, 1200);
  }
}
setInterval(typeEffect, 150);

// Active Nav Highlight + Back to Top
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let currentId = "";
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 150) {
      currentId = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });

  // Back to Top button
  const btn = document.getElementById("backToTop");
  btn.style.display = window.pageYOffset > 500 ? "block" : "none";
});
document.getElementById("backToTop").addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
