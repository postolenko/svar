if( $("#map").length > 0 ) {

    ymaps.ready(init);

    var myMap,
        myPlacemark,
        leftCoord,
        rigthCoord;

    if(bodyWidth >= 1024) {

        leftCoord = 53.226744;
        rigthCoord = 44.995161;

    } else {

        leftCoord = 53.226444;
        rigthCoord = 45.000161;
        
    }

    function init(){   
        myMap = new ymaps.Map("map", {
            center: [leftCoord, rigthCoord],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([53.226444, 45.000161], { 
            hintContent: 'Российская бытовая техника', 
            balloonContent: 'SVAR' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map_mark.svg',
            iconImageSize: [72, 92],
            iconImageOffset: [-38, -85]
        });

        myMap.behaviors
        .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

        myMap.geoObjects.add(myPlacemark);

        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('zoomControl');
        myMap.behaviors.disable(['scrollZoom']);

    }

}