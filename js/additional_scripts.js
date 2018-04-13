$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$(".promo-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    $(".testimonials-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

});

