document.addEventListener("DOMContentLoaded", function () {
  let passwordType = document.querySelector("#password");
  let passwordCheck = document.querySelector("#confirmPassword");

  let submitButton = document.querySelector("fieldset > button");

  let wrongPasswordText = document.querySelector("form > p");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (passwordType.value !== passwordCheck.value) {
      wrongPasswordText.classList.add("show");
      passwordType.classList.remove("valid");
      passwordType.classList.add("invalid");
      passwordCheck.classList.remove("valid");
      passwordCheck.classList.add("invalid");
    } else {
      wrongPasswordText.classList.remove("show");
      passwordType.classList.remove("invalid");
      passwordType.classList.add("valid");
      passwordCheck.classList.remove("invalid");
      passwordCheck.classList.add("valid");
    }
  });
});
