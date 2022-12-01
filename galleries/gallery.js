$('head').append(`<link rel="stylesheet" href="style.css"/>`);
appendPhotos();

function appendPhotos() {
    let numbers = [];
    for (let i = 0; i < $('#number').text(); i++) {
        let num = i + 1;
        console.log(num);
        numbers.push(num);
    }
    let randomNumbers = shuffle(numbers);
    for (let i = 0; i < $('#number').text(); i++) {
        let div = document.createElement('div');
        div.className = "photo";
        let image = document.createElement('img');
        image.src = "images/"+ (randomNumbers[i]) +".jpg";
        div.style.backgroundImage = 'url(' + ('images/' + image.src.split("images").pop()) + ')';
        div.append(image);
        $('#gallery').append(div);
    }
}

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

$('.photo').click(function () {
  let source = $(this).children('img').attr('src');
  $('#myModal').css({'display':'block'});
  $('.modal-content').attr("src", source);
});

$('.close').click( function() { 
    $('#myModal').css({'display':'none'});
});