var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var thumbsHeightArr;
var thumb;
var thumbHeight;
var maxThumbHeight;

// ---------------

var infoBlock;
var leftCoord;

// ---------------

var parentBlock;
var parentItem;

// ---------------

var paddingNavItem;
var itemNav;

// ---------------

$(window).load(function() {

    getPromoPaddingTop();
    getTHumbsHeight();
    getInfoBoxParams();
    getNavItemsSize();
    getFixedNav();
    scrollNav();

    $(".accordeon .accordeon-item").each(function() {

        if( !$(this).hasClass("active") ) {

            $(this).addClass("hidden");

        }

    });

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getPromoPaddingTop();   
    getTHumbsHeight();
    getInfoBoxParams();
    getNavItemsSize();
    getFixedNav();
    scrollNav();

});

$(document).scroll(function() {

    getFixedNav();
    scrollNav();

});

$(document).ready(function() {
   
    $(".accordeon-item .ac-title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".accordeon");

        parentItem = $(this).closest(".accordeon-item");        

        if( parentItem.hasClass("active") ) {

            parentItem.find(".sliding-box").slideUp(300);

            parentItem.removeClass("active");

        } else {

            parentItem.addClass("current");

            parentBlock.find(".accordeon-item").each(function() {

                if( $(this).hasClass("active")
                    &&  !$(this).hasClass("current")) {

                    $(this).find(".sliding-box").slideUp(300);
                    $(this).removeClass("active");

                }

            });

            parentItem.removeClass("current");

            parentItem.find(".sliding-box").slideDown(300);

            parentItem.addClass("active");

        }

    });

    $(".thumbnails_3 .thumb-3").each(function() {

        var thumbIndex = $(this).index();

        if( thumbIndex%3 == 0 &&thumbIndex != 0 ) {

            $(this).addClass("thr");

        }

    });

    $(".main-nav_2 a").click(function(e) {

        e.preventDefault();

        var hrefAttr = $(this).attr("href");

        var visibleBlock = $(hrefAttr);

        parentBlock = $(this).closest(".main-nav_2");
        parentBlock.find("a").removeClass("active");
        $(this).addClass("active");

        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top-$(".main-nav_2").height()
        }, 500);

    });

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( popupBlock.is(":visible") ) {

                    popupBlock.fadeOut(300);

                }

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });


        $(document).mouseup(function (e){

            hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.closest(".popup_wrapp").fadeOut(300);
            }

        });

    });

});

function getPromoPaddingTop() {

    if( $("#promo").length > 0 ) {
        
        $("#center").css({
            "padding-top" : $(".header-site").height() + "px"
        });

    }

}

function getTHumbsHeight() {

    $(".set_height").each(function() {

        thumbsHeightArr = [];

        thumb = $(this).find(".thumb");

        thumb.each(function() {

            thumbHeight = $(this).find(".inner").height();

            thumbsHeightArr.push(thumbHeight);

        });

        maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

        thumb.find(".inner").height(maxThumbHeight);

    });

}

function getInfoBoxParams() {

    $(".info_wrapp").each(function() {

        infoBlock = $(this).find(".info-2");

        leftCoord = $(this).find(".leftCoord").offset().left;

        infoBlock.css({
            "width" : bodyWidth - leftCoord + "px",
        });

        infoBlock.find(".inner").css({
            "width" : $(this).find(".leftCoord").width() + "px"
        });

    });

}

function getAnimation() {

  $("section").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}

function scrollNav() {

    var navCoord = $(".main-nav_2").offset().top + $(".main-nav_2").height();

    $(".main-nav_2 a").each(function() {

        var linkHref = $(this).attr("href");

        var elemCoord = $(linkHref);

        var topElemCoord = elemCoord.offset().top;
        var bottomElemCoord = topElemCoord + elemCoord.height();

        if( navCoord > topElemCoord && navCoord < bottomElemCoord ) {

            $(".main-nav_2 a").removeClass("active");
            $(this).addClass("active");

        } else {

            $(this).removeClass("active");

        }

    });

}

function getNavItemsSize() {

    $(".main-nav_2").find("a").each(function() {

        paddingNavItem = 15;
        itemNav = $(this).closest("li");

        itemNav.css({
            "width" : $(this).width() + paddingNavItem*2 + "px"
        });

    });

}

function getFixedNav() {

    if( $(document).scrollTop() > $("#promo").offset().top + $("#promo").height() ) {

        $(".fixed-menu").addClass("visible");

    } else {

        $(".fixed-menu").removeClass("visible");

    }

}