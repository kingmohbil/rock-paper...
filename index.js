function computerPlay(){
let rand = ['Rock', 'Paper', 'Scissor']
let random = rand[Math.floor(Math.random() * rand.length)];
return random;
}

let player = computerPlay();
let comp = computerPlay() ;
let play = function(playerSelection, computerSelection){
if(playerSelection == computerSelection){return "Draw ! "+playerSelection+" equals "+playerSelection;}
else if(playerSelection == 'Rock' && computerSelection == 'Scissor'){return "You win ! "+playerSelection+" Beats "+computerSelection;}
else if(playerSelection == 'Rock' && computerSelection == 'Paper'){return "You lose ! "+computerSelection+" Beats "+playerSelection;}
else if(playerSelection == 'Scissor' && computerSelection == 'Paper'){return "You win ! "+playerSelection+" Beats "+computerSelection;}
else if(playerSelection == 'Scissor' && computerSelection == 'Rock'){return "You lose ! "+computerSelection+" Beats "+playerSelection;}
else if(playerSelection == 'Paper' && computerSelection == 'Rock'){return "You win ! "+playerSelection+" Beats "+computerSelection;}
else{return "You lose ! "+computerSelection+" Beats "+playerSelection;}
};

console.log(play(player,comp));