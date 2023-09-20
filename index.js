const form = document.querySelector(".container__content__form");
const inputEmail = document.querySelector(".container__content__form__email");
const inputError = document.querySelector(".container__content__form__error");

form.addEventListener("submit", (e) => {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  console.log();
  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
    inputEmail.style.backgroundImage = "url('')";
    inputError.innerHTML = "";
  } else {
    e.preventDefault();
    inputEmail.style.border = "0.8px solid red";
    inputEmail.style.backgroundImage = "url('./images/icon-error.svg')";
    inputError.innerHTML = "Please provide a valid Email";
  }
});
