var startGameBtn = document.querySelector('.start-game')
var questions = [
    {
        question: 'The conditon in an if/else statment is enclosed with',
        answers: [
            'Quotes',
            'Curly Brackets',
            'Paraenthesis',
            'Square Brackets'
        ],
        correctAnswer: 'Paraenthesis'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            'Javascript',
            'Terminal/Bash',
            'For loops',
            'Console.log'
        ],
        correctAnswer: 'Console.log'
    },
    {
        question: 'Commonly used data types DO Not Inlcude:',
        answers: [
            'Strings',
            'Booleans',
            'Alerts',
            'Numbers'
        ],
        correctAnswer: 'Alerts'
    },
    {
        question: 'Arrays in Javscript can be used to store______.',
        answers: [
            'Numbers and Strings',
            'Other Arrays',
            'Booleans',
            'All of the above'
        ],
        correctAnswer: 'All of the above'
    },
    {
        question: 'String values must be enclosed within_____ when being assigned to varibles.',
        answers: [
            'Commas',
            'Curly Brackets',
            'Quotes',
            'Paraenthesis'
        ],
        correctAnswer: 'Quotes'
    }
]
var questionIndex = 0;
var ul = document.querySelector('.choices')
var newli = document.createElement('li')


function inputValue() {
    var input = document.querySelector('input[type="text"]').value;
    document.querySelector("#value").textContent = input
    document.getElementById('value').innerHTML = playerScore +  input;
}





var count = 60;
function myTimer() {
    var timer = document.querySelector('.timer')
    timer.textContent = count;
    count--;
    if (count === -2) {
        timer.textContent = "";
        clearInterval(countDown)
        alert('Time is Up')
        quizOver();
    } else {
        if (count == 0) {
            document.querySelector('#start-quiz').style.display = "none"
        }

    }
}
var countDown = setInterval(myTimer, 1000);

var startQuiz = function () {
    startGameBtn.addEventListener("click", function () {
        document.querySelector('#start-quiz').style.display = "none"
        document.querySelector('.new-question').style.display = "block"
        newQuestion1();
    })
}
startQuiz();

var newQuestion1 = function () {
    var ques1 = document.querySelector('.question');
    ques1.textContent = questions[questionIndex].question;

    var choices = document.querySelector('#choices')
    choices.innerHTML = ""

    questions[questionIndex].answers.forEach(function (answer) {
        var btn = document.createElement('button');
        btn.textContent = answer;
        btn.setAttribute("value", answer)
        btn.setAttribute("class", "codecode")
        btn.addEventListener("click", qClick)
        choices.append(btn)
    })

}
var playerScore = 0;
var qClick = function () {

    if (this.value === questions[questionIndex].correctAnswer) {
        playerScore += count
        console.log(playerScore)
        console.log("Correct")
    } else {
        if (count < 10) {
            clearInterval(myTimer)
            count = 0
        } else {
            count -= 10
        }
        return

    }
    questionIndex++

    if (questionIndex === questions.length) {
        quizOver();
    } else {
        newQuestion1();
    }

}

var quizOver = function () {
    var endGame = document.querySelector('.end-quiz')
    endGame.id = "block"
    endGame.className = "quiz-section"
    document.querySelector('.new-question').style.display = 'none'

    if (count === 0) {
        clearInterval(countDown)
    }

}

// 'The conditon in an if/else statment is enclosed with', 'A very useful tool used during development and debugging for printing content to the debugger is:', 'String values must be enclosed within___ when being assigned to variables'

// time reaming as scor