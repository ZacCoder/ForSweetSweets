

/* ==========================================
   FOR SWEETSWEET 💙
   Interactive Romantic Website
========================================== */


/* ==========================================
   1. NO BUTTON - THE RUNAWAY BUTTON 😂
========================================== */

const noButton = document.getElementById("noButton");
const buttonArea = document.getElementById("buttonArea");
const funnyText = document.getElementById("funnyText");

const funnyMessages = [
    "Ayaw daw? Try again. 😂",
    "The button is running away! 🏃",
    "Etch, are you sure? 🥺",
    "Nice try, Lovelove! 🤭",
    "The No button needs a vacation.",
    "Oops! You almost got me. 😂",
    "That button is too shy!",
    "Hehe, catch me if you can! 💨",
    "Maybe try the blue button? 👀",
    "The developer says: nice try! 💙"
];

let messageIndex = 0;

function moveNoButton() {

    const area = buttonArea.getBoundingClientRect();
    const button = noButton.getBoundingClientRect();

    const maxX = area.width - button.width;
    const maxY = area.height - button.height;

    const randomX = Math.random() * Math.max(0, maxX);
    const randomY = Math.random() * Math.max(0, maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noButton.style.transform = "none";

    funnyText.textContent =
        funnyMessages[messageIndex % funnyMessages.length];

    messageIndex++;
}


/* Desktop interaction */

noButton.addEventListener("mouseenter", moveNoButton);


/* Mobile interaction */

noButton.addEventListener("touchstart", function(event) {

    event.preventDefault();
    moveNoButton();

}, { passive: false });


/* Click interaction */

noButton.addEventListener("click", moveNoButton);


/* ==========================================
   2. YES BUTTON - START THE ADVENTURE 💙
========================================== */

function sayYes() {

    const questionScreen =
        document.getElementById("questionScreen");

    const yesScreen =
        document.getElementById("yesScreen");

    questionScreen.classList.add("hidden");

    yesScreen.classList.remove("hidden");

    createHearts();

}


/* ==========================================
   3. HANGOUT CHOICES
========================================== */

const hangoutDetails = {

    walk: {

        emoji: "🚶‍♀️💙",

        title: "A Little Walk Together",

        description:
            "Just the two of us, walking together and enjoying the place.",

        message:
            "No fancy plans needed, etch. I just want to walk beside you, listen to your stories, laugh with you, and enjoy having you near me. 🥺"

    },


    snack: {

        emoji: "🍰🧋",

        title: "Our Little Snack Date",

        description:
            "Something yummy, a little conversation, and your cute smile.",

        message:
            "We can have a simple snack together. Maybe share something delicious, talk about random things, and enjoy our little time together. Even a simple snack date would make me happy. 💙"

    },


    peaceful: {

        emoji: "🌿☁️",

        title: "A Peaceful Little Escape",

        description:
            "A quiet place where we can relax and talk about anything.",

        message:
            "I'd love to sit beside you somewhere peaceful, hear about your day, share stories, and laugh together. Just a little moment away from our busy days. 🥹"

    },


    together: {

        emoji: "💙🫶",

        title: "Anywhere With You",

        description:
            "You choose the place. I'll be happy just spending time with you.",

        message:
            "Honestly, etch, the place isn't the most important thing to me. It could be somewhere simple or somewhere new. What makes it special is getting to spend that time with you. ❤️"

    }

};


/* ==========================================
   4. DISPLAY HER SELECTED HANGOUT
========================================== */

function goToHangout(choice) {

    const details = hangoutDetails[choice];

    if (!details) {
        return;
    }

    /* Hide the choices */

    document.getElementById("hangoutChoices")
        .classList.add("hidden");


    /* Show the activity screen */

    document.getElementById("activityScreen")
        .classList.remove("hidden");


    /* Update the selected activity */

    document.getElementById("activityEmoji")
        .textContent = details.emoji;

    document.getElementById("activityTitle")
        .textContent = details.title;

    document.getElementById("activityDescription")
        .textContent = details.description;

    document.getElementById("activityMessage")
        .textContent = details.message;


    /* Scroll to the top of the card */

    document.querySelector(".card").scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}


/* ==========================================
   5. GO BACK AND CHANGE HER CHOICE
========================================== */

function backToOptions() {

    document.getElementById("activityScreen")
        .classList.add("hidden");

    document.getElementById("hangoutChoices")
        .classList.remove("hidden");

    document.querySelector(".card").scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}


/* ==========================================
   6. CONTINUE TO THE FINAL SURPRISE 💌
========================================== */

function continueToSurprise() {

    document.getElementById("activityScreen")
        .classList.add("hidden");

    document.getElementById("finalScreen")
        .classList.remove("hidden");


    /* Celebrate her achievement */

    createHearts();

    createHearts();

    document.querySelector(".card").scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}


/* ==========================================
   7. FLOATING HEARTS ANIMATION 💙
========================================== */

function createHearts() {

    const heartEmojis = [

        "💙",
        "💕",
        "💗",
        "✨",
        "🩵",
        "💐",
        "🌸"

    ];

    for (let i = 0; i < 20; i++) {

        setTimeout(function() {

            const heart = document.createElement("div");

            heart.className = "heart";


            /* Random heart emoji */

            heart.textContent =
                heartEmojis[
                    Math.floor(Math.random() * heartEmojis.length)
                ];


            /* Random horizontal position */

            heart.style.left =
                Math.random() * 100 + "vw";


            /* Random animation speed */

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";


            /* Add heart to page */

            document.body.appendChild(heart);


            /* Remove after animation */

            setTimeout(function() {

                heart.remove();

            }, 6000);

        }, i * 150);

    }

}


/* ==========================================
   8. DEVELOPER CONSOLE MESSAGE
========================================== */

console.log(
    "💙 SweetSweet's surprise website is ready!"
);

console.log(
    "A little website, made with love and JavaScript."
);
