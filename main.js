// access to necessary variables

const form = document.querySelector(".form");

const firstNField = document.querySelector(".first-name");
const firstNInput = firstNField.querySelector("input");

const lastNField = document.querySelector(".last-name");
const lastNInput = lastNField.querySelector("input");

const emailField = document.querySelector(".email");
const emailInput = emailField.querySelector("input");

const passwordField = document.querySelector(".password");
const passwordInput = passwordField.querySelector("input");

// form - many actions after wrong filling - empty inputs

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
  // After 400ms there will be a shake effect again, when inputs still fill wrong
  setTimeout(() => {
    firstNField.classList.remove("shake");
    lastNField.classList.remove("shake");
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 400);

  //   email verification

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(pattern)) {
      emailField.classList.add("error");
      let errorTxt = emailField.querySelector(".error-text");
      if (emailInput.value != "") {
        errorTxt.innerText = "Looks like this is not an email";
        emailField.classList.add("shake");
      } else {
        errorTxt.innerText = "Enter a valid email address";
      }
    } else {
      emailField.classList.remove("error");
    }
  }

  firstNInput.onkeyup = () => {
    if (firstNInput.value == "") {
      firstNField.classList.add("error");
    } else {
      firstNField.classList.remove("error");
    }
  };

  lastNInput.onkeyup = () => {
    if (lastNInput.value == "") {
      lastNField.classList.add("error");
    } else {
      lastNField.classList.remove("error");
    }
  };

  emailInput.onkeyup = () => {
    checkEmail();
  };

  passwordInput.onkeyup = () => {
    if (passwordInput.value == "") {
      passwordField.classList.add("error");
    } else {
      passwordField.classList.remove("error");
    }
  };
  // validation when the form will be sent
  if (
    !firstNField.classList.contains("error") &&
    !lastNField.classList.contains("error") &&
    !emailField.classList.contains("error") &&
    !passwordField.classList.contains("error")
  ) {
    window.location.href = "#";
    console.log("Form SUBMITTED");
  }
};
