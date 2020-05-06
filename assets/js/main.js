const perSecond = 1000;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Timer
let timerInstance;
let displayElement = document.getElementById("timer");

// Button instances
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

// Click Listener
btnStart.addEventListener("click", function () {
  timerInstance = setInterval(timer, perSecond);
  btnReset.disabled = true;
});

btnStop.addEventListener("click", function () {
  timerInstance = clearInterval(timerInstance);
  btnReset.disabled = false;
});

btnReset.addEventListener("click", function () {
  timerInstance = clearInterval(timerInstance);
  btnReset.disabled = true;

  seconds = 0;
  minutes = 0;
  hours = 0;

  displayElement.innerHTML = "00:00:00";
});

// Methods
function timer() {
  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  showTime();
}

function showTime() {
  let sec;
  let min;
  let hr;

  if (seconds < 10) sec = "0" + seconds;
  else sec = seconds;
  if (minutes < 10) min = "0" + minutes;
  else min = minutes;
  if (hours < 10) hr = "0" + hours;
  else hr = hours;

  displayElement.innerHTML = hr + ":" + min + ":" + sec;
}
