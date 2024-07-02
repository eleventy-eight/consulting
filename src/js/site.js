// Import Bootstrap JS
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Add haptic feedback on links
const links = document.querySelectorAll("a[href]");

links.forEach((link) => {
    link.addEventListener("touchstart", () => {
        if (navigator.vibrate) {
            // Short vibration (optional, adjust milliseconds as needed)
            navigator.vibrate(20);
        }
    });
});

// Smooth scrolling on all anchor links
document.addEventListener("DOMContentLoaded", function () {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});
