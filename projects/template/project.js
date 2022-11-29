let isSpawned = false;

$(window).scroll(function() {
    if ($(window).scrollTop() > 25) {
        $('#t-text').css({
                'animation': 'txt-away 1s linear', 'opacity': '0%'
            });
        if (isSpawned == true) {
            $('#d-text').css({
                'animation': 'txt-down 1s linear', 'opacity': '100%'
            });
        }
        isSpawned = true;
    } else {
        if (isSpawned == true) {
            $('#d-text').css({
                'animation': 'txt-away 1s linear', 'opacity': '0%'
            });
            $('#t-text').css({
                'animation': 'title-intro 2s', 'opacity': '100%'
            });
        }
    }
});