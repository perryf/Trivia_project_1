console.log('Hello World')


//var score = 0
//var points = score + 5

var submit = document.querySelector('#submit')
submit.addEventListener('click', checkAnswers)

function checkAnswers () {
    var correctAnswer = document.querySelector('#correct')
    var i
        for(i = 0; i < correctAnswer.length; i++) {
            correctAnswer[i].style.color = 'green'
        }
       
        // identify element that is the correct answer through DOM manipulation
}

  
//capture user input in an arry?
// check user input to see if it is the same as the correct answer
  // if user click the right answer turn green
  // else turn red


/*

- add change event listener to all forms with 1 event handler
- on change:
    - check target for selected input (google how to do that)
    - if selected input has name of "correct":
        - add .correct class to form (event target)
    - else:
        - add .incorrect class to form (event target)

*/