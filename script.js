// Platzhalter für Buchungssystem

document.getElementById("openBooking").addEventListener("click", () => {
    alert("Hier wird später das Buchungssystem eingebunden (cal.com).");
});
// Hero Fade-In beim Laden
window.addEventListener("DOMContentLoaded", () => {
    const heroElements = document.querySelectorAll(".hero h1, .hero h2, .hero p, .hero .btn-primary");
    heroElements.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, i * 150); // nacheinander erscheinen
    });
});

// Sticky Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if(window.scrollY > 50){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
