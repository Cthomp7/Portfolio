// let jQuery = document.createElement("script");
// jQuery.src = "https://code.jquery.com/jquery-3.6.1.js";
// jQuery.integrity = "sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
// jQuery.crossOrigin = "anonymous";
// document.head.append(jQuery);

let doc = document.location.pathname;
console.log(doc);

$(document).ready(function() {
    $('head').append('<link rel="stylesheet" href="/css/fonts.css"/>');
    $('head').append('<link rel="stylesheet" href="/css/site.css"/>');
    $('header').load('/header.html');
    $('head').append('<link rel="stylesheet" href="/css/header.css"/>');

    //********** FIX ************ 
    //if statements are triggered correctly
    //css rules are not being applied
    if (doc.includes("about") == true) {
        $('#about').addClass('target');
        let about = document.getElementById("about");
        about.style.color = "rgb(200, 200, 200) !important;";
        //something fucked up with the id's on the li elements
        console.log("You are in the about section");
    } else if (doc.includes("portfolio") == true || doc.includes("projects") == true) {
        $('#portfolio').css({'color': 'rgb(200, 200, 200)'});
        console.log("You are in the portfolio section");
    } else if (doc.includes("experience") == true) {
        $('#experience').css({'color': 'rgb(200, 200, 200) !important'});
        console.log("You are in the experience section");
    } else if (doc.includes("contact") == true) {
        $('#contact').css({'color': 'rgb(200, 200, 200) !important'});
        console.log("You are in the contact section");
    }
});

let clicked = true;

$(window).resize(function() {
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