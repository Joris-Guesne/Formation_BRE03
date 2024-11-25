document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx2");
  let input = document.getElementById("text");
  let textDOM = document.querySelector("#textPreview > p");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    textDOM.textContent = input.value;
  });
});
