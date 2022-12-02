//console.log($('.doc'));

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//make div of each document to read page attribute and have them display none

if ($('.doc').length != 0) {
    for (let i = 0; i < $('.doc').length; i++) {
        generate($('.doc').eq[i]);
    }
}

function generate() {
    let documents = [];
    for (let i = 0; i < $('.doc').attr('documents'); i++) {
        let name = (i + 1) + ".1"; //correct equation for later
        //let name = "1." + (i + 1);
        documents.push(name);
    }
    for (let i = 0; i < 3; i++) {
        $(`.doc-${i + 1}`).attr('src', `images/${documents[i]}.jpg`)
    }
}

//TODO store documents 1.1, 2.1 and how many pages each has?

$('.arrow').click(function() {
    let direction = $(this).attr('direction');
    if (direction === 'left') {
        documentFlip($(this).parent('.doc-col'), 1);
    } else if (direction === 'right') {
        documentFlip($(this).parent('.doc-col'), -1);
    } else if (direction === 'up') {
        imageFlip($(this).siblings('.doc-img'));
    }
});

// TODO pages attribute 
function documentFlip(doc_col, d) { //doc_col = $(.doc-col) of doc
    let doc_img = doc_col.find('.doc-img'); //all doc_img(s)
    for (let i = 0; i < doc_img.length; i++) {
        doc_img_src = doc_img.eq([i]).attr('src').split("images/").pop();
        if (doc_img_src.charAt(0) != doc_img.length && d == 1) {
            doc_img.eq([i]).attr('src', `images/${doc_img_src.replaceAt(0, (Number(doc_img_src.charAt(0)) + d ))}`);

        } else if (Number(doc_img_src.charAt(0)) >= 2 && d == -1) {
            doc_img.eq([i]).attr('src', `images/${doc_img_src.replaceAt(0, (Number(doc_img_src.charAt(0)) + d ))}`);

        } else if (d == 1){
            doc_img.eq([i]).attr('src', `images/${doc_img_src.replaceAt(0, 1)}`);

        } else if (d == -1){
            doc_img.eq([i]).attr('src', `images/${doc_img_src.replaceAt(0, (doc_img.length))}`);

        }
    }
}

function imageFlip(doc_img, d) {
    for (let i = 0; i < doc_img.attr('pages'); i++) {

    }
}
