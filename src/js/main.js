const playerPointsElem = document.querySelector(".player-score")
const CompPointsElem = document.querySelector(".computer-score")
const playerChoiceElem = document.querySelector(".player-choice")
const compChoiceElem = document.querySelector(".computer-choice")
const optionButtons = document.querySelectorAll(".options button")
const resultElem = document.querySelector(".round-result")

const optionList = ["rock", "paper", "scissors"]
let playerChoice = ""
let compChoice = ""
let playerPoints = 0
let compPoints = 0

function resetGame() {
    playerPointsElem.textContent = playerPoints
    CompPointsElem.textContent = compPoints
    resultElem.textContent = "choose your weapon"
}

window.onload = resetGame()

function selectCompChoice() {
    const randomIndex = Math.floor(Math.random() * optionList.length)
    return optionList[randomIndex]
}

function playRound(event) {
    playerChoice = event.target.dataset.option
    compChoice = selectCompChoice()
    checkResults()
}

function checkResults() {
    playerChoiceElem.textContent = "Your choice: " + playerChoice
    compChoiceElem.textContent = "Computer's choice: " + compChoice
    if (playerChoice === "rock" && compChoice === "scissors" ||
        playerChoice === "scissors" && compChoice === "paper" ||
        playerChoice === "paper" && compChoice === "rock") {
            playerPoints++
            playerPointsElem.textContent = playerPoints
            resultElem.textContent = "you won!"
    } else if (playerChoice === compChoice) {
        resultElem.textContent = "draw!"
    } else {
        compPoints++
        CompPointsElem.textContent = compPoints
        resultElem.textContent = "you lost!"
    }
}

optionButtons.forEach(btn => btn.addEventListener("click", playRound))