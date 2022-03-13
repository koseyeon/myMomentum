const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const savedUserName = localStorage.getItem("userName");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";

function onLoginBtnClick(event) {
  event.preventDefault();
  const userName = loginFormInput.value;
  localStorage.setItem("userName", userName);
  printGreeting();
}

function printGreeting() {
  loginForm.classList.add(HIDDEN);
  greeting.innerText = `Hello! ${savedUserName}`;
  greeting.classList.remove(HIDDEN);
}
if (savedUserName) {
  printGreeting();
} else {
  loginForm.addEventListener("submit", onLoginBtnClick)
}
