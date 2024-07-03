// Import libraries
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import axios from "axios";

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

// Animate on scroll initiate
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true,
    });
});

// Form submission
axios
    .post("https://submit-form.com/UmU2KIcQk", {
        message: "Hello, World",
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.error(response);
    });
