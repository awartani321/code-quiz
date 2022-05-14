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
    }
}