const startBtn=document.getElementById('start_btn');
const questionCont=document.getElementById('question-cont');
const nextBtn=document.getElementById('next_btn');
const questions=document.getElementById('questions');
const choice=document.getElementById('chose-btn');
const finalResult=document.getElementById('final_result');
//const replay=document.getElementById('replay');
let score = 0;
let scoreCount = 0;

startBtn.addEventListener('click', playGame);
nextBtn.addEventListener('click', nextButton);
//choices.addEventListener('click',chooseButton);

//starts game, button disappears after click
function playGame(){
    console.log('start');
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    questionCont.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    choices = [...question];
    console.log(question);
   // nextButton()
};

//appears after start button is clicked, loops through array of questions in random order
function nextButton(){
    const questionIndex = Math.floor(Math.random()*question.length);
    currentQuestion = question[questionIndex];
    questions.innerText = currentQuestion.question;
    //answers
    // question.answers.forEach(answer => {
    //     const button = document.createElement('button');
    //     button.innerText = answer.text;
    //     button.classList.add('btn');
    //     if (answer.correct){
    //         button.dataset.correct = answer.correct;
    //     }
    //     button.addEventListener('click',chooseButton)
    //     answerButtonsElement.appendChild(button);
   // })
//    question.forEach(answer =>{
//     const button = question.dataset['text'];
//     answer.innerText = currentQuestion['answer'];
//    })
    
};


//user chooses answer, green=true red=false
function chooseButton(){
    
};

//function to announce results



//6 questions, store in array
let currentQuestion = {};
let correctAnswer = true;

let choices = [];
let question = [
    {
        question: 'The pineapple is an indigenous fruit to the Hawaiian islands, originally called malanapua.',
        answers: [
            {text:"'Ae (Yes)", correct: false},
            {text:"A'ole (No)", correct: true}
        ]            
    },
    // {
    //     question:'Traditional hula dances:',
    //     choice:"tells stories using hands and body movements",
    //     choice:"uses hip movements to do story telling",
    //     choice:"involves slapping the chest and thighs, usually accompanied by a haka",
    //     choice:"was invented in 1802",
    //     answer: 1
    // },
    // {
    //     question: "The 'ukulele was invented by the:",
    //     choice:"Hawaiians",
    //     choice:"Filipinos",
    //     choice:"Portuguese",
    //     choice:"Brittish",
    //     answer: 3
    // },
    // {
    //     question: 'How many islands are located in Hawaii?',
    //     choice:"132",
    //     choice: "8",
    //     choice:"4",
    //     choice:"6",
    //     answer: 1
    // },    
    // {
    //     question: 'Mahalo means:',
    //     choice:"hello",
    //     choice:"goodbye",
    //     choice:"trash",
    //     choice:"thank you",
    //     answer:4
    // },
    // {
    //     question: 'Pele, the goddess of fire and volcanoes has been known to manifest around the islands as:',
    //     choice:"a white dog",
    //     choice:"an old woman",
    //     choice:"a wild boar",
    //     choice:"a red bird",
    //     answer: 2
    // }      
]