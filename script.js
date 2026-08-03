// Global Services Agency

document.addEventListener("DOMContentLoaded", function () {

console.log("Website Loaded Successfully");

const buttons = document.querySelectorAll("a");

buttons.forEach(button => {

button.addEventListener("click", function(e){

if(this.getAttribute("href")==="#"){

e.preventDefault();

alert("This page will be available soon!");

}

});

});

window.addEventListener("scroll",function(){

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.background="#000";

}else{

header.style.background="rgba(0,0,0,.65)";

}

});

});
