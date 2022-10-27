// let jQuery = document.createElement("script");
// jQuery.src = "https://code.jquery.com/jquery-3.6.1.js";
// jQuery.integrity = "sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
// jQuery.crossOrigin = "anonymous";
// document.head.append(jQuery);

let doc = document.location.pathname;
console.log(doc);

$(document).ready(function() {
    $('header').load('/header.html');
    $('head').append('<link rel="stylesheet" href="/css/header.css"/>');
    $('head').append('<link rel="preconnect" href="https://fonts.googleapis.com" />', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />', '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>');

    //********** FIX ************ 
    //if statements are triggered correctly
    //css rules are not being applied
    if (doc.includes("index") == true) {
        $('#about').css({'color': 'white'});
    } else if (doc.includes("portfolio") == true) {
        $('#portfolio').css({'color': 'rgb(200, 200, 200)'});
    } else if (doc.includes("experience") == true) {
        $('#experience').css({'color': 'rgb(200, 200, 200) !important'});
    } else if (doc.includes("contact") == true) {
        $('#contact').css({'color': 'rgb(200, 200, 200) !important'});
    }
});

$('#portfolio').hover(function() {
    $('#portfolio').css({'color': 'white'});
});

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