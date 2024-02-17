const daysContainer = document.querySelector(".days");
const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

const countdownDate = new Date("may 17, 2024 00:00:00").getTime();

const countDown = () => {
  const now = new Date().getTime();
  const difference = countdownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
};

setInterval(() => {
  countDown();
}, 1000);
