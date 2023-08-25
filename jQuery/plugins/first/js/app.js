$(document).ready(function () {
    $('.mySlider').slick({
        lazyLoad: 'ondemand',
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});

window.onload = () => {
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40, 65);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 50);
    $("#num4").countMe(100, 10);
}

const cc = document.querySelector("#custom-cursor");
document.addEventListener(
    "mousemove",
    function (event) {
        // console.log(event.x)
        cc.style.left = event.x + "px";
        // console.log(event.y)
        cc.style.top = event.y + "px";
    }
)