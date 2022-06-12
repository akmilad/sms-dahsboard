/*
    Template Name: Vinazine
    Author: Themewinter
    Author URI: https://themeforest.net/user/tripples
    Description: vinazine
   Version: 1.0

   ================================
   table of content
   =================================
   1.   dropdown menu
   2.   breking news slider
   3.   featured post slider
   4.   Most populer slider
   5.   Gallery popup
   6.   video popup
   7.   video slider

*/
// function charcountupdate(str) {
//     var lng = str.length;
//     document.getElementById("charcount").innerHTML = lng + ' out of 10 characters';
// }



const textfield = document.getElementById("myInput");
const clearBtn = document.getElementById("clrbtn");
const subject = document.getElementById("subject");
const Ctgreset = document.getElementById("CtgSelect");
var clear = document.getElementById("CtgSelect");

function countChars(obj) {
    document.getElementById("charNum").innerHTML = + obj.value.length;
}
clearBtn.onclick = () => {
    textfield.value = "";
    document.getElementById("charNum").innerHTML = "0";
    subject.value = "";
    for (var i = 0; i < clear.length; i++) {
        if (clear.options[i].selected) {
            clear.options[i].selected = false;
        }
    }
}