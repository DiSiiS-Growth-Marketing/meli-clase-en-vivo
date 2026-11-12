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

// Submit any signup form (hero or modal) in the background, then always go to /gracias.
document.querySelectorAll(".signup-form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const params = new URLSearchParams(new FormData(form));
    fetch(form.action, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body: params,
    });
    window.location.href = "/gracias";
  });
});

// Secondary CTAs (about section, final CTA) open the signup modal instead of
// jumping to the hero form.
const signupModal = document.getElementById("signup-modal");
if (signupModal) {
  const openModal = () => {
    signupModal.classList.add("is-open");
    document.body.classList.add("modal-open");
  };
  const closeModal = () => {
    signupModal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-open-signup]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  signupModal.querySelector(".modal-close").addEventListener("click", closeModal);

  signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
