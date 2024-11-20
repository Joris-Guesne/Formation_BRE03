document.addEventListener("DOMContentLoaded", function () {
  const itemNameInput = document.querySelector(".js-itemName");

  document.querySelector(".js-button").addEventListener("click", function () {
    const item = itemNameInput.value;
    itemNameInput.value = "";

    const li = document.createElement("li");
    li.innerText = item;
    document.querySelector(".js-list").appendChild(li);
  });
});
