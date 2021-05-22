const video = document.getElementById('customVideo');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const progress = document.getElementById('video-range');
const timeStamp = document.querySelector('.time');

// 方法
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function changeIcon() {
  if (video.paused) {
    playBtn.innerHTML = '<i class="far fa-play-circle fa-2x"></i>';
  } else {
    playBtn.innerHTML = '<i class="far fa-pause-circle fa-2x"></i>';
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + mins.toString();
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + secs.toString();
  }
  timeStamp.textContent = `${mins}:${secs}`;
}
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}
// 監聽
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('input', setVideoProgress);
