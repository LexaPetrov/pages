let songs = JSON.parse(JSON.stringify(data));
console.log("Всего треков: ", songs.length);
//render declaration
const Render = (_id, divToRender) => {
  let i = _id;
  if (songs[i].isToRender) {
    let div = `<div class="player">`;
    div += `<div class="title"><p id="title${i}" >${songs[i].title}</p> <div class="controlsUpload">
    <a class='icon upload' title='Загрузить трек' href='javascript: void(0)' onclick="Upload()">
        <img src="img/upload.png" alt="upload_img">
    </a>
    </div></div>`;
    div += `<audio id='audio${i}' src="${songs[i].link}" preload="auto"></audio>`;
    div += `<div class="controls">`;
    div += `<div class="controlsPlay">
                  <a id='play${i}' href="javascript:void(0)" class="icon play" onclick="Play(${songs[i].id})">
                      <img src="img/play.png" alt="play_img">
                  </a>
                  <a href="javascript:void(0)" class="icon pause" id='pause${i}' onclick="Play(${songs[i].id})">
                      <img src="img/pause.png" alt="pause_img">
                  </a>
                  </div>`;
    div += `<span class="currentTime"><small id='currentTime${i}'>00:00</small></span>`;
    div += `<div class='progressbar'><progress id=progressbar${i} value='0' max='100'></progress></div>`;
    div += `<span class="allTime" ><small id="allTime${i}">00:00</small></span>`;
    div += `<div class="controlsVolume">
                  <a class='icon volume'  onclick="Mute(${songs[i].id});">
                      <img id='volumeImg${_id}' src="img/volume.png" alt="volume_img">
                  </a>
                  <input type='range' value='100' max='100' title='Громкость' id='volumeInput${i}' class='volumeInput'>
                  </div>`;
    div += `<div class="controlsSpeed">
                  <select title='Скорость' id='controlsSpeedSelect${i}'>
                      <option value='50'>0.5X</option>
                      <option value='100' selected>1X</option>
                      <option value='125'>1.25X</option>
                      <option value='150'>1.5X</option>
                      <option value='175'>1.75X</option>
                      <option value='200'>2X</option>
                      <option value='200'>2.25X</option>
                  </select>
                  </div>`;
    div += `<div class="controlsDownload">
                  <a class='icon download' title='Скачать трек' href='${songs[i].link}' download>
                      <img src="img/download.png" alt="download_img">
                  </a>
                  </div>
                  `;
    div += `</div>`;
    div += `</div>`;
    document.getElementById(divToRender.toString()).innerHTML += div;
    window["audio" + i] = document.getElementById(`audio${i}`);
    window["audio" + i].src = `${songs[i].link}`;
  }
};
const ChangeSpeed = _id => {
  window["audio" + _id].playbackRate =
    document.getElementById("controlsSpeedSelect" + _id).value / 100;
};
//Normalize Time
const NormalDuration = time => {
  time = Math.floor(time);
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);
  let minValue = min;
  let secValue = sec;
  min < 10 ? (minValue = "0" + min) : null;
  sec < 10 ? (secValue = "0" + sec) : null;
  return minValue.toString() + ":" + secValue.toString();
};
//ProgressBar
const Progress = _id => {
  let progressBar = document.getElementById("progressbar" + _id);
  let currentTime = document.getElementById("currentTime" + _id);
  progress =
    Math.floor(window["audio" + _id].currentTime) /
    (Math.floor(window["audio" + _id].duration) / 100);
  progressBar.value = progress;
  currentTime.innerHTML = NormalDuration(window["audio" + _id].currentTime);
};

const Mute = _id => {
  if (window["audio" + _id].volume === 0) {
    window["audio" + _id].volume =
      document.getElementById(`volumeInput${_id}`).value / 100;
    document.getElementById(`volumeImg${_id}`).src = "./img/volume.png";
  } else {
    window["audio" + _id].volume = 0;
    document.getElementById(`volumeImg${_id}`).src = "./img/muted.png";
  }
};
const ChangeVolume = _id => {
  window["audio" + _id].volume =
    document.getElementById(`volumeInput${_id}`).value / 100;
  document.getElementById(`volumeImg${_id}`).src = "./img/volume.png";
};
const Rewind = (_id, e) => {
  let progressBar = document.getElementById("progressbar" + _id);
  let mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
  let progress = mouseX / (progressBar.offsetWidth / 100);
  window["audio" + _id].currentTime =
    window["audio" + _id].duration * (progress / 100);
};
const Upload = () => {
  console.log("upload called");
};
const Play = _id => {
  _id = songs[_id].id;
  let playButton = document.getElementById(`play${_id}`);
  let pauseButton = document.getElementById(`pause${_id}`);
  let duration = document.getElementById(`allTime${_id}`);
  let speedSelector = document.getElementById(`controlsSpeedSelect${_id}`);
  let muteButton = document.getElementById(`volumeInput${_id}`);
  let volumeSelector = document.getElementById(`volumeInput${_id}`);
  let progressBar = document.getElementById("progressbar" + _id);
  if (playButton.style.display === "block") {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    window["audio" + _id].play();
  } else {
    window["audio" + _id].pause();
    pauseButton.style.display = "none";
    playButton.style.display = "block";
  }
  duration.innerHTML == "00:00"
    ? (duration.innerHTML = NormalDuration(window["audio" + _id].duration))
    : null;
  window["audio" + _id].addEventListener("timeupdate", () => Progress(_id));
  speedSelector.addEventListener("change", () => ChangeSpeed(_id));
  muteButton.addEventListener("change", () => {
    Mute(_id);
  });
  volumeSelector.addEventListener("change", () => ChangeVolume(_id));
  progressBar.addEventListener("click", e => Rewind(_id, e));
};
//render call
for (let i = 0; i < songs.length; i++) {
  Render(i, "container");
}
Render(3, "renderHere");

document.addEventListener("DOMContentLoaded", function(event) {
  for (let i = 0; i < songs.length; i++) {
    document.getElementById(`play${i}`).style.display = "block";
  }
});
