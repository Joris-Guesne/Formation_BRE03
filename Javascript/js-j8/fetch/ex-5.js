let url = "https://maridoucet.sites.3wa.io/user-api/users";

async function getUsers() {
  let response = await fetch(url);
  let data = await response.json();
  let rafinedData = data.data;

  console.log(`let rafinedData = data.data est egal à`, rafinedData);
  return rafinedData;
}

document.addEventListener("DOMContentLoaded", function () {
  getUsers()
    .then((nosBetises) => {
      console.log(`Nos bétises :`, nosBetises);

      let newTable = document.createElement("table");
      let newThead = document.createElement("thead");
      let newTr = document.createElement("tr");

      let newThId = document.createElement("th");
      newThId.textContent = "ID";
      let newThUsername = document.createElement("th");
      newThUsername.textContent = "Username";
      let newThFirstName = document.createElement("th");
      newThFirstName.textContent = "Prénom";
      let newThLastName = document.createElement("th");
      newThLastName.textContent = "Nom";
      let newThEmail = document.createElement("th");
      newThEmail.textContent = "Email";

      newTr.appendChild(newThId);
      newTr.appendChild(newThUsername);
      newTr.appendChild(newThFirstName);
      newTr.appendChild(newThLastName);
      newTr.appendChild(newThEmail);

      newThead.appendChild(newTr);
      newTable.appendChild(newThead);

      document.body.appendChild(newTable);

      for (let i = 0; i < nosBetises.length; i++) {
        let newTr = document.createElement("tr");
        let newTdId = document.createElement("td");
        newTdId.textContent = nosBetises[i].id;
        let newTdUsername = document.createElement("td");
        newTdUsername.textContent = nosBetises[i].username;
        let newTdFirstName = document.createElement("td");
        newTdFirstName.textContent = nosBetises[i].firstName;
        let newTdLastName = document.createElement("td");
        newTdLastName.textContent = nosBetises[i].lastName;
        let newTdEmail = document.createElement("td");
        newTdEmail.textContent = nosBetises[i].email;
        newTr.appendChild(newTdId);
        newTr.appendChild(newTdUsername);
        newTr.appendChild(newTdFirstName);
        newTr.appendChild(newTdLastName);
        newTr.appendChild(newTdEmail);
        newTable.appendChild(newTr);
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
});
