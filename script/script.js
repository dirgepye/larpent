$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".nav-bar").find('ul').css("float") == "left" ) {
        $(".nav-bar").find('ul').empty();
        $(".nav-bar").find('ul').html('<div id="hamburger"><div><p>&nbsp</p></div><div><p>&nbsp</p></div><div><p>&nbsp</p></div></div>');
    }
}


// $(document).ready(function() {
//   console.log('yay')
   
//     $(window).resize(function() {
//         if ($(window).width() <= 401) {
//             console.log("gags")
//             $('.nav-bar').find('ul').empty();
//             $('.nav-bar').find('ul').html("<div id='hamburger'><div><p>&nbsp</p></div><div><p>&nbsp</p></div><div><p>&nbsp</p></div></div>")
            
//         }
//     }); 
// });

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
    map = new google.maps.Map(element, options)
}(window, window.google));