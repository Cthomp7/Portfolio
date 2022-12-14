$(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
      $('.content-box').css({
        'animation-name': 'content-box_left', 
        'opacity': '100'});
      $('.content-box-title h2').css({
        'animation-name': 'content-box-title_right', 
        'opacity': '100'});
      $('.content').css({
        'animation-name': 'content-box_left', 
        'opacity': '100'});
      $('.arrow').css({
        'animation-name':'disappear', 'animation-iteration-count':'1','animation-direction':'initial',
        'animation-delay':'initial',
        'opacity':'0',
        'display':'none'});
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

// let names = ["Chloe", "MlgChloe", "Chlobotic", "Chloboswag", "Clob"];
// let i = 0;
// changeName();

// function changeName() {
//   if (i >= 5) {
//     i = 0;
//   }
//   i++;
//   setTimeout(changeName, 3000);
// }