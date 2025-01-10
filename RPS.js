function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3) + 1

    if (comp == 1){
        console.log("ROCK")
    } else if (comp == 2) {
        console.log("SCISSORS") 
    } else {
        console.log("PAPER")
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let hum = (prompt("Do you choose to throw Rock, Paper or Scissors?")).charAt(0).toUpperCase()

    if(hum == "R") {
        console.log("ROCK")
    } else if (hum == "P") {
        console.log("PAPER")
    } else if (hum == "S") {
        console.log("SCISSORS")
    } else {
        console.log("Invalid Choice")
    }
}
console.log(getHumanChoice())