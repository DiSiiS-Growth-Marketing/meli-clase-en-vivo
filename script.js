// Countdown to Thursday Nov 26, 2026, 7:00 PM Colombia time (UTC-5, no DST)
const TARGET_DATE = new Date("2026-11-26T19:00:00-05:00");

const elDays = document.getElementById("t-days");
const elHours = document.getElementById("t-hours");
const elMins = document.getElementById("t-mins");

function pad(n){ return String(n).padStart(2, "0"); }

function updateCountdown(){
  const now = new Date();
  let diff = TARGET_DATE - now;

  if (diff <= 0){
    elDays.textContent = "00";
    elHours.textContent = "00";
    elMins.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const mins = Math.floor(diff / (1000 * 60));

  elDays.textContent = pad(days);
  elHours.textContent = pad(hours);
  elMins.textContent = pad(mins);
}

updateCountdown();
setInterval(updateCountdown, 1000 * 30);
