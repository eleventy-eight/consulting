// Import libraries
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import Swiper from "swiper/bundle";

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

// Back to top button
document.addEventListener("DOMContentLoaded", function () {
    // Back to top button
    let backToTopBtn = document.getElementById("backToTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    window.topFunction = function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
});

// Initiate Swiper JS
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: "1",
        centeredSlides: true,
        spaceBetween: 0,
        autoHeight: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
