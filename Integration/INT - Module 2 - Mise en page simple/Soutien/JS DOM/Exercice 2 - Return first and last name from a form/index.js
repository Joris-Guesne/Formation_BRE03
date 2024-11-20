document.addEventListener("DOMContentLoaded", function () {
  // Afficher dans la console les valeurs des champs du formulaire #form1
  let formDOM = document.querySelector("#form1");

  for (let i = 0; i < formDOM.length; i++) {
    if (formDOM.elements[i].value !== "Submit") {
      console.log(formDOM.elements[i].value);
    }
  }
});
