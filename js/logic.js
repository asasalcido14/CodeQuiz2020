let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;
// variables to monitor throughout the quiz


// variables for the front end
const beginBtn = document.getElementById("begin");


// Begin Quiz (Function) 
function beginQuiz() {
    const startPartEl = document.getElementById("start-part");
    startPartEl.setAttribute("class","hide")

}