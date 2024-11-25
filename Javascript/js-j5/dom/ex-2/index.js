document.addEventListener("DOMContentLoaded", function () {
  let buttonDOM = document.getElementById("ex2Btn");

  let textDOM = document.querySelector("h2");

  buttonDOM.addEventListener("click", function (event) {
    textDOM.style.color = "var(--yellow)";
  });
});
