const menu = document.querySelector("#menu");
const bars = document.querySelector("#bars");

bars.addEventListener(
    "click",
    function(){
        menu.classList.toggle("show-menu");
        bars.classList.toggle("fa-xmark");
        bars.classList.toggle("fa-bars-staggered")
        // fa-xmark
        // fa-bars-staggered
    }
)