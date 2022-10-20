let clicked = false;

$(window).resize(function() {
    console.log("triggered");
    if ($('body').width() >= 500) {
        $('.nav-controller').css("display", "block");
    } else {
        $('.nav-controller').css("display", "none");
    }
});

$('.hamburger').click(function(){
    if (clicked == false) {
        $('.nav-controller').css("display", "block");
        clicked = true;
    } else {
        $('.nav-controller').css("display", "none");
        clicked = false;
    }
});