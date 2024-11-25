document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx4");
  let statusFilter = document.getElementById("statusFilter");
  let tableRows = document.querySelectorAll("tbody tr");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre de manière traditionnelle

    let selectedStatus = statusFilter.value;

    tableRows.forEach((row) => {
      if (selectedStatus === "all") {
        row.style.display = "";
      } else if (
        selectedStatus === "active" &&
        row.classList.contains("active")
      ) {
        row.style.display = "";
      } else if (
        selectedStatus === "inactive" &&
        row.classList.contains("inactive")
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
