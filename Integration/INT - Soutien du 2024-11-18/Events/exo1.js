addEventListener("DOMContentLoaded", function () {
  let buttonDOM = document.querySelector(".js-button");
  let paragraphDOM = document.querySelector(".js-paragraph");

  buttonDOM.addEventListener("click", function () {
    paragraphDOM.classList.toggle("visible");
  });
});
