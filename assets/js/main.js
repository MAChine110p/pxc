/* ── reveal on load ─────────────────────────────────────── */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".fade");

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    items.forEach(function (el) {
      var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
      // above-the-fold elements stagger; the rest reveal on scroll
      if (el.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(function () { el.classList.add("in"); }, 240 + delay * 130);
      } else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });
        io.observe(el);
      }
    });
  }
})();

/* ── language toggle ────────────────────────────────────── */
/* zh is the source language; EN is only wired up where a
   data-en attribute exists on the element. */
(function () {
  var KEY = "pxc-lang";
  var buttons = document.querySelectorAll("[data-lang-btn]");
  if (!buttons.length) return;

  function apply(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-zh]").forEach(function (el) {
      var v = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      if (v) el.textContent = v;
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  var saved = "zh";
  try { saved = localStorage.getItem(KEY) || "zh"; } catch (e) {}
  apply(saved);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang-btn")); });
  });
})();
