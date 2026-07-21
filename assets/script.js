// PrimalMail — shared behavior

// Real, live beehiiv publication. Visitors are handed off here to actually
// subscribe — beehiiv owns list management, sending, and unsubscribe
// compliance. Swap this flow for beehiiv's inline embed snippet (Settings ->
// Subscribe Forms -> Embed in the beehiiv dashboard) if you want signup to
// happen without leaving this site.
const BEEHIIV_SUBSCRIBE_URL = "https://primalmail.beehiiv.com/subscribe";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      links.style.display = links.classList.contains("open") ? "flex" : "";
    });
  }

  // Signup forms (there may be more than one on a page — hero + footer).
  // beehiiv's hosted page doesn't accept a prefill param, so this just hands
  // the visitor off to subscribe there directly.
  document.querySelectorAll("[data-signup-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = BEEHIIV_SUBSCRIBE_URL;
    });
  });
});
