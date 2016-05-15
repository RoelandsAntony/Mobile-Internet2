var scherm = $('#spelzone').position().left;
//var schermRechts = schermLinks + $('#spelzone').width();
//var schermTop = scherm.top;
//var schermOnder = schermTop + $('#spelzone').height();
var positiePika = $("#pika").position().left;
var positieAsh = $("#ash").position().left;
var positieBal = $("#bal").position().left;
var positieBalCol = (positieBal + 500);



function werpen() {
  
   $("#bal").animate({ marginLeft : "96%" }, 1000);
    setInterval(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
	checkPositieBal();
    }, 100);
    
    
    function checkPositieBal()
    {
    var positieBal = $("#bal").position().left;
    var positieBalCol = (positieBal + 200);
      
    }
};


function gevangen()
{
   if (Math.abs(positieBalCol === positiePika) < 1.0E-8)
    {   
        $("#pika").fadeOut();
        console.log("collision");
        }
}


function vangPika() {
      
    $('body').keyup(function (e) {
        if (e.keyCode === 32) {
            werpen();
            gevangen();
            
        }
    });
}


$(document).ready(function () {
    vangPika();
    //console.log(positieAsh);
    //console.log(positieBal);
    //console.log(scherm);
});