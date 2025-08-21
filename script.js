// script.js

document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.querySelector(".mode-switch");
  const modeIcon = document.getElementById("mode-icon");
  const body = document.body;

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Toggle icon between moon and sun
    if (body.classList.contains("light-mode")) {
      modeIcon.textContent = "🌞"; // Sun for light mode
    } else {
      modeIcon.textContent = "🌙"; // Moon for dark mode
    }
  });
});
