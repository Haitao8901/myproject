function showImageFlows() {
    var imageUrls = project.images.slice();

    function beginShowImage(){
        clearCenterImage(true);
        var imageUrl = imageUrls.shift();
        if (!imageUrl) {
            project.imageEnd = true;
            if (project.textEnd) {
                setTimeout(makeLargeShape, 1000);
            }
            return;
        }
        showImage(imageUrl);
        setTimeout(beginShowImage, 2500);
    }
    beginShowImage();
}

function clearCenterImage(clearAll) {
    var container = project.container;
    var class_name = project.mode == 'portrait' ? 'center_image_portrait' : 'center_image';
    var imageDiv = document.getElementsByClassName(class_name)[0];

    if (imageDiv && (clearAll || imageDiv.style.display == 'none')) {
        container.removeChild(imageDiv);
    }
}
function showImageWhenCLick(imageUrl){
    clearCenterImage(false);
    var el = showImage(imageUrl);
    setTimeout(function(){el.style.display = 'none';},3000);
}

function showImage(imageUrl) {
    var imageDiv = document.createElement('div');
    imageDiv.classList.add(project.mode == 'portrait' ? 'center_image_portrait' : 'center_image');
    imageDiv.style.background = 'transparent url(' + imageUrl + ')  no-repeat';
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.backgroundSize = 'cover';
    imageDiv.classList.add('center_imageFlexing');
    project.container.appendChild(imageDiv);
    return imageDiv;
}


function makeLargeShape() {
    var container = project.container;
    var totalWidth = project.width;
    var totalHeight = project.height;

    var rows = project.rows;
    var columns = project.columns;
    var mode = project.mode;
    var images = project.images;

    //x = (w-2cm-2cb)/c; w总高度，c总列数，m marginRight,marginLeft的值, b border的值
    //y = (h -2mr -4r)/r
    var imageWidth = Math.floor((totalWidth - 8 - columns * 2 * 1 - 2 * columns * 1) / columns),
        imageHeight = Math.floor((totalHeight - rows * 2 * 1 - 4 * rows) / rows);

    var coordinates = null;
    if (mode == 'portrait') {
        coordinates = Coordinate.makePortraitCoordinates(1, 2, 1);
    } else {
        coordinates = Coordinate.makeCoordinates(2, 1, 1);
    }

    var imageUrls = images.slice();
    for (var i = 0; i < rows; i++) {
        var imageLine = document.createElement('div');
        imageLine.classList.add('imageLine');
        container.appendChild(imageLine);

        for (var j = 0; j < columns; j++) {
            var coordinate = new Coordinate(i, j);
            var imageEl = document.createElement('img');

            var imageUrl = imageUrls.shift();
            if (!imageUrl) {
                imageUrls = images.slice();
                imageUrl = imageUrls.shift();
            }

            imageEl.alt = '';
            if (coordinates.containsCoordinate(coordinate)) {
                imageEl.classList.add('image');
                imageEl.src = imageUrl;

                imageEl.addEventListener('click', function(){
                    showImageWhenCLick(this.src.replace(/^http:.*(images\/.*)$/ig, '$1'));
                });
            } else {
                imageEl.classList.add('blankImage');
                imageEl.src = 'about:blank';
            }
            imageEl.style.width = imageWidth + 'px';
            imageEl.style.height = imageHeight + 'px';
            imageEl.style.animationDelay = randomNumber(0, 30) / 10 + 's';

            imageLine.appendChild(imageEl);
        }
    }
    show_bgText();
    // setTimeout(restart, project.waitingTime);
}

function show_bgText(){
    var contentDivBG = document.getElementsByClassName('text_bg')[0];
    contentDivBG.style.display = 'block';
}

function beginTyping() {
    var contentDiv = document.getElementsByClassName('text_front')[0];
    var contentDivBG = document.getElementsByClassName('text_bg')[0];
    var content, lineEl, cloneLineEl;
    var textLines = project.textLines.slice();

    function typing() {
        if (!content) {
            var textLine = textLines.shift();
            var class_name = project.mode == 'portrait' ? 'line' : 'line';
            var lineEls = contentDiv.childNodes;
            if (!textLine || lineEls.length == project.showLines) {
                var length = lineEls.length < project.showLines ? lineEls.length : project.showLines;
                for (var i = 0; i < length; i++) {
                    contentDiv.removeChild(lineEls[0]);
                }
            }

            if (!textLine) {
                project.textEnd = true;
                contentDiv.style.display = 'none';
                if (project.imageEnd) {
                    setTimeout(makeLargeShape, 1000);
                }
                return;
            }
            content = textLine.split('');
            lineEl = document.createElement('div');
            lineEl.classList.add('line');
            contentDiv.appendChild(lineEl);

            cloneLineEl = lineEl.cloneNode(true);
            cloneLineEl.classList.remove('line');
            cloneLineEl.classList.add('bg_line');
            contentDivBG.appendChild(cloneLineEl);
        }
        var text = content.shift();
        if (text) {
            var span = document.createElement('span');
            span.classList.add('text');
            span.style.display = 'inline-block';
            span.style.animationDelay = randomNumber(0, 30) / 10 + 's';
            span.innerHTML = text.trim() ? text : '&nbsp;';
            lineEl.appendChild(span);

            var bgNode = span.cloneNode(true);
            bgNode.classList.remove('text');
            bgNode.classList.add('bg_text');
            cloneLineEl.appendChild(bgNode);
        } else {
            content = null;
        }
        setTimeout(typing, 200);
    }

    typing();
}

function initStars() {
    var count = project.width / 60 * 6;

    for (var i = 0; i < count; i++) {
        var size = parseInt('' + randomNumber(60, 120) / 10);
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = randomNumber(5, 95) + '%';
        star.style.top = randomNumber(5, 95) + '%';
        star.style.animationDelay = randomNumber(0, 30) / 10 + 's';
        project.container.appendChild(star);
    }
}

function initMusic() {
    var audio = document.createElement('audio');
    audio.classList.add('project_audio');
    audio.controls = true;
    audio.autoplay = true;
    audio.loop = true;
    audio.src = project.musicSrc;
    project.container.appendChild(audio);
}

function randomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restart() {
    var imageLines = document.getElementsByClassName('imageLine');
    var length = imageLines.length;
    for (var i = 0; i < length; i++) {
        project.container.removeChild(imageLines[0]);
    }

    var contentDivBG = document.getElementsByClassName('text_bg')[0];
    var class_name = project.mode == 'portrait' ? 'line' : 'line';
    var textLineEls = document.getElementsByClassName(class_name);
    length = textLineEls.length;
        for (var i = 0; i < length; i++) {
            contentDivBG.removeChild(textLineEls[0]);
    }

    project.imageEnd = false;
    project.textEnd = false;

    beginTyping();
    showImageFlows();
}

document.addEventListener('readystatechange', function (evt) {
    if (document.readyState == 'complete') {
        initStars();
        setTimeout(function () {
            initMusic();
            beginTyping();
            showImageFlows();
        }, 1000);
        setInterval(clearCenterImage, 1000);
    }
}, false)
