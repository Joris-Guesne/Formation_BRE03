document.addEventListener("DOMContentLoaded", function () {
  const fruits = ["kiwi", "banane", "fruit de la passion", "framboise"];

  const listeHTML = document.createElement("ul");
  console.log("UL", listeHTML);
  fruits.forEach((fruit) => {
    const listeItem = document.createElement("li");
    listeItem.innerText = fruit;
    listeHTML.appendChild(listeItem);
    console.log("Item", listeItem);
    console.log("UL avec new item", listeHTML);
  });

  document.body.appendChild(listeHTML);
});
