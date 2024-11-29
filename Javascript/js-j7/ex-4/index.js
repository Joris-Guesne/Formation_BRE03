let recipe = {
  ingredients: [
    "300g de farine",
    "3 oeufs",
    "1L de lait",
    "80g de beurre demi-sel",
  ],
  steps: [
    "Faire un nid avec la farine",
    "Casser les oeufs et les placer dans le nid",
    "Battre les oeufs et la farine en ajoutant doucement le lait",
    "Faire fondre le beurre",
    "Ajouter le beurre fondu à la pâte",
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  let ingredientsListDOM = document.querySelector("#ingredients");
  let stepsListDOM = document.querySelector("#steps");

  for (i = 0; i < recipe.ingredients.length; i++) {
    let newIngredientDOM = document.createElement("li");
    newIngredientDOM.textContent = recipe.ingredients[i];
    ingredientsListDOM.appendChild(newIngredientDOM);
  }

  for (i = 0; i < recipe.steps.length; i++) {
    let newStepsDOM = document.createElement("li");
    newStepsDOM.textContent = recipe.steps[i];
    stepsListDOM.appendChild(newStepsDOM);
  }
});
