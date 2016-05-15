"use strict";
/*global $, console
*/


function goPika() {
    $("#pika").animate({ left : '5px' }, 2500);
   setInterval(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
	checkPositie();
    }, 100);
    
    function checkPositie()
    {
    var positiePika = $("#pika").position().left;

    }
    

}



/*function verliesLevens(){
    if (positiePika === 5)
    {
        console.log("tegen de muur");      
        /* if (aantalLevens == 3){
                    $("#balLeven1").fadeOut(1000);
                    (aantalLevens - 1);
                }
        
                else if (aantalLevens == 2){
                    $("#balLeven2").fadeOut(1000);
                    aantalLevens - 1;
                    
                }
        
                else if (aantalLevens == 1 ){
                    $("#balLeven3").fadeOut(1000);
                    aantalLevens - 1;
                    
                }

    }
} */



$(document).ready(function () {
    goPika();
    console.log("klaar");
    
});





