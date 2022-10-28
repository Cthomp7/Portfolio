$(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
      $('.content-box').css({
        'animation-name': 'content-box_left', 
        'opacity': '100'});
      $('.content-box-title h2').css({
        'animation-name': 'content-box-title_right', 
        'opacity': '100'});
    }
    if ($(window).scrollTop() > 100) {
        // $('.content-box').css({
        // 'animation-name': 'content-box_left_out', 
        // 'opacity': '0'});
        // $('.content-box-title h2').css({
        // 'animation-name': 'content-box-title_right_out', 
        // 'opacity': '0'});
    }
  });