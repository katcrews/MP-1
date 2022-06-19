const startBtn = document.getElementById('start_btn');
const nextBtn = document.getElementById('next_btn');
const questionCont = document.getElementById('question-cont');
const answer = document.getElementById('choose');
const btn = document.getElementsByClassName('btn');
const resultsCont = document.getElementById('final_result');

startBtn.addEventListener('click', playGame);

const Questions = [{
    id: 0,
    q: 'What fruit is indigenous to Hawaii?',
    a: [
        { text: "hala kahiki or the pineapple" },
        { text: "hala or the screwpine", isCorrect: 1},
        { text: "lilikoi or the passionfruit" },
        { text: "manako or the mango" }
    ]
},
{
    id: 1,
    q: 'Traditional hula dances:',
    a: [
        { text: "tells stories using hands and body movements", isCorrect: 1},
        { text: "uses hip movements to do story telling",  },
        { text: "involves slapping the chest and thighs, usually accompanied by a haka",  },
        { text: "was invented in 1802",  }
    ]

},
{
    id: 2,
    q: "The 'ukulele was invented by the:",
    a: [
        { text: "Hawaiians"},
        { text: "Filipinos" },
        { text: "Portuguese", isCorrect: 1},
        { text: "British" }
    ]

},
{
    id: 3,
    q: 'How many islands are located in Hawaii?',
    a: [
        { text: "132", isCorrect: 1},
        { text: "8" },
        { text: "4"},
        { text: "6" }
    ]

},
{
    id: 4,
    q: 'Mahalo means:',
    a: [
        { text: "hello"},
        { text: "goodbye"},
        { text: "trash"},
        { text: "thank you", isCorrect: 1}
    ]

},
{
    id: 5,
    q: 'Pele, the goddess of fire and volcanoes has been known to manifest around the islands as:',
    a: [
        { text: "a white dog"},
        { text: "an old woman", isCorrect: 1},
        { text: "a wild boar"},
        { text: "a red bird"}
    ]
},
]
var score = 0;

function playGame() {
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    questionCont.classList.remove('hide');

    // shuffle = Questions.sort(() => Math.random() * Questions.length);
    // score = 0;
    iterate();
};

function iterate() {

    const question = document.getElementById("question");

    question.innerText = Questions[id].q;
    nextBtn.classList.add('hide');

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
        nextBtn.classList.remove('hide');
    })

    op2.addEventListener("click", () => {
        selected = op2.value;
        nextBtn.classList.remove('hide');
    })

    op3.addEventListener("click", () => {
        selected = op3.value;
        nextBtn.classList.remove('hide');
    })

    op4.addEventListener("click", () => {
        selected = op4.value;
        nextBtn.classList.remove('hide');
    })

    answer.addEventListener('click', () => {
        if (selected == 1) {
            // score;
            answer.style.backgroundColor = "green";
            console.log('correct');
        } else {
            answer.style.backgroundColor = "red";
            // console.log('wrong');
        }
    })
}


var id = 0;
nextBtn.addEventListener("click", () => {
    answer.style.backgroundColor = "inherit";
    // questionCounter ++;
    if (id < 5) {
        id++;
        iterate();
    } else {
        return result();
    }
})

function result() {
    startBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    questionCont.classList.add('hide');
    resultsCont.classList.remove('hide');
    const resultMessage = document.getElementById('result')
    if (score > 3) {
        let resultText = '<span>Akamai! You got <p>' + score + '</p> out of <p>' + Questions.length + '</p></span>';
        resultMessage.innerHTML = resultText;
    } else if (score < 3) {
        let resultText = '<span>Sorry, try again. You got<p>' + score + '</p> out of <p>' + Questions.length + '</p></span>';
        resultMessage.innerHTML = resultText;
    } else {
        let resultText = '<span>debuggie' + score + '</p> out of <p>' + Questions.length + '</p></span>';
        resultMessage.innerHTML = resultText;
    }
}



