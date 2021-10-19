let buttons = document.querySelectorAll('button')
function computerPlay(){
    let num = Math.floor(Math.random()*3)
    switch(num){
        case 0: return "rock";break;
        case 1: return "paper";break;
        case 2: return "scissors";break;
    }
}
console.log(computerPlay())
let player_score=0,computer_score=0;
function play(e){
    let comp=computerPlay();
    let player=this.className;
    const result=document.querySelector(".result")
    const ps=document.querySelector(".player")
    const cs = document.querySelector(".computer")
    if(computer_score==5||player_score==5){
        if(computer_score==5){
            window.alert("computer wins!");
            player_score=0;
            computer_score=0;
            location.reload();
        }
        else{
            window.alert("player wins!");
            player_score=0;
            computer_score=0;
            location.reload();
        }
    }
    else{
    if(player==comp) result.textContent="It's a draw!"
    else if(player=="rock"){
        if(comp=="paper"){
            computer_score++;
            cs.textContent="Computer: "+computer_score;
            result.textContent=`Computer wins\n${comp} beats ${player}`
        }
        else{
            player_score++;
            ps.textContent="Player: "+player_score;
            result.textContent=`Player wins\n${player} beats ${comp}`
        }
    }
    else if(player=="paper"){
        if(comp=="scissors"){
            computer_score++;
            cs.textContent="Computer: "+computer_score;
            result.textContent=`Computer wins\n${comp} beats ${player}`
        }
        else{
            player_score++;
            ps.textContent="Player: "+player_score;
            result.textContent=`Player wins\n${player} beats ${comp}`
        }
    }
    else{
        if(comp=="rock"){
            computer_score++;
            cs.textContent="Computer: "+computer_score;
            result.textContent=`Computer wins\n${comp} beats ${player}`
        }
        else{
            player_score++;
            ps.textContent="Player: "+player_score;
            result.textContent=`Player wins\n${player} beats ${comp}`
        }
    }
    }
}
buttons.forEach((button)=> button.addEventListener('click',play))