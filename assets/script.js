var startGameBtn = document.querySelector('.start-game')
var questions = ['The conditon in an if/else statment is enclosed with', 'A very useful tool used during development and debugging for printing content to the debugger is:', 'String values must be enclosed within___ when being assigned to variables']
var ul = document.querySelector('.choices')
var newli = document.createElement('li')

startGameBtn.addEventListener("click", function () {
    document.querySelector('.quiz-section').style.display = "none"
    newQuestion1();
})

var newQuestion1 = function () {
    var ques1 = document.querySelector('.question')
    ques1.append(questions[0])
}

