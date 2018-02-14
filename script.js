console.log('Hello World')

const aButton = document.querySelector('#a')
const bButton = document.querySelector('#b')
const cButton = document.querySelector('#c')

const dButton = document.querySelector('#d')
const eButton = document.querySelector('#e')
const fButton = document.querySelector('#f')

const gButton = document.querySelector('#g')
const hButton = document.querySelector('#h')
const iButton = document.querySelector('#i')

const jButton = document.querySelector('#j')
const kButton = document.querySelector('#k')
const lButton = document.querySelector('#l')

const mButton = document.querySelector('#m')
const nButton = document.querySelector('#n')
const oButton = document.querySelector('#o')

const pButton = document.querySelector('#p')
const qButton = document.querySelector('#q')
const rButton = document.querySelector('#r')

const sButton = document.querySelector('#s')
const tButton = document.querySelector('#t')
const uButton = document.querySelector('#u')

//const correctAnswers = ['cButton', 'eButton','gButton', 'kButton','oButton','pButton', 'uButton']
//cont wrongAnswers = ['aButton', 'bButton', 'fButton', 'dButton', 'dButton', 'hButton', 'iButton',
//'jButton', 'lButton', 'mButton', 'nButton', 'qButton', 'rButton', 'sButton', 'tButton']

aButton.addEventListener('click', question1)
bButton.addEventListener('click', question1)
cButton.addEventListener('click', question1)


 function question1() {
    if (this.innerHTML === '500,000') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }
 
dButton.addEventListener('click', question2)
eButton.addEventListener('click', question2)
fButton.addEventListener('click', question2)

 function question2() {
    if (this.innerHTML === '30,000') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }

gButton.addEventListener('click', question3)
hButton.addEventListener('click', question3)
iButton.addEventListener('click', question3)

 function question3() {
    if (this.innerHTML === '5') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }

jButton.addEventListener('click', question4)
kButton.addEventListener('click', question4)
lButton.addEventListener('click', question4)

function question4() {
    if (this.innerHTML === '3') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }

mButton.addEventListener('click', question5)
nButton.addEventListener('click', question5)
oButton.addEventListener('click', question5)

function question5() {
    if (this.innerHTML === 'Both') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }

pButton.addEventListener('click', question6)
qButton.addEventListener('click', question6)
rButton.addEventListener('click', question6)

function question6() {
    if (this.innerHTML === '850 - 3,500 kg') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }

sButton.addEventListener('click', question7)
tButton.addEventListener('click', question7)
uButton.addEventListener('click', question7)

function question7() {
    if (this.innerHTML === 'Both') {
        this.style.backgroundColor = 'green'
    } else {
        this.style.backgroundColor = 'red'
    }
 }
