// Create a quiz class
class Quiz{
    constructor(questions){
    this.score = 0;
    this.questions= questions;
    this.questionIndex = 0;
}
getQuestionIndex(){
    return this.questions[this.questionIndex];
}
guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
isEnded(){
    return this.questionIndex === this.questions.length;
}
}
//These are the question class

class Question {
    constructor(text, choices, answer){
        this.text =text;
        this.choices = choices;
        this.answer = answer;
    }
isCorrectAnswer(choice) {
    return this.answer === choice;
}
}
//Show Questions

function displayQuestion(){
    if (quiz.isEnded()){
        showScores();

    } else {
        //show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;
        //show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choiceElement =document.getElementById("choice"+
            i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    };

}

//guess function
function guess(id,guess) {
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}

//Show quiz progress
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;

}

//Show score
function showScores(){
    let quizEndHTML =
    `
    <h1> Quiz Completed</h1>
    <h2 id = "score"> You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class -"quiz-repeat">
    <a href="index.html"> Take Quiz Again </a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

//Create Quiz Questions

let questions = [
    new Question(
        "What tag is used to underline a word or line of text?", ["li","s","u","ul"], "u"
    ),
    new Question(
        "In JavaScript, what is a block of code called that is used to perform a specific task?", ["String","Variable","Decleration","Function"], "Function"
    ),
    new Question("In JavaScript, what element is used to store and manipulate text usually in multiples?" [" Arrays", "Function", "Variables","String"], "String"

    ),
    new Question("What is the most important CSS property, used for controlling the layout?" ["Display","Table","Margin", "Padding"],"Display"
    )
];

let quiz = new Quiz(questions);

//Display question
displayQuestion();

//Add a countdown

let time =1;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting =document.getElementById("count-down");

function startCountdown(){

    let quizTimer = setInterval (function() {
if (quizTime <= 0){
    clearInterval(quizTimer);
    showScores();
    
}
     else {
        quizTime--;
        let sec = Math.floor(quizTime % 60);
        let min = Math.floor(quizTime / 60) % 60;
        counting.innerHTML = `TIME: ${min} : ${sec}`;

}
    }, 1000)
}
startCountdown();