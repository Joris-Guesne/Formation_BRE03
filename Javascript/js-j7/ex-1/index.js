document.addEventListener("DOMContentLoaded", function () {
  let buttonDOM = document.querySelector("#readMore");
  let sectionDOM = document.querySelector(".short");

  buttonDOM.addEventListener("click", function () {
    sectionDOM.classList.toggle("short");
    sectionDOM.classList.toggle("long");
  });
});
