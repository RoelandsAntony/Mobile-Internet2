"use strict";
/*global $, console
*/

function goPika() {
    $("#pika").animate({ left : '5px' }, 25000);
}


$(document).ready(function () {
    goPika();
    console.log("klaar");
    
});





