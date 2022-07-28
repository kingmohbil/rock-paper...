let player = 0 ;
let computer = 0;
let player1Selection;
// a function to return one of three choices 


function getComputerChoice(){
    const choice = ['paper', 'rock', 'scissor'];
    return choice[Math.floor(Math.random()*choice.length)];
}

function updateResults(){
    // the variables that are needed to update the results 
    const player1 = document.getElementById('player1');
    const computerUpdate = document.getElementById('computer');
    // the update statements for the two players 
    player1.innerText = player.toString();
    computerUpdate.innerText = computer.toString();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        updateResults();
        return `Draw!!! ${playerSelection} equals ${computerSelection}`;  
    }
    switch(playerSelection){
        case 'paper':{
            switch(computerSelection){
                case 'rock': {
                    ++player;
                    updateResults();
                    return `player1 win's !!! ${playerSelection} beats ${computerSelection}`;
                }
                default:{
                    ++computer;
                    updateResults();
                    return `computer win's !!! ${computerSelection} beats ${playerSelection}`;
                }
            }
        }
        case'rock':{
            switch(computerSelection){
                case 'scissor': {
                    ++player;
                    updateResults();
                    return `player1 win's !!! ${playerSelection} beats ${computerSelection}`;
                }
                default:{
                    ++computer;
                    updateResults();
                    return `computer win's !!! ${computerSelection} beats ${playerSelection}`;
                }
            }

        }
        default:{
            switch(computerSelection){
                case 'paper': {
                    ++player;
                    updateResults();
                    return `player1 win's !!! ${playerSelection} beats ${computerSelection}`;
                }
                default:{
                    ++computer;
                    updateResults();
                    return `computer win's !!! ${computerSelection} beats ${playerSelection}`;
                }
            }
        }
    }
}
document.getElementById('paper').addEventListener('click',() => {play('paper')});
document.getElementById('rock').addEventListener('click',()=>{play('rock')});
document.getElementById('scissor').addEventListener('click',() =>{play('scissor')});


function play(choice){
    const player = choice;
    const comp = getComputerChoice();
    if(player==5)
    playRound(player,comp);
  //  checkWinner();
}


