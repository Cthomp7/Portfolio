let num = $('#number').text();
let imageList = [];
let numList = [];

$( document ).ready(function() {
  for (let i = 0; i < num; i++) {
    numList.push(i);
  }
  let ranNumList = shuffle(numList);
  for (let i = 0; i < num; i++) {
    let photo = i + 1;
    let div = document.createElement('div');
    div.className = "photo";
    $('#gallery').append(div);
    let src = "images/"+ photo +".jpg";
    imageList.push(src);
  } 
  randomizeGallery(ranNumList);

  $('.photo').click(function () {
    let source = $(this).children('img').attr('src');
    modal.style.display = "block";
    modalImg.src = source;
    console.log("triggered");
  });
  
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
});

function randomizeGallery(n) {
  for (let i = 0; i < n.length; i++) {
    let image = document.createElement('img');
    image.src = imageList[n[i]];
    $('.photo:nth-of-type(' + (i) + ')').append(image);
    $('.photo:nth-of-type(' + (i) + ')').css({'background-image':'url(' +imageList[n[i]] + ')'});
  }
}

var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");

function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}