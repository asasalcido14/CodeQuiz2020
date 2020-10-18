let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;
// variables to monitor throughout the quiz


// variables for the front end
const questionsEl = document.getElementById("questions");
const timerEl = document.getElementById("time");
const beginBtn = document.getElementById("begin");


// Begin Quiz (Function) 
function beginQuiz() {

    const startPartEl = document.getElementById("start-part");

    startPartEl.setAttribute("class","hide")

    // take question cloak off
    questionsEl.removeAttribute("class");

    //start the timer
    timerId = setInterval(clockTick, 1000);

    //display time
    timerEl.textContent = time;

    //grabber
    grabQuestion()
}

function grabQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
}