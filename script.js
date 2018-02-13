console.log('Hello World')


//var score = 0
//var points = score + 5

var submit = document.querySelector('#submit')
submit.addEventListener('click', checkAnswers)

function checkAnswers () {
    var correctAnswer = document.querySelector('#correct')
    var i
        for(i = 0; i < correctAnswer.length; i++) {
            correctAnswer[i].style.color = 'red'
        }



       // identify element that is the correct answer through DOM manipulation
}

  // check user input to see if it is the same as the correct answer