document.addEventListener("DOMContentLoaded", function () {
  // Afficher dans la console le nom et prénom de chaque personne de la collection suivante
  let personnes = [
    {
      firstName: "Georges",
      lastName: "Cloney",
    },
    {
      firstName: "Julien",
      lastName: "Dupont",
    },
    {
      firstName: "Jules",
      lastName: "César",
    },
    {
      firstName: "Robert",
      lastName: "Redford",
    },
  ];

  for (i = 0; i < personnes.length; i++) {
    console.log(
      "Je suis " + personnes[i].firstName + " " + personnes[i].lastName
    );
  }
});
