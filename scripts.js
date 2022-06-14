const startBtn=document.getElementById('start');
const questions=document.getElementById('questions');
const choices=document.getElementById('choices');
const result=document.getElementById('result');
const finalResult=document.getElementById('final_result');
const replay=document.getElementById('replay');
const replayBtn=document.getElementById('replay_btn');

startBtn.addEventListener('click', function(){
   

})

//6 questions, store in array
let currentQuestion = 0;
var score = 0;
let question = [
    {
        number: 1,
        question: 'The pineapple is an indigenous fruit to the Hawaiian islands, originally called malanapua.',
        answer: "A'ole (No)",
        choices:
            [
                "'Ae (Yes)",
                "A'ole (No)"
            ]
    },
    {
        number: 2,
        question: 'Traditional hula dances:',
        answer: "tells stories using hands and body movements",
        choices:
            [
            "tells stories using hands and body movements",
	        "uses hip movements to do story telling",
	        "involves slapping the chest and thighs, usually accompanied by a haka",
	        "was invented in 1802"
            ]   
    },
    {
        number: 3,
        question: "The 'ukulele was invented by the:",
        answer: "Portuguese",
        choices:
            [
            "Hawaiians",
	        "Filipinos",
	        "Portuguese",
	        "Brittish"
            ]
    },
    {
       number: 4,
        question: 'How many islands are located in Hawaii?',
        answer: "132",
        choices:
            [
            "132",
	        "8",
	        "4",
	        "6"
            ] 
    },    
    {
        number: 5,
        question: 'Mahalo means:',
        answer: "thank you",
        choices:
                [
                "hello",
                "goodbye",
                "trash",
                "thank you"
                ]
    },
    {
        number: 6,
        question: 'Pele, the goddess of fire and volcanoes has been known to manifest around the islands as:',
        answer: "an old woman",
        choices:
            [
            "a white dog",
            "an old woman",
            "a wild boar",
            "a red bird"
            ]
    }      
]