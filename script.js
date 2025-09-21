const hamburger = document.querySelector(".hamburger input");
const navul = document.querySelector("nav ul");

hamburger.addEventListener("click" ,function (){
    navul.classList.toggle("class");
});