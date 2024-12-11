import { Para } from "./para";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <h1>Bonjour</h1>
      <h2>Salut</h2>
      <Para content={counter} />
      <button onClick={handleClick}>Paf</button>
    </>
  );
}

export default App;
