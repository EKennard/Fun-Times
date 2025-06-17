let answerSelected = false;
let currentQuestion = 0;
let score = 0;

const nextQuestionDiv = document.getElementById("next");
const feedbackDiv = document.getElementById("feedback");
const questionDiv = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const questionArea = document.getElementById("question-area");

nextQuestionDiv.classList.add("hidden");

let questions = [
    {
        text: "Do I feel lucky? Well, do ya, punk?",
        answers: [
            ["Dirty Harry", true],
            ["Terminator 2", false],
            ["Lethal Weapon", false],
            ["Aliens", false],
        ],
    },
    {
        text: "We're gonna need a bigger boat.",
        answers: [
            ["Jaws", true],
            ["Titanic", false],
            ["Deep Blue Sea", false],
            ["Finding Nemo", false],
        ],
    },
    {
        text: "What is the air speed velocity of an unladen swallow?",
        answers: [
            ["Monty Python and the Holy Grail", true],
            ["Life of Brian", false],
            ["Meaning of Life", false],
            ["And Now for Something Completely Different", false],
        ],
    },
    {
        text: "I'm gonna make him an offer he can't refuse.",
        answers: [
            ["The Godfather", true],
            ["Goodfellas", false],
            ["Heat", false],
            ["Casino", false],
        ],
    },
    {
        text: "It's Morbin time.",
        answers: [
            ["Morbius", true],
            ["Spider-man", false],
            ["The Avengers", false],
            ["Batman", false],
        ],
    },
];


function shuffle(array) {
  const copy = array.slice();
  let result = [];
  while (copy.length > 0) {
    const randomIndex = Math.floor(Math.random() * copy.length)
    result.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }
  return result;
};

questions = shuffle(questions);
for (let question of questions) {
    question.answers = shuffle(question.answers);
}

for (let button of answerButtons) {
    button.addEventListener("click", function () {
        if (!answerSelected) {
            if (button.dataset.correct === "true") {
                feedbackDiv.innerText = "Correct!";
                score++;
            } else {
                feedbackDiv.innerText = "Wrong!";
            }
            answerSelected = true;
            nextQuestionDiv.classList.remove("hidden");
        }
    });
}

function showQuestion(questionIdx) {
    questionDiv.innerText = questions[questionIdx].text;

    for (let i = 0; i < answerButtons.length; i++) {
        let answerToDisplay = questions[questionIdx].answers[i][0];
        answerButtons[i].innerText = answerToDisplay;
        answerButtons[i].dataset.correct = questions[questionIdx].answers[i][1];
    }
}

showQuestion(currentQuestion);

nextQuestionDiv.addEventListener("click", function () {
    if (currentQuestion === questions.length - 1) {
        endGame();
    }
    else {
        showNextQuestion();
    }
});

function showNextQuestion() {
    currentQuestion++;
    showQuestion(currentQuestion);
    answerSelected = false;
    nextQuestionDiv.classList.add("hidden");
    feedbackDiv.innerText = "";
}

function endGame() {
    questionArea.innerHTML = `
    <h2>Game over!</h2>
    <h3>Your score: ${score} / ${questions.length}</h3>
    `;
}