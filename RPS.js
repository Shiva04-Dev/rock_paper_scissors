function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3) + 1

    if (comp == 1){
        return "ROCK"
    } else if (comp == 2) {
        return "SCISSORS" 
    } else {
        return "PAPER"
    }
}

function getHumanChoice() {
    let hum = (prompt("Do you choose to throw Rock, Paper or Scissors?")).toLowerCase()

    if(hum == "rock") {
        return "ROCK"
    } else if (hum == "paper") {
        return "PAPER"
    } else if (hum == "scissors") {
        return "SCISSORS"
    } else {
        return "Invalid Choice"
    }
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {

    if ( humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore++
        return "Paper Beats Rock, YOU LOSE!"
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore++
        return "Scissors Beats Paper, YOU LOSE!"
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        computerScore++
        return "Rock Beats Scissors, YOU LOSE!"
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++
        return "Rock Beats Scissors, YOU WIN!!!"
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore++
        return "Paper Beats Rock, YOU WIN!!!"
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++
        return "Scissors Beats Paper, YOU WIN!!!"
    } else if(humanChoice == computerChoice){
        return "--TIE--"
    } else {
        return "Invalid Input"
    }

}

const computer = getComputerChoice()
const human = getHumanChoice()

console.log("Computer's Choice: " + computer)
console.log("Your Choice: " + human)

console.log(playRound(computer, human))
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)
