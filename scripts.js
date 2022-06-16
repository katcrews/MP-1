const question = document.getElementById('question');
const choices = Array.from(document.getElementById('choice-text'));
const startBtn = document.getElementById('start_btn');
const nextBtn = document.getElementById('next_btn');
const questionCont = document.getElementById('question-cont');
const maxQuestions = 6;

let score = 0;
//let scoreCount = 0;
let currentQuestion = {};
let acceptingAnswers = false;
//let correctAnswer = true;
let availableQuestions = [];
let questionCounter = 0;


startBtn.addEventListener('click', playGame);
nextBtn.addEventListener('click', nextButton);

//starts game, button disappears after click
function playGame() {
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    questionCont.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    nextButton()
};

//appears after start button is clicked, loops through array of questions in random order

function nextButton() {
    if (availableQuestions.length === 0 || questionCounter < availableQuestions.length >= maxQuestions) {
        return score();
    };
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    showQuestion = availableQuestions[questionIndex];
    question.innerText = showQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    // availableQuestions.splice(questionIndex, 1);
    // acceptingAnswers = true;
};

// choices.forEach(choice => {
//     choice.addEventListener('click', (e) => {
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset['number'];
//         nextButton();
//     });
// });


//answers  


//user chooses answer, green=true red=false


//function to announce results



//6 questions, store in array

let questions = [
    {
        question: 'The pineapple is an indigenous fruit to the Hawaiian islands, originally called malanapua.',
        choice1: "'Ae (Yes)",
        choice2: "A'ole (No)",
        answer: 2
    },
    {
        question: 'Traditional hula dances:',
        choice1: "tells stories using hands and body movements",
        choice2: "uses hip movements to do story telling",
        choice3: "involves slapping the chest and thighs, usually accompanied by a haka",
        choice4: "was invented in 1802",
        answer: 1
    },
    {
        question: "The 'ukulele was invented by the:",
        choice1: "Hawaiians",
        choice2: "Filipinos",
        choice3: "Portuguese",
        choice4: "Brittish",
        answer: 3
    },
    {
        question: 'How many islands are located in Hawaii?',
        choice1: "132",
        choice2: "8",
        choice3: "4",
        choice4: "6",
        answer: 1
    },
    {
        question: 'Mahalo means:',
        choice1: "hello",
        choice2: "goodbye",
        choice3: "trash",
        choice4: "thank you",
        answer: 4
    },
    {
        question: 'Pele, the goddess of fire and volcanoes has been known to manifest around the islands as:',
        choice1: "a white dog",
        choice2: "an old woman",
        choice3: "a wild boar",
        choice4: "a red bird",
        answer: 2
    }
]