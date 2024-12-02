let url = "https://maridoucet.sites.3wa.io/user-api/user/18";

async function getUsers() {
  let response = await fetch(url);
  let data = await response.json();
  let rafinedData = data.data;

  console.log(`let data = await reponse.json est egal à`, rafinedData);
  return rafinedData;
}

document.addEventListener("DOMContentLoaded", function () {
  getUsers()
    .then((personne) => {
      console.log(`la personne :`, personne);

      let username = document.createElement("h1");
      username.textContent = personne.username;

      let nom = document.createElement("h2");
      nom.textContent = personne.firstName;

      let email = document.createElement("h3");
      email.textContent = personne.email;

      document.body.appendChild(username);
      document.body.appendChild(nom);
      document.body.appendChild(email);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
});
