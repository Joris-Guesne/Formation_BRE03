let url = "https://maridoucet.sites.3wa.io/user-api/create-user";

let formData = new FormData();
formData.append("username", "HommeDeConfiance");
formData.append("firstName", "François");
formData.append("lastName", "Fillon");
formData.append("email", "travailleur.imaginaire@prison.fr");

let body = {
  method: "POST",
  body: formData,
};

fetch(url, body);
