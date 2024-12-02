let url = "https://maridoucet.sites.3wa.io/user-api/users";

async function getUsers() {
  let response = await fetch(url);
  let data = await response.json();

  console.log(`let data = await reponse.json est egal à`, data);
  return data;
}

getUsers();
