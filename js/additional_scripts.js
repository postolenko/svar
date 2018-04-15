$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

    getScrollBar();

});

$(window).resize(function() {

    getScrollBar();
    getPromoSlider();

});

$(document).ready(function() {		

	$(".promo-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
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

function getPromoSlider() {

    if ( bodyWidth >= 900 ) {

        if( !$(".promo-slider").hasClass("slick-initialized") ) {

            $(".promo-slider").slick({
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1200,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true
            });

        } 

    } else {

        $(".promo-slider").slick("unslick");

    }

}

function getScrollBar() {

    if(bodyWidth >= 768 ) {

        if($(".main-nav").hasClass("mCustomScrollbar")) {
            $(".main-nav").mCustomScrollbar("destroy");
        }

    } else {

        $(".main-nav").mCustomScrollbar();

    }

    if(bodyWidth >= 1024 ) {
        
        if($(".main-nav_2").hasClass("mCustomScrollbar")) {
            $(".main-nav_2").mCustomScrollbar("destroy");
        }

    } else {

        $(".main-nav_2").mCustomScrollbar();

    }

}

