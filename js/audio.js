/* music player */
var audioEle = document.querySelector("#audio");
var songNameEle = document.querySelector("#songNameEle");
// song list
var songs = [
  "audio1.mp3",
  "audio2.mp3",
  "audio3.mp3",
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
