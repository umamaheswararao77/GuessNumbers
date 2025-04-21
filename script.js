// document.querySelector('.message').textContent ='correct Number!';
// document.querySelector('.secertNumber').textContent='7';
// document.querySelector('.score').textContent='20';
// document.querySelector('.guess2').value='77';

let number = Math.trunc(Math.random() * 20)+1;

let rscore = 20;
let highscore =0;

document.querySelector('.check').addEventListener('click',function () {
 const guess = Number(document.querySelector('.guess2').value);
 if(!guess){
    document.querySelector('.message').textContent='!No Number'
 }else if (guess === number) {
    document.querySelector('.message').textContent ='WOW Correct Number..';
    document.querySelector('.secertNumber').textContent=number;
    document.querySelector('body').style.backgroundColor='#60b347';
    
    if(rscore > highscore){
        highscore = rscore;
        document.querySelector('.highscore').textContent =highscore;

    }
    
 }else if (guess > number){
    if(rscore > 1){
        document.querySelector('.message').textContent ='IT is too High Broooo..';
        rscore =rscore-1;
        document.querySelector('.score').textContent =rscore;
    }else{
        document.querySelector('.message').textContent='!You Lost Game...'
        document.querySelector('.score').textContent =0;
    }
    
 }else if(guess < number) {
    if(rscore > 1) {
        document.querySelector('.message').textContent='It is too Low Broo.. ';
        rscore = rscore-1; 
        document.querySelector('.score').textContent =rscore;
    }else{
         document.querySelector('.message').textContent='!You Lost Game...';
         document.querySelector('.score').textContent =0;
    }
   
 }
});

document.querySelector('.again').addEventListener('click',function () {
    rscore=20;
    number = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.message').textContent ='Guess The Number';
    document.querySelector('.score').textContent =rscore;
    document.querySelector('.secertNumber').textContent ='?';
    document.querySelector('.guess2').value ='';
    document.querySelector('body').style.backgroundColor='white';
    

    

})