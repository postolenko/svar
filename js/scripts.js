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

$(window).load(function() {

    getPromoPaddingTop();
    getTHumbsHeight();
    getInfoBoxParams();

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