const menu = document.querySelector("#menu");
const v_nav = document.querySelector(".vertical-header");
const logo1 = document.getElementById("logo1");
const inner_body = document.querySelector(".inner_body");
const logInBtn = document.getElementById("log_in_btn");

menu.addEventListener("click", function(){
    document.getElementById("menu").style.visibility = "hidden";
    document.querySelector(".vertical-header").style.display = "block";
});