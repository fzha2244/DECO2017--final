/* music player */
var audioEle = document.querySelector("#audio");
var songNameEle = document.querySelector("#songNameEle");
// song list
var songs = [
  "纸短情长（抖音男生版）.mp3",
  "纸短情长（抖音女生版）.mp3",
  "纸短情长―抖音小姐姐.mp3",
];

var songIndex = 0;

var songName = "";

initSong();
// Initialize
function initSong() {
  audioEle.src = "./audio/" + songs[songIndex];
  songName = songs[songIndex].split(".mp3")[0];
  console.log(songName);
  songNameEle.innerHTML = songName;
  audioEle.load();
}
// Previous song
function lastSong() {
  if (songIndex > 0) {
    songIndex--;
  } else {
    songIndex = songs.length - 1;
  }
  initSong();
}

// Next song
function nextSong() {
  if (songIndex + 1 < songs.length) {
    songIndex++;
  } else {
    songIndex = 0;
  }
  initSong();
}
