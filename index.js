function computerPlay(){
let rand = ['Rock', 'Paper', 'Scissor']
let random = rand[Math.floor(Math.random() * rand.length)];
return random;
}


let playRound = function(playerSelection, computerSelection){
playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();
if(playerSelection == 'rock' && computerSelection == 'scissor'){return true;}
else if(playerSelection == 'rock' && computerSelection == 'paper'){return false;}
else if(playerSelection == 'scissor' && computerSelection == 'paper'){return true;}
else if(playerSelection == 'scissor' && computerSelection == 'rock'){return false;}
else if(playerSelection == 'paper' && computerSelection == 'rock'){return true;}
else{return false;}
};

function game(){
    let you = 0;
    let computer = 0;
    let rounds = 5;
    for(let i = 0; i < rounds; i++)
    {
        let player = prompt('Enter Rock, Paper, Scissor:');
        let comp = computerPlay();
        if (player.toLowerCase() == comp.toLowerCase()){
            console.log('Draw ! '+ player + " equals "+ comp);
        }
        else if(playRound(player, comp)){
            ++you;
            console.log('You win ! '+ player + " beats " + comp);
        }
        else{
            ++computer;
            console.log('You lose ! ' + comp + ' beats ' + player);
        }
    }
    if(you == computer){console.log('Draw');}
    else if(you > computer){console.log('You are the winner...');}
    else {console.log('Computer wins ...');}

}
game();