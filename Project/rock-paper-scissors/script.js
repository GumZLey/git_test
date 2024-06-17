let map = new Map([
    ["scissor", 2],
    ["paper", 1],
    ["rock", 0],
    ["exit", 99]
]);

let reverseMap = new Map([
    [2, "scissor"],
    [1, "paper"],
    [0, "rock"]
]);

let play = true;
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor((Math.random() * 10) % 3);
    return rand;
}

function getHumanChoice() {
    let humanInput = prompt("Rock Paper Scissor!!!").toLowerCase();
    let humanMap = map.get(humanInput) ?? getHumanChoice();
    return humanMap;
}

function playRound() {
    if (result > 2 || computerScore >= 5 || humanScore >= 5) {play = false; return;}
    if (result === 1 || result === -2) {
        console.log(`Human Won: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`);
        humanScore++;
    } else if (result == 0){
        console.log(`Human Draw: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`)
    } else {
        computerScore++;
        console.log(`Human Lost: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`)
    }
}

function showScore() {
    console.log(`Player Score Is: ${humanScore} \nComputer Score is: ${computerScore}`);
    let finalLog = humanScore > computerScore ? "Player Won the game" : "Computer Won the game";
    console.log(finalLog);
}

while (play) {
    var botResult = getComputerChoice();
    var humanResult = getHumanChoice();
    var result = humanResult - botResult;
    playRound(result);
}

showScore();

