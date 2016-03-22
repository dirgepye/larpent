$(document).ready(function() {

    checkSize();
    //$(window).resize(checkSize);
    function checkSize() {
        if ($(".nav-bar").find('ul').css("visibility") == "hidden") {
            console.log("here");
            $(".nav-bar").find('ul').empty();
            $(".nav-bar").find('ul').html('<div id="hamburger"><div><p>&nbsp</p></div><div><p>&nbsp</p></div><div><p>&nbsp</p></div></div>');
        }
    }

    //NAV BAR ANIMATION ///////
    
    $('#hamburger').click(function() {
        if ($('.dropdown-menu').css("left") == '-1500px') {
            $('.dropdown-menu').animate({left: '0px'}, 400, 'swing');
        }
        else {
            $('.dropdown-menu').animate({left: '-1500px'}, 700, 'swing');
        }
        });
    });


//MAP  ////////////

(function(window, google) {

    //map options
    var options = {
            center: {
                lat: '37',
                lng: '-122',
            },
            zoom: 10
        },
        element = document.getElementById('map-canvas'),
        //map istelf
        map = new google.maps.Map(element, options);
}(window, window.google));