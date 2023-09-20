form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  console.log();
  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
  }
});
