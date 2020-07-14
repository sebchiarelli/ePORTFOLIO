var button = document.querySelectorAll("button");
var container = document.querySelectorAll(".container");

button[0].addEventListener("click", vanishing);
button[1].addEventListener("click", vanishing2);
button[2].addEventListener("click", vanishing3);


function vanishing(){
    container[0].classList.add("vanish");
    container[1].classList.remove("vanish");
}
function vanishing2(){
    container[0].classList.remove("vanish");
    container[1].classList.add("vanish");
}
function vanishing3(){
    document.querySelector("h1").classList.toggle("vanish");
}