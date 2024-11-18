addEventListener("DOMContentLoaded", function () {
  let linkDOM = document.querySelector(".js-link");
  let paragraphDOM = document.querySelector(".js-paragraph");

  linkDOM.addEventListener("click", function (event) {
    event.preventDefault();
    paragraphDOM.innerText = "Bienvenue";
    paragraphDOM.classList.toggle("visible");
  });
});
