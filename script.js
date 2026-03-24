// Hero Animation
window.addEventListener("DOMContentLoaded", () => {
    const heroElements = document.querySelectorAll(".hero h1, .hero h2, .hero p, .hero .btn-primary");

    heroElements.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";

        setTimeout(() => {
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, i * 150);
    });
});

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Accordion Funktion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            document.querySelectorAll(".accordion-content").forEach(c => {
                c.style.maxHeight = null;
            });
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
// dein bisheriger Code ...

// =========================
// 🔹 CALENDLY BLOCK (GANZ UNTEN EINFÜGEN)
// =========================

const calendlyLinks = {
  energieCheck: "https://calendly.com/shawndek84/30min",
  intensivSession: "https://calendly.com/shawndek84/new-meeting",
  chakraReinigung: "https://calendly.com/shawndek84/chakra-reinigung-und-ausrichtung"
};

function openCalendly() {
  const selected = document.querySelector('input[name="service"]:checked');

  if (!selected) {
    alert("Bitte wähle zuerst ein Angebot aus.");
    return;
  }

  const selectedService = selected.value;
  const url = calendlyLinks[selectedService];

  if (!url) {
    alert("Fehler: Kein Buchungslink gefunden.");
    return;
  }

  Calendly.initPopupWidget({
    url: url + "?hide_event_type_details=1"
  });
}
