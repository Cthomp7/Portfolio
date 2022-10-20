//Jumble Text
//by Chloe Thompson | chloe.thomp7@gmail.com
//JavaScript library for jumbling text

//---- How to ----
//  Add jumble class to a text element you want to jumble
//  ex: <p class"jumble"">text</p>

let timeout;

for (let i = 0; i < $('.jumble').length; i++) {
    $('.jumble').eq(i).data("originalname", $('.jumble').eq(i).text());
    console.log($('.jumble').eq(i).data("originalname"));
}

$('.jumble').mouseenter(function() { 
    jumble($(this), $('.jumble').index($(this)));
});

$('.jumble').mouseout(function() { 
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
