const form = document.querySelector("#form");
const firstnameInput = document.querySelector("#firstname");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const allInputs = document.querySelectorAll(".check");
const button = document.querySelector(".btn");

const checkInputs = () => {
  let arr = [];
  allInputs.forEach((input, index) => {
    if (input.classList.contains("valid")) {
      arr[index] = true;
    } else {
      arr[index] = false;
    }
  });
  return arr;
};

const inputUpdateHandler = (flag, input) => {
  if (flag) {
    input.classList.remove("invalid");
    input.classList.remove("check");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  let result = checkInputs();
  let check = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === false) {
      break;
    } else {
      check++;
    }
  }
  const arrAllInputs = Array.from(allInputs);
  if (check === arrAllInputs.length) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "true");
  }
};

const firstnameInputHandler = () => {
  let result;
  if (firstnameInput.value.length === 0) {
    result = false;
  } else {
    // let regexp = /^[A-Z][a-z]*$/i;
    let regexp = /^[\p{Alpha}]*$/iu;
    result = regexp.test(firstnameInput.value);
  }
  inputUpdateHandler(result, firstnameInput);
};

const surnameInputHandler = () => {
  let result;
  if (surnameInput.value.length === 0) {
    result = false;
  } else {
    let regexp = /^[\p{Alpha}]*$/iu;
    result = regexp.test(surnameInput.value);
  }
  inputUpdateHandler(result, surnameInput);
};

const emailInputHandler = () => {
  let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/i;
  let result = regexp.test(emailInput.value);
  inputUpdateHandler(result, emailInput);
};

const phoneInputHandler = () => {
  let regexp = /^[+]{1}([\d\-\(\)]+)$/i;
  let result = regexp.test(phoneInput.value);
  inputUpdateHandler(result, phoneInput);
};

const messageInputHandler = () => {
  let result;
  if (messageInput.value.length === 0) {
    result = false;
  } else {
    result = true;
  }
  inputUpdateHandler(result, messageInput);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  firstnameInputHandler();
  surnameInputHandler();
  emailInputHandler();
  phoneInputHandler();
  messageInputHandler();
  alert("Well done!");
});

window.onload = () => {
  allInputs.forEach((input) => {
    input.value = "";
  });
  button.setAttribute("disabled", "true");
};

emailInput.addEventListener("input", emailInputHandler);
firstnameInput.addEventListener("input", firstnameInputHandler);
surnameInput.addEventListener("input", surnameInputHandler);
phoneInput.addEventListener("input", phoneInputHandler);
messageInput.addEventListener("input", messageInputHandler);
