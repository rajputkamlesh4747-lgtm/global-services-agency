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

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_p8rc1r9",
        "template_1syii18",
        this
    ).then(function() {
        alert("Message Sent Successfully!");
        contactForm.reset();
    }, function(error) {
        alert("Failed to Send Message");
        console.log(error);
    });
});
