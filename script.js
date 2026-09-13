// ==============================
// EDUNOVA JAVASCRIPT
// ==============================

let currentSubject = "";


// ==============================
// SUBJECT SELECTION
// ==============================

function selectSubject(subject) {

    currentSubject = subject;

    const selectedSubject =
        document.getElementById("selectedSubject");

    if (selectedSubject) {
        selectedSubject.textContent = subject;
    }


    // Remove active class from all subject cards
    const cards =
        document.querySelectorAll(".subject-card");

    cards.forEach(function(card) {
        card.classList.remove("active");
    });


    // Find clicked card and activate it
    cards.forEach(function(card) {

        const text =
            card.querySelector("span");

        if (text && text.textContent === subject) {
            card.classList.add("active");
        }

    });


    // Scroll to AI Assistant
    const ai =
        document.getElementById("ai-assistant");

    if (ai) {

        ai.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ==============================
// AI ASSISTANT
// ==============================

function askAI() {

    const question =
        document.getElementById("question").value.trim();

    const response =
        document.getElementById("aiResponse");


    if (!question) {

        response.textContent =
            "Please enter a question first.";

        return;
    }


    if (!currentSubject) {

        response.textContent =
            "Please select a subject first.";

        return;
    }


    response.innerHTML =
        "<strong>Edunova AI Assistant</strong><br><br>" +
        "You selected <strong>" +
        currentSubject +
        "</strong>.<br><br>" +
        "Your question is:<br>" +
        question +
        "<br><br>" +
        "AI connection is ready for integration. " +
        "The next step is connecting Edunova to an AI backend " +
        "so it can generate real answers.";

}


// ==============================
// SHARE BOOK
// ==============================

function shareBook() {

    alert(
        "Book Sharing feature selected! " +
        "A book-sharing form can be connected here."
    );

}


// ==============================
// BORROW BOOK
// ==============================

function borrowBook() {

    alert(
        "Book Library selected! " +
        "Available books can be displayed here."
    );

}


// ==============================
// NAVIGATION
// ==============================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    const id =
                        this.getAttribute("href");

                    const target =
                        document.querySelector(id);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

    }
);
