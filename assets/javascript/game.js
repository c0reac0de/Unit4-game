

$(document).ready(function(){

//set inital values
var makeRn="";
var playerTotal=0;
var wins=0;
var losses=0;

//RGN with min max param
function randomInt(min, max){
    return Math.floor(Math.random()* (max-min+1)+min);
}

//game settings
function initGame(){
makeRn=randomInt(19,120);
playerTotal=0;
var crystal=[$('.A'),$('.B'),$('.C'),$('.D')];
for (var i=0; i<crystal.length; i++){
    crystal[i].attr('data-imageValue', randomInt(1,12));
};

$('#compGuess').html(makeRn);
$('#wins').html(wins);
$('#losses').html(losses);
$('#ScoreDisplay').html(playerTotal);
}
initGame();

//game functions
//on click listener/function 
$('.crystal').on('click',function(){
    playerTotal += parseInt($(this).attr('data-imageValue'));
    
    $('#ScoreDisplay').html(playerTotal);
    if (playerTotal === makeRn){
        wins++;
        alert('you won this set! The next one starts now;');
        initGame();
    }
    else if(playerTotal> makeRn){
        losses++;
        alert('you lost this one but have another go')
        initGame();
    }
});
});
