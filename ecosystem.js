(function () {
  const topButton = document.querySelector(".apj-scroll-top");
  if (topButton) {
    const update = () => topButton.classList.toggle("is-visible", window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"]').forEach((link) => {
    link.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "apj_conversion_click", label: link.textContent.trim() });
    });
  });

  const nav = document.querySelector(".navbar, .header, header");
  const social = document.querySelector(".apj-social-strip");
  if (nav && social && !nav.querySelector(".apj-social-strip")) {
    const clone = social.cloneNode(true);
    clone.setAttribute("aria-label", "Official social profiles");
    nav.appendChild(clone);
  }
})();
