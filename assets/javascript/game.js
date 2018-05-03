//Responsive Java-->
//<!-- display computer random value in box-->
//create empty div/variable
//assign random value
//connect and display random value to compGuess div
$(document).ready(function(){
        var randomNum="";
        for(var i=0; i<4;i++){
            var random=Math.floor(Math.random()*5)+1;
            randomNum=random + randomNum;
            $('compGuess').ready(randomNum);
            console.log(randomNum);
        }
       
   


//<!-- connect crystal img with on clicks-->
//create crystal variable
//assign variable a random value between 1-9
//connect crytal variable to crystal images
//reset variable values with win/lose


//$(".jumbotron").keyup("click",'crystals', function(){
  //  var crystalValue="";
    //var randomCtlVal=Math.floor(Math.random)+1;
    //crystalValue=randomCtlVal+crystalValue;
    //console.log(crystalValue);
//});


//<!-- connect total score with crystal clicks AND function adder-->
//<!-- connect crystal value box with crystal clicks-->


});
