const menu = document.querySelector("#menu");
const bars = document.querySelector("#bars");
const close = document.querySelector("#close");

bars.addEventListener(
    "click",
    function(){
        menu.style.top = "0%";
        menu.style.opacity = "1";
    }
)

close.addEventListener(
    "click",
    function(){
        menu.style.top = "";
        menu.style.opacity = "";

    }
)