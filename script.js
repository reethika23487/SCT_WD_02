let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('laps');
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
