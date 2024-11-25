document.addEventListener("DOMContentLoaded", function () {
  let buttonDOM = document.getElementById("ex3Btn");

  let gridDOM = document.querySelector("section#grid");

  buttonDOM.addEventListener("click", function (event) {
    gridDOM.classList.toggle("grid-3");
  });
});
