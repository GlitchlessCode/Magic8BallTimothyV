// Magic 8 Ball by Timothy V

// -- Intialize Variables --

// HTML Element Variables
let questionInputEl = document.getElementById("questionIn");
let ballImgEl = document.getElementById("ballImg");
let answerEl = document.getElementById("answer");

// Glbl Variables
let question;
let answer;

let randomNum;

// -- Add Event Listeners --
ballImgEl.addEventListener("click", randomAnswer);

// -- Functions --

// Event Functions
function randomAnswer() {
    question = questionInputEl.value.toLowerCase();

    // Check Question
    if (question === "") {
        answer = "Please ask a question...";

    } else if (question === "does a magic 8 ball actually work?") {
        answer = "How dare you doubt me!";

    } else if (question === "is javascript awesome?") {
        answer = "Of Course!"

    } else {
        // Generate Random Number
        randomNum = Math.random();

        // Determine Answer Based On Number
        if (randomNum < 0.2) {
            answer = "Without a Doubt.";

        } else if (randomNum < 0.4) {
            answer = "As I see it, yes.";

        } else if (randomNum < 0.6) {
            answer = "Concentrate and ask again.";

        } else if (randomNum < 0.8) {
            answer = "Don't count on it.";

        } else {
            answer = "Outlook not so good.";

        }

    }

    // Set HTML to Answer
    answerEl.innerHTML = answer;

}