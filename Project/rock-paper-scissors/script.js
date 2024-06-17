// Todo List
// When clicked, box will be green if win and red if lose
// POP UP win or lose (Can be done by use dialog or just use alert)

const btn = document.querySelectorAll("#btn");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

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
    let humanMap = map.get(humanInput) ?? getHumanChoice();
    return humanMap;
}

function playRound(result, humanResult, botResult) {
    // if (result > 2 || computerScore >= 5 || humanScore >= 5) {play = false; return;}
    if (result === 1 || result === -2) {
        console.log(`Human Won: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`);
        humanScore++;
        playerScoreText.textContent = humanScore;
    } else if (result == 0){
        console.log(`Human Draw: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`)
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore;
        console.log(`Human Lost: ${reverseMap.get(humanResult)} x ${reverseMap.get(botResult)}`)
    }
}

function showScore() {
    console.log(`Player Score Is: ${humanScore} \nComputer Score is: ${computerScore}`);
    let finalLog = humanScore > computerScore ? "Player Won the game" : "Computer Won the game";
    console.log(finalLog);
}

// while (play) {
//     var botResult = getComputerChoice();
//     var humanResult = getHumanChoice();
//     var result = humanResult - botResult;
//     playRound(result);
// }

btn.forEach(button => {
    button.addEventListener("click", (e) => {
        let playerInput = map.get(e.target.innerText.toLowerCase());
        let botInput = getComputerChoice();
        let result = playerInput - botInput
        playRound(result, playerInput, botInput);
    });
});

showScore();

