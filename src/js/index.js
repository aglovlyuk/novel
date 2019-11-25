import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'slick-carousel';
//import popper from "popper.js";
//import bootstrap from "bootstrap";

$(function() {
    $(".js-slider").slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
});
