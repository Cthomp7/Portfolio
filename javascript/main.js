let doc = document.location.pathname;
console.log(doc);

fetch('/header.html').then(response => {
    return response.text();
  }).then(header => {
    document.body.insertAdjacentHTML("afterbegin", header);
    headerSpawned();
});

$('head').append(`<link rel="stylesheet" href="/css/fonts.css"/>`);
$('head').append(`<link rel="stylesheet" href="/css/site.css"/>`);
$('head').append(`<link rel="stylesheet" href="/css/header.css"/>`);

function headerSpawned() {
    let clicked = false;

    if (doc == '/index.html' || doc == '/') {
        $('#about').css({'color': 'rgb(200, 200, 200)'});
    } else if (doc.includes("portfolio") == true || 
        doc.includes("galleries") == true) {
        $('#portfolio').css({'color': 'rgb(200, 200, 200)'});
    } else if (doc.includes("experience") == true) {
        $('#experience').css({'color': 'rgb(200, 200, 200)'});
    } else if (doc.includes("contact") == true) {
        $('#contact').css({'color': 'rgb(200, 200, 200)'});
    }

    if ($('body').width() <= 550) {
        $('.navigation').css("display", "none");
    }

    $(window).resize(function() {
        if ($('body').width() >= 550) {
            $('.navigation').css("display", "flex");
            $('.nav-bkg').css("display", "none");
        } else {
            $('.navigation').css("display", "none");
        }
    });

    $('.hamburger').click(function(){
        console.log("triggered");
        if (clicked == false) {
            $('.navigation').css("display", "flex");
            $('.nav-bkg').css("display", "initial");
            clicked = true;
        } else {
            $('.navigation').css("display", "none");
            $('.nav-bkg').css("display", "none");
            clicked = false;
        }
    });
}