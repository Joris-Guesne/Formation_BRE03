document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx1");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.alert("Le formulaire a été soumis !");
  });
});
