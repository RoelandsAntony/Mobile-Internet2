"use strict";
/*global $, console
*/



function beweegAsh() {
    var moveLeft, moveRight, moveUp, moveDown;
	moveDown = moveUp = moveRight = moveLeft = true;
    
    var aanvalTeller = 0;//Zo kan er maar één keer per keer op de spatiebalk gedrukt worden.

	var richting = "Beneden";

	var bewegingRechts, bewegingLinks, bewegingOmhoog, bewegingOmlaag;
	bewegingLinks = bewegingRechts = bewegingOmlaag = bewegingOmhoog = 0;
    
    $(document).keydown(function (e) {//Beweging basisanimaties

	    switch (e.which) {
		case 39://Rechts
		    if (moveRight) {//Stoppen wanneer er collision detection is
			    $("#ash").attr('src', 'IMG/ashLeft.PNG');//Standaard afbeelding plaatsen
			    bewegingRechts++;//Om animatie te krijgen
			var rechtsVertragen = bewegingRechts / 2; //Animatie duurt langer
				if (rechtsVertragen %2 == 1)//Animatie afwisselen
					$("#ash").attr('src','IMG/ashLeft.PNG');
				else if(rechtsVertragen%2 == 0)
					$("#ash").attr('src','IMG/ashLeft.PNG');
	   		$("#ash").animate({ "left": "+=8px" }, 0 );//Zorgt voor beweging
	   		richting = "Rechts";//Bepaalt de richting voor de aanval
		}
			
		break;

		case 38://Omhoog
		if(moveUp){//Stoppen waneer er collision detection is
			$("#ash").attr('src','IMG/ashLeft.PNG');
			bewegingOmhoog++;
			var omhoogVertragen = Math.ceil(bewegingOmhoog/3);//Zorgt ervoor dat de animatie even is
				if(omhoogVertragen % 2 == 1)
					$("#ash").attr('src','IMG/ashLeft.PNG');
				else if(omhoogVertragen % 2 == 0)	
					$("#ash").attr('src','IMG/ashLeft.PNG');
	   		$("#ash").animate({ "top": "-=8px" }, 0 );
	   		richting = "Boven";	
		}

		break;
		
		case 40://Beneden
		if(moveDown){//Stoppen wanneer er collision detection is
			$("#ash").attr('src','IMG/ashLeft.PNG');
			bewegingOmlaag++;
			var omlaagVertragen = Math.ceil(bewegingOmlaag/3);
				if(omlaagVertragen%2 == 1)
					$("#ash").attr('src','IMG/ashLeft.PNG');
				else if(omlaagVertragen%2 == 0)
					$("#ash").attr('src','IMG/ashLeft.PNG');
			$("#ash").animate({ "top": "+=8px" }, 0 );
	   		richting = "Beneden";
		}
			
		break;

		case 37://Links
		if(moveLeft){//Stoppen wanneer er collision detection is
			$("#ash").attr('src','IMG/ashLeft.PNG');
			bewegingLinks++;
			var linksVertragen = bewegingLinks/2;
				if(linksVertragen %2 == 1)
					$("#ash").attr('src','IMG/ashLeft.PNG');
				else if (linksVertragen%2==0)
					$("#ash").attr('src','IMG/ashLeft.PNG');
			$("#ash").animate({ "left": "-=8px" }, 0 );
		   	richting = "Links";
		}
		break;
	};
});
}

$(document).ready(function () {
    beweegAsh();
});