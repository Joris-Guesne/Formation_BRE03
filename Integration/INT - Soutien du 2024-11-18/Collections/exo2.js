document.addEventListener("DOMContentLoaded", function () {
  /*
            Calculer la somme des prix * quantité de la collection suivante.
            Afficher le résultat dans une liste HTML, comme sur la maquette
        */
  let stock = [
    {
      price: 12.3,
      quantity: 102,
    },
    {
      price: 78.4,
      quantity: 1230,
    },
    {
      price: 568,
      quantity: 12,
    },
    {
      price: 457.36,
      quantity: 106,
    },
  ];

  const listeHTML = document.createElement("ul");

  stock.forEach((produit) => {
    const prixStock = produit.price * produit.quantity;

    const listeItem = document.createElement("li");
    listeItem.innerText = `Prix stock: ${prixStock}`;
    listeHTML.appendChild(listeItem);
  });

  document.body.appendChild(listeHTML);
});
