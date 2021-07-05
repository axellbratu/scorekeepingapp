//js query selectors to connect the button and score dropdown
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playTo')

//gameloops
let isGameOver=false;

//default winning score
let winningScore=3;


//defining player objects and their parameters
const p1={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Score')
}

const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Score')
}


//update scores on button click
function updateScore(player,opponent){
    if(!isGameOver){
        if(player.score!==winningScore){
            player.score+=1;
            if(player.score==winningScore){
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');
                isGameOver=true;
                player.button.disabled=true;
                opponent.button.disabled=true;
            }
        player.display.textContent=player.score;
            
        }
        }
}

//event listeners 
p1.button.addEventListener('click',function(){
    updateScore(p1,p2);
});


p2.button.addEventListener('click',function(){
   updateScore(p2,p1);
});

resetButton.addEventListener('click',reset);

//reset score when winning score is changed
winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
});


//game reset
function reset(){

    for(let p of [p1,p2]){
        p.score=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.display.textContent=p.score;
        p.button.disabled=false;
    }
    isGameOver=false;
};