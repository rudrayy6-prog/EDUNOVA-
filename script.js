// ==============================
// EDUNOVA JAVASCRIPT
// ==============================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-container nav a");

    // Smooth scrolling for navigation
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // Only handle links that start with #
            if (targetId && targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // Explore Features button
    const exploreButton = document.querySelector(".primary");

    if (exploreButton) {

        exploreButton.addEventListener("click", function (event) {

            const features = document.querySelector("#features");

            if (features) {

                event.preventDefault();

                features.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // Learn More button
    const learnButton = document.querySelector(".secondary");

    if (learnButton) {

        learnButton.addEventListener("click", function (event) {

            const about = document.querySelector("#about");

            if (about) {

                event.preventDefault();

                about.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // Console message
    console.log("Edunova website loaded successfully!");

});
