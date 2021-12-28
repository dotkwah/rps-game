function computerPlay() {
    let selectorValue = Math.floor(Math.random() * 3);
    return selectorValue;
}

let roundCounter = 0;
let scorePlayer = 0;
let scoreComputer = 0;

function resetGame() {
    roundCounter = 0;
    scorePlayer = 0;
    scoreComputer = 0;
}

function gameLose(){
    roundCounter++;
    scoreComputer++;
    console.log(`You lose!\n Round Counter : ${roundCounter}\n Score: \n Player: ${scorePlayer} | Computer: ${scoreComputer}`);
}

function gameWin(){
    roundCounter++;
    scorePlayer++;
    console.log(`You win!\n Round Counter : ${roundCounter}\n Score: \n Player: ${scorePlayer} | Computer: ${scoreComputer}`);
}

function gameTie(){
    roundCounter++;
    console.log(`Tie!\n Round Counter : ${roundCounter}\n Score: \n Player: ${scorePlayer} | Computer: ${scoreComputer}`);
}


function playRound(a) {
    const playerSelection = a;
    const computerSelection = computerPlay();
    console.log(`Player Selection : ${playerSelection}`);
    console.log(`Computer Selection : ${computerSelection}`);
    if (playerSelection == 0){
        if (computerSelection == 0){
            gameTie();
        }
        else if (computerSelection == 1){
            gameLose();
        }
        else if (computerSelection == 2){
            gameWin();
        }
    }
    else if (playerSelection == 1){
        if (computerSelection == 0){
            gameWin();
        }
        else if (computerSelection == 1){
            gameTie();
        }
        else if (computerSelection == 2){
            gameLose();
        }
    }    
    else {
        if (computerSelection == 0){
            gameLose();
        }
        else if (computerSelection == 1){
            gameWin();
        }
        else if (computerSelection == 2){
            gameTie();
        }
    }
}
