//Jumble Text
//by Chloe Thompson | chloe.thomp7@gmail.com
//JavaScript library for jumbling text in HTML

//---- How to use ----

let timeout;

for (let i = 0; i < $('.message').length; i++) {
    $('.message').eq(i).messageata("originalname", $('.message').eq(i).text());
    console.log($('.message').eq(i).messageata("originalname"));
}

$('.message').mouseenter(function() { 
    jumble($(this), $('.message').index($(this)));
});

$('.message').mouseout(function() { 
    stop();
    $(this).text($(this).data('originalname'));
});


function jumble(obj, order, ogName) {

    let text = obj.data("originalname");
    let letters = text.split('');

    let newLetters = [];
    for (let i = 0; i < letters.length; i++) {
        let r = Math.floor(Math.random() * letters.length);
        let l = letters[r];
        newLetters.push(l);
    }

    let newText = newLetters.join('');
    obj.text(newText);
    newText = "";

    timeout = setTimeout(function() { jumble(obj, order) }, 100);
}

function stop () {
    clearTimeout(timeout);
}
