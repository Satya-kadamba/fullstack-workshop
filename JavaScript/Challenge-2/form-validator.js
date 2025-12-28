const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const registerbtn = document.getElementById("registerbtn");

const userMsg = document.getElementById("username-msg");
const emailMsg = document.getElementById("email-msg");
const passMsg = document.getElementById("password-msg");
const cpassMsg = document.getElementById("cpassword-msg");


const userRule = /^[A-Za-z0-9]{3,15}$/;
const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRule = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

username.addEventListener("blur", () => {
  if (userRule.test(username.value)) {
    userMsg.textContent = "✔ Valid";
    userMsg.style.color = "green";
  } else {
    userMsg.textContent = "❌ 3-15 chars, letters & numbers only";
    userMsg.style.color = "red";
  }
  toggleButton();
});

email.addEventListener("blur", () => {
  if (emailRule.test(email.value)) {
    emailMsg.textContent = "✔ Valid";
    emailMsg.style.color = "green";
  } else {
    emailMsg.textContent = "❌ Enter a valid email";
    emailMsg.style.color = "red";
  }
  toggleButton();
});


password.addEventListener("blur", () => {
  if (passRule.test(password.value)) {
    passMsg.textContent = "✔ Strong";
    passMsg.style.color = "green";
  } else {
    passMsg.textContent = "❌ 8+ chars, 1 uppercase, 1 number, 1 special char";
    passMsg.style.color = "red";
  }
  toggleButton();
});


cpassword.addEventListener("blur", () => {
  if (cpassword.value === password.value && cpassword.value !== "") {
    cpassMsg.textContent = "✔ Match";
    cpassMsg.style.color = "green";
  } else {
    cpassMsg.textContent = "❌ Passwords do not match";
    cpassMsg.style.color = "red";
    cpassword.style.borderColor = "red";
  }
  toggleButton();
});


function toggleButton() {
  const valid =
    userRule.test(username.value) &&
    emailRule.test(email.value) &&
    passRule.test(password.value) &&
    cpassword.value === password.value;

  registerbtn.disabled = !valid;
}
