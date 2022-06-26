let you = 0;                                                                    //here are the keep score variables 
let computer = 0;
const content = document.querySelector('#content');

const win = document.createElement('div');
win.classList.add('win');

const score = document.createElement('div');
score.classList.add('score');

const result = document.createElement('div');
result.classList.add('result');


function computerPlay(){
let rand = ['rock', 'paper', 'scissor']
let random = rand[Math.floor(Math.random() * rand.length)];
return random;
}

const test = (p,c) => {
    if(you == 5 || computer == 5){
        if(you == 5){
            result.textContent="The Winner is You " ;
            content.appendChild(result);
        }
        else{
            result.textContent="Sorry you lost !" ;
            content.appendChild(result);
        }
        return;
    }
    if(p == c){
        win.textContent='Draw ! '+ p + " equals "+ c;
        content.appendChild(win);  
    }
    else if(playRound(p,c)){
        win.textContent='You win ! '+ p + " beats " + c;
        content.appendChild(win);

        ++you;
        }
    else{
        win.textContent='You lose ! '+ c + " beats " + p;
        content.appendChild(win);
      
        ++computer;
          }
    score.textContent= "The Score: You = "+you+", Computer = "+computer;
        content.appendChild(score);
};



let playRound = function(playerSelection, computerSelection){
if(playerSelection == 'rock' && computerSelection == 'scissor'){return true;}
else if(playerSelection == 'rock' && computerSelection == 'paper'){return false;}
else if(playerSelection == 'scissor' && computerSelection == 'paper'){return true;}
else if(playerSelection == 'scissor' && computerSelection == 'rock'){return false;}
else if(playerSelection == 'paper' && computerSelection == 'rock'){return true;}
else{return false;}
};

const btn1 = document.querySelector('#paper');
btn1.addEventListener('click',()=>{
    const player = 'paper';
    const comp = computerPlay();
    test(player,comp);
   
});

const btn2 = document.querySelector('#rock');
btn2.addEventListener('click',()=>{
    const player = 'rock' ;
    const comp = computerPlay();
    test(player,comp);

});

const btn3 = document.querySelector('#scissor');
btn3.addEventListener('click',()=>{
    const player = 'scissor';
    const comp = computerPlay();
    test(player,comp);
});


