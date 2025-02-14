// Feature 5: Countdown Timer

const countdown = () => {

  const nextDate = new Date("February 14, 2026 00:00:00").getTime();

  const now = new Date().getTime();

  const difference = nextDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;

  document.getElementById("hours").innerText = hours;

  document.getElementById("minutes").innerText = minutes;

  document.getElementById("seconds").innerText = seconds;

};

setInterval(countdown, 1000);

// Feature 6: Interactive Love Quiz

const quizOptions = document.querySelectorAll(".quiz-option");

const quizResult = document.querySelector(".quiz-result");

quizOptions.forEach(option => {

  option.addEventListener("click", () => {

    if (option.dataset.answer === "blue") {

      quizResult.innerText = "Correct! You know me so well! ❤️";

    } else {

      quizResult.innerText = "Oops! Try again! 😊";

    }

  });

});

// Feature 8: Heart Cursor

document.addEventListener("mousemove", (e) => {

  const cursor = document.querySelector(".heart-cursor");

  cursor.style.left = e.pageX + "px";

  cursor.style.top = e.pageY + "px";

});

// Feature 9: Confetti Animation

const confettiSettings = { target: "confetti-canvas" };

const confetti = new ConfettiGenerator(confettiSettings);

confetti.render();

setTimeout(() => {

  confetti.clear();

}, 5000);