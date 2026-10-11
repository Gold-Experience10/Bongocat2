// Tạo thẻ audio
const audio = document.createElement('audio');
audio.src = 'lbi-lợi-bỉ--跳楼机---lbi利比.mp3'; // Đường dẫn tới file nhạc cục bộ
audio.id = 'myAudio';
document.body.appendChild(audio);

// Hàm phát nhạc
function playMusic() {
    if (audio.paused) {
        audio.play();
    }
}

// Vào fullscreen
function goFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

// Thoát fullscreen
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Kiểm tra fullscreen
function isFullScreen() {
    return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    );
}

// Gán sự kiện: click 1 lần => phát nhạc
document.body.addEventListener('click', function () {
    playMusic();
});

// Gán sự kiện: double click => fullscreen toggle
document.body.addEventListener('dblclick', function () {
    if (isFullScreen()) {
        exitFullScreen();
    } else {
        goFullScreen();
    }
});
