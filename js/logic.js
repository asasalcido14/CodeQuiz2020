let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;
// variables to monitor throughout the quiz


// variables for the front end
const selectionsEl = document.getElementById("selections");
const questionsEl = document.getElementById("questions");
const timerEl = document.getElementById("time");
const beginBtn = document.getElementById("begin");
const graderEl = document.getElementById("grader");


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

function selectionGrab() {

      // an if statement that checks the accuracy of the users input
  if (this.value !== questions[currentQuestionIndex].answer) {

    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

 } else {
   
    graderEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  graderEl.setAttribute("class", "feedback");
  setTimeout(function() {
    graderEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizFinish();
  } else {
    grabQuestion();
  }
}

function quizFinish() {

    // we need to stop the timer
    clearInterval(timerId)
    //update page when quiz ends

    // show final grade

    // cloak questions section

    //
}

// button to fire quiz(beginQuiz)
beginBtn.onclick = beginQuiz;

