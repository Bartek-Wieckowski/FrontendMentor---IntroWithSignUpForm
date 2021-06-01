const form = document.querySelector(".form");

const firstNField = document.querySelector(".first-name");
const firstNInput = firstNField.querySelector("input");

const lastNField = document.querySelector(".last-name");
const lastNInput = lastNField.querySelector("input");

const emailField = document.querySelector(".email");
const emailInput = emailField.querySelector("input");

const passwordField = document.querySelector(".password");
const passwordInput = passwordField.querySelector("input");

form.onsubmit = (event) => {
  event.preventDefault();

  if (firstNInput.value == "") {
    firstNField.classList.add("shake", "error");
  }
  if (lastNInput.value == "") {
    lastNField.classList.add("shake", "error");
  }
  if (passwordInput.value == "") {
    passwordField.classList.add("shake", "error");
  }
  if (emailInput.value == "") {
    emailField.classList.add("shake", "error");
  } else {
    checkEmail();
  }

  setTimeout(() => {
    firstNField.classList.remove("shake");
    lastNField.classList.remove("shake");
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 400);
};
