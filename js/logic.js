let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;
// variables to monitor throughout the quiz


// variables for the front end
const selectionsEl = document.getElementById("selections");
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
    // grabbing the current question
    const currentQuestion = questions[currentQuestionIndex];
    
    // title for current question
    const titleEl = document.getElementById("title");
    titleEl.textContent = currentQuestion.title;

    //selections will be cleared
    selectionsEl.innerHTML = "";

    //loop over selections
    currentQuestion.selections.forEach(function(selections, i) {

    //make a new button for each selection 
    const selectionPack = document.createElement("button");
    selectionPack.setAttribute("class", "selection");
    selectionPack.setAttribute("value", selection);

    selectionPack.textContent = i + 1 + ". " + selection;

    // need to add a click eventlistner for every selection
    selectionPack.onclick = selectionGrab;
    
    selectionsEl.appendChild(selectionPack);
    });
}