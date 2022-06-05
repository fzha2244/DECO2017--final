/* timer */
var countEle = document.querySelector("#count");
var startEle = document.querySelector("#start");
var pauseEle = document.querySelector("#pause");
var resetEle = document.querySelector("#reset");
var count = 0;
var timer = null;

function start() {
  if (!timer) {
    timer = setInterval(() => {
      countEle.innerHTML = count;
      count++;
    }, 1000);
    startEle.style.display = "none";
    pauseEle.style.display = "block";
  }
}

// Pause
function pause() {
  clearInterval(timer);
  timer = null;
  startEle.style.display = "block";
  pauseEle.style.display = "none";
}

// reset
function reset() {
  pause();
  count = 0;
  countEle.innerHTML = count;
}
