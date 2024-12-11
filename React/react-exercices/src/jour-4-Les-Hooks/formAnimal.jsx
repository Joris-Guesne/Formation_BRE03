import React from "react";

export const FormAnimal = () => {
  const [animal, setAnimal] = React.useState({
    famille: "",
    espece: "",
    age: 0,
    prenom: "",
  });

  const [hasSubmit, setHasSubmit] = React.useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const newAnimal = { ...animal };
    newAnimal[name] = value;
    setAnimal(newAnimal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmit(true);
    console.log(animal);
  };

  return (
    <form>
      <fieldset>
        <legend>Entrez les informations de l'animal</legend>
        <div>
          <label htmlFor="famille">Famille de l'animal :</label>
          <input
            type="text"
            id="famille"
            value={animal.famille}
            name="famille"
            placeholder="Canidé"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="espece">Espece de l'animal :</label>
          <input
            type="text"
            id="espece"
            value={animal.espece}
            name="espece"
            placeholder="Chiengue"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Âge de l'animal:</label>
          <input type="number" min="1" id="age" name="age" required />
        </div>
        <div>
          <label htmlFor="prenom">Prénom de l'animal :</label>
          <input
            type="text"
            id="prenom"
            value={animal.prenom}
            name="prenom"
            placeholder="Didier"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Ajouter
          </button>
        </div>
      </fieldset>
    </form>
  );
};
