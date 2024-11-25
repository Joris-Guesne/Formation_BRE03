document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx3");
  let input = document.getElementById("task");
  let ulDOM = document.querySelector("#taskList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let liDOM = document.createElement("li");
    liDOM.textContent = input.value;
    ulDOM.appendChild(liDOM);
  });
});
