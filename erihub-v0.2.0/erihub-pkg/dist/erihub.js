/* =======================================================================
   ERIHUB JS — v0.2.0
   Vanilla JS, no dependencies. Powers the interactive pieces of the
   framework: dropdowns, tabs, accordion, modal, toasts, carousel.
   Attribute-driven so components work by adding data- attributes to
   markup — no per-instance JS needed for the common case.
   ======================================================================= */

(function () {
  "use strict";

  /* ---------- Dropdown ---------- */
  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-eh-dropdown-trigger]");
    document.querySelectorAll(".eh-dropdown.is-open").forEach(function (open) {
      if (!trigger || open !== trigger.closest(".eh-dropdown")) {
        open.classList.remove("is-open");
      }
    });
    if (trigger) {
      var dropdown = trigger.closest(".eh-dropdown");
      dropdown.classList.toggle("is-open");
    }
  });

  /* ---------- Tabs ---------- */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest("[data-eh-tab]");
    if (!tab) return;
    var group = tab.closest("[data-eh-tabs]");
    var targetId = tab.getAttribute("data-eh-tab");

    group.querySelectorAll("[data-eh-tab]").forEach(function (t) { t.classList.remove("is-active"); });
    tab.classList.add("is-active");

    var panelGroup = document.querySelector('[data-eh-tab-panels="' + group.getAttribute("data-eh-tabs") + '"]');
    if (panelGroup) {
      panelGroup.querySelectorAll("[data-eh-tab-panel]").forEach(function (panel) {
        panel.style.display = panel.getAttribute("data-eh-tab-panel") === targetId ? "block" : "none";
      });
    }
  });

  /* ---------- Accordion ---------- */
  document.addEventListener("click", function (e) {
    var trigger = e.target.closest(".eh-accordion-trigger");
    if (!trigger) return;
    var item = trigger.closest(".eh-accordion-item");
    var group = item.closest("[data-eh-accordion]");
    var multiOpen = group && group.getAttribute("data-eh-accordion") === "multi";

    if (!multiOpen && group) {
      group.querySelectorAll(".eh-accordion-item.is-open").forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove("is-open");
      });
    }
    item.classList.toggle("is-open");
  });

  /* ---------- Modal ---------- */
  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-eh-modal-open]");
    if (opener) {
      var modal = document.getElementById(opener.getAttribute("data-eh-modal-open"));
      if (modal) modal.style.display = "flex";
    }
    var closer = e.target.closest("[data-eh-modal-close]");
    if (closer) {
      var backdrop = closer.closest(".eh-modal-backdrop");
      if (backdrop) backdrop.style.display = "none";
    }
    // click on backdrop itself (not the modal box) closes it
    if (e.target.classList.contains("eh-modal-backdrop")) {
      e.target.style.display = "none";
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".eh-modal-backdrop").forEach(function (b) {
        if (b.style.display === "flex") b.style.display = "none";
      });
    }
  });

  /* ---------- Toast ----------
     Usage: EriHub.toast({ title: "Saved", body: "Your profile was updated.", variant: "success" })
  */
  function ensureToastContainer() {
    var c = document.querySelector(".eh-toast-container");
    if (!c) {
      c = document.createElement("div");
      c.className = "eh-toast-container";
      document.body.appendChild(c);
    }
    return c;
  }

  function showToast(opts) {
    opts = opts || {};
    var container = ensureToastContainer();
    var toast = document.createElement("div");
    toast.className = "eh-toast";
    var borderColor = {
      success: "var(--eh-green)",
      danger: "var(--eh-danger)",
      warning: "var(--eh-gold)",
      info: "var(--eh-blue)"
    }[opts.variant] || "var(--eh-green)";
    toast.style.borderLeftColor = borderColor;
    toast.innerHTML =
      '<div style="flex:1;">' +
        (opts.title ? '<div class="eh-toast-title">' + opts.title + "</div>" : "") +
        (opts.body ? "<div>" + opts.body + "</div>" : "") +
      "</div>" +
      '<button class="eh-close" aria-label="Dismiss">&times;</button>';
    toast.querySelector(".eh-close").addEventListener("click", function () {
      toast.remove();
    });
    container.appendChild(toast);
    setTimeout(function () { toast.remove(); }, opts.duration || 4500);
  }

  /* ---------- Carousel ---------- */
  document.querySelectorAll("[data-eh-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector(".eh-carousel-track");
    var slides = carousel.querySelectorAll(".eh-carousel-slide");
    var dots = carousel.querySelectorAll(".eh-carousel-dot");
    var index = 0;

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (index * 100) + "%)";
      dots.forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); });
    });
    carousel.querySelectorAll("[data-eh-carousel-next]").forEach(function (btn) {
      btn.addEventListener("click", function () { goTo(index + 1); });
    });
    carousel.querySelectorAll("[data-eh-carousel-prev]").forEach(function (btn) {
      btn.addEventListener("click", function () { goTo(index - 1); });
    });
  });

  window.EriHub = { toast: showToast };
})();
