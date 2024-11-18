addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".js-search")
    .addEventListener("keyup", function (event) {
      console.log(event.target);
      document.querySelector(".js-paragraph").innerText = event.target.value;
    });
});
