function initProject(){

    var project = {}
    var textLines = [
        'xxx',
        'aaaa bbbb ddsfdf',
        '按时打算给桑葚干 阿三哥丧失根深蒂固',
        '对对对所发生的 适当施工',
        '按时打算给桑葚干 按时打算给桑葚干',
        '按时打算给桑葚干 按时打算给桑葚干',
        '按时打算给桑葚干 按时打算给桑葚干'
    ];
    var images = [
        'images/avator1.jpg',
        'images/avator2.jpg',
        'images/avator3.jpg',
        'images/avator4.jpg',
        'images/avator5.jpg',
        'images/avator6.jpg',
        'images/avator7.jpg',
        'images/avator8.jpg',
        'images/avator9.jpg',
        'images/avator10.jpg',
        'images/avator11.jpg',
        'images/avator12.jpg',
        'images/avator13.jpg',
    ];

    project.showLines = 3;
    project.textEnd = false;
    project.imageEnd = false;
    project.waitingTime = 30 * 1000;
    project.musicSrc = 'music/mymusic.mp3';

    var mainDiv = document.getElementsByClassName('main')[0];
    var totalWidth = mainDiv.offsetWidth, totalHeight = mainDiv.offsetHeight;

    project.container = mainDiv;
    project.width = totalWidth;
    project.height = totalHeight;
    project.mode = totalWidth > totalHeight ? 'landscape' : 'portrait';
    project.rows = project.mode == 'landscape' ? 15 : 35;
    project.columns = project.mode == 'landscape' ? 32 : 17;
    project.separate = project.mode == 'landscape' ? 1 : 1;
    project.textLines = textLines;
    project.images = images;

    window.project = project;
}

document.addEventListener('readystatechange', function(evt){
    if(document.readyState == 'complete'){
        initProject();
    }
}, false)

