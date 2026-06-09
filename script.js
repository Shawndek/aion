// Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        if (!content) return;

        const isOpen = content.style.maxHeight;

        document.querySelectorAll(".accordion-content").forEach(item => {
            item.style.maxHeight = null;
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Calendly: kostenloses Erstgespräch
function openCalendlyIntro() {
    Calendly.initPopupWidget({
        url: "https://calendly.com/sdek/30min"
    });

    return false;
}

// Calendly: reguläre 1:1 Begleitung
function openCalendlySession() {
    Calendly.initPopupWidget({
        url: "https://calendly.com/shawndek84/termin"
    });

    return false;
}