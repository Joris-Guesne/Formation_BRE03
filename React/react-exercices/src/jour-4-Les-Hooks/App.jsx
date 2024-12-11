import { useState } from "react";
import { FormAnimal } from "./formAnimal";
import { TableauAnimaux } from "./TableauAnimaux";

/*const animaux = [
  {
    famille: "Canidés",
    espece: "Chiwawa",
    age: 1,
    prenom: "Nougat",
  },
  {
    famille: "Canidés",
    espece: "Boxer",
    age: 8,
    prenom: "Peggy",
  },
  {
    famille: "Félidés",
    espece: "Lion",
    age: 2,
    prenom: "Léo",
  },
  {
    famille: "Canidés",
    espece: "Berger Australien",
    age: 10,
    prenom: "Félix",
  },
];*/

function App() {
  return (
    <>
      <h1>Jour 4 - Les hooks</h1>
      <FormAnimal />
      <TableauAnimaux />
    </>
  );
}

export default App;
