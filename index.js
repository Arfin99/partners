var navLinks = document.getElementById("navLinks");

function showMenu(){
     navLinks.style.top = "0";
 }
 function hideMenu(){
    navLinks.style.top= "-120%";
 }

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction(){
    if(window.pageXOffset > sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
 }