let randomNumber = Math.floor(Math.random() * 100) + 1
let totalGuess = 10

const form = document.querySelector('.form')
const guessField = document.getElementById('guessfield')
const showResult = document.getElementById('showResult')
const lowOrHi = document.querySelector('.lowOrHi')
const guessesLeft = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const submitBtn = form.querySelector('input[type="submit"]')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const guess = Number(guessField.value)

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showResult.innerHTML = 'Please enter a valid number (1–100)'
        return
    }

    guessList(guess)
    checkGuess(guess)

    if (guess !== randomNumber) {
        remainingGuess()
    }

    guessField.value = ''
})

function checkGuess(guess) {
    if (guess === randomNumber) {
        showResult.innerHTML = `Correct! ${guess} is the number`
        lowOrHi.innerHTML = ''
        submitBtn.disabled = true
    } else if (guess > randomNumber) {
        lowOrHi.innerHTML = 'Your guess is too HIGH'
    } else {
        lowOrHi.innerHTML = 'Your guess is too LOW'
    }
}

function remainingGuess() {
    totalGuess--
    guessesLeft.innerHTML = totalGuess

    if (totalGuess === 0) {
        showResult.innerHTML = `Game Over! Number was ${randomNumber}`
        submitBtn.disabled = true
    }
}

function guessList(guess) {
    lastResult.innerHTML += `${guess} `
}
