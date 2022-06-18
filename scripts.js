const startBtn = document.getElementById('start_btn');
const nextBtn = document.getElementById('next_btn');
const questionCont = document.getElementById('question-cont');
const answer = document.getElementsByClassName('btn');
startBtn.addEventListener('click', playGame);

let shuffle, QuestionsIndex;
let questionCounter = 0;

const Questions = [{
    id: 0,
    q: 'What fruit is indigenous to Hawaii?',
    a: [
        { text: "hala kahiki or the pineapple", isCorrect: false },
        { text: "hala or the screwpine", isCorrect: true },
        { text: "lilikoi or the passionfruit", isCorrect: false },
        { text: "manako or the mango", isCorrect: false },
    ]
},
{
    id: 1,
    q: 'Traditional hula dances:',
    a: [
        { text: "tells stories using hands and body movements", isCorrect: true },
        { text: "uses hip movements to do story telling", isCorrect: false },
        { text: "involves slapping the chest and thighs, usually accompanied by a haka", isCorrect: false },
        { text: "was invented in 1802", isCorrect: false },
    ]
    
},
{
    id: 2,
    q: "The 'ukulele was invented by the:",
    a: [
        { text: "Hawaiians", isCorrect: false },
        { text: "Filipinos", isCorrect: false },
        { text: "Portuguese", isCorrect: true },
        { text: "British", isCorrect: false },
    ]
    
},
{
    id: 3,
    q: 'How many islands are located in Hawaii?',
    a: [
        { text: "132", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "6", isCorrect: false },
    ]
    
},
{
    id: 4,
    q: 'Mahalo means:',
    a: [
        { text: "hello", isCorrect: false },
        { text: "goodbye", isCorrect: false },
        { text: "trash", isCorrect: false },
        { text: "thank you", isCorrect: true },
    ]
    
},
{
    id: 5,
    q: 'Pele, the goddess of fire and volcanoes has been known to manifest around the islands as:',
    a: [
        { text: "a white dog", isCorrect: false },
        { text: "an old woman", isCorrect: true },
        { text: "a wild boar", isCorrect: false },
        { text: "a red bird", isCorrect: false },
    ]
    
},
]
var start = true;

function playGame() {
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    questionCont.classList.remove('hide');
    shuffle = Questions.sort(()=> Math.random() * Questions.length);
    QuestionsIndex = 0;
    score = 0;
    questionCounter = 0;
};

function iterate(id) {
    
    const question = document.getElementById("question");
    
    question.innerText = Questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    op1.addEventListener("click", () => {
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        selected = op4.value;
    })


    // const evaluate = document.getElementsByClassName("evaluate");

   // Evaluate method
    // evaluate[0].addEventListener("click", () => {
    //     if (selected == "true") {
    //         result[0].innerHTML = "True";
    //         result[0].style.color = "green";
    //     } else {
    //         result[0].innerHTML = "False";
    //         result[0].style.color = "red";
    //     }
    // })
}

if (start) {
    iterate("0");    
}


var id = 0;
  
nextBtn.addEventListener("click", () => {
    start = false;
    questionCounter ++;
    if (id < 5) {
        id++;
        iterate(id);
    }
}) 

answer[0].addEventListener("click", () => {
    if (selected =="true"){
        answer[0].classList.add('correct');
    } else {
        answer[0].classList.add('wrong');
    }
});

