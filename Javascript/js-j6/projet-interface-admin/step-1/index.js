document.addEventListener("DOMContentLoaded", function () {
  // Tableau des utilisateurs
  let users = [
    {
      firstName: "Marc",
      lastName: "Beaufort",
      email: "marc.beaufort@test.fr",
      active: true,
    },
    {
      firstName: "Lucie",
      lastName: "Carmin",
      email: "lucie.carmin@test.fr",
      active: true,
    },
    {
      firstName: "Armand",
      lastName: "Perrot",
      email: "armand.perrot@test.fr",
      active: false,
    },
    {
      firstName: "Sarah",
      lastName: "Calmels",
      email: "sarah.calmels@test.fr",
      active: true,
    },
  ];

  // Récupère le tbody du tableau dans le DOM
  let tbody = document.querySelector("table tbody");

  // Boucle pour parcourir le tableau des utilisateurs
  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    // Crée une nouvelle ligne <tr>
    let tr = document.createElement("tr");

    // Crée la cellule ID (numéro de la case + 1)
    let tdId = document.createElement("td");
    tdId.textContent = i + 1;
    tr.appendChild(tdId);

    // Crée la cellule First Name
    let tdFirstName = document.createElement("td");
    tdFirstName.textContent = user.firstName;
    tr.appendChild(tdFirstName);

    // Crée la cellule Last Name
    let tdLastName = document.createElement("td");
    tdLastName.textContent = user.lastName;
    tr.appendChild(tdLastName);

    // Crée la cellule Email
    let tdEmail = document.createElement("td");
    tdEmail.textContent = user.email;
    tr.appendChild(tdEmail);

    // Crée la cellule Status
    let tdStatus = document.createElement("td");
    tdStatus.textContent = user.active ? "Active" : "Inactive";

    // Si l'utilisateur est inactif, on applique une ligne barrée
    if (!user.active) {
      tdStatus.classList.add("text-decoration-line-through");
    }
    tr.appendChild(tdStatus);

    // Crée la cellule Actions
    let tdActions = document.createElement("td");

    // Boutons d'action
    let btnView = document.createElement("button");
    btnView.type = "button";
    btnView.classList.add("btn", "btn-primary", "mx-1");
    btnView.innerHTML = `<span class="bi bi-eye-fill"></span>`;
    tdActions.appendChild(btnView);

    let btnEdit = document.createElement("button");
    btnEdit.type = "button";
    btnEdit.classList.add("btn", "btn-success");
    btnEdit.innerHTML = `<span class="bi bi-pencil-fill"></span>`;
    tdActions.appendChild(btnEdit);

    let btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.classList.add("btn", "btn-danger", "mx-1");
    btnDelete.innerHTML = `<span class="bi bi-trash-fill"></span>`;
    tdActions.appendChild(btnDelete);

    // Ajoute la cellule Actions à la ligne
    tr.appendChild(tdActions);

    // Ajoute la ligne au tbody du tableau
    tbody.appendChild(tr);
  }
});
