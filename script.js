$(document).ready(function() {
    console.log('yay')
    $(window).resize(function() {
        if ($(window).width() <= 401) {
            console.log("gags")
            // $('.nav-bar').find('ul').empty();
            $('body').css("background-color", "yellow");
        }
    });
})