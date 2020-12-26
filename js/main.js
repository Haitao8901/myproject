function beginImages() {

}

function makeLargeShape() {
    var mainDiv = document.getElementsByClassName('main')[0];
    var rows = 13, columns = 30;
    var totalWidth = mainDiv.offsetWidth;
    var totalHeight = mainDiv.offsetHeight;
    var imageWidth = Math.floor(totalWidth / columns) - 10,
        imageHeight = Math.floor(totalHeight / rows) - 15;

    // var rows = Math.floor(totalHeight / (imageHeight + 2));
    // var columns = Math.floor(totalWidth / (imageWidth + 5));

    var coordinates = Coordinate.makeCoordinates(2,1,1);
    for (var i = 0; i < rows; i++) {
        var imageLine = document.createElement('div');
        imageLine.classList.add('imageLine');
        mainDiv.appendChild(imageLine);

        for (var j = 0; j < columns; j++) {
            var coordinate = new Coordinate(i, j);
            var imageDiv = document.createElement('div');
            if(coordinates.containsCoordinate(coordinate)){
                imageDiv.classList.add('image');
            }else{
                imageDiv.classList.add('blankImage');
            }
            imageDiv.style.width = imageWidth + 'px';
            imageDiv.style.height = imageHeight + 'px';
            imageDiv.innerHTML = '<b>' + i + '-' + j + '</b>';
            imageLine.appendChild(imageDiv);
        }
    }
}

function beginTyping() {
    var contentDiv = document.getElementsByClassName('textContent')[0];
    var content, lineEl;

    function typing() {
        if (!content) {
            var textLine = textLines.shift();
            if (!textLine) {
                return;
            }
            content = textLine.split('');
            lineEl = document.createElement('div');
            lineEl.classList.add('line');
            contentDiv.appendChild(lineEl);
        }
        var text = content.shift();
        if (text) {
            var span = document.createElement('span');
            span.classList.add('text');
            span.style.display = 'inline-block';
            span.style.animationDelay = randomNumber(0, 30) / 10 + 's';
            span.innerHTML = text.trim() ? text : '&nbsp;';
            lineEl.appendChild(span);
        } else {
            content = null;
        }
        setTimeout(typing, 200);
    }

    typing();
}

function initStars() {
    var mainDiv = document.getElementsByClassName('main')[0];
    var totalWidth = mainDiv.offsetWidth;
    var count = totalWidth / 60 * 6;

    for (var i = 0; i < count; i++) {
        var size = parseInt('' + randomNumber(60, 120) / 10);
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = randomNumber(5, 95) + '%';
        star.style.top = randomNumber(10, 90) + '%';
        star.style.animationDelay = randomNumber(0, 30) / 10 + 's';
        mainDiv.appendChild(star);
    }
}

function randomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {
    initStars();
    setTimeout(beginTyping, 1000);
    setTimeout(makeLargeShape, 1000);
});