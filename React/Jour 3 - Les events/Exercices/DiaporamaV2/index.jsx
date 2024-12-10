import React from "react";
import ReactDOM from "react-dom";

const images = [
  "cerisier.jpg",
  "dattier.jpg",
  "noyer.jpg",
  "pecher.jpg",
  "poirier.jpg",
  "prunier.jpg",
];

const ButtonFwd = ({ onForward }) => {
  return <button onClick={onForward}>&gt;</button>;
};

const ButtonBwd = ({ onBackward }) => {
  return <button onClick={onBackward}>&lt;</button>;
};

const Diapo = ({ index }) => {
  return (
    <img width="50%" src={`./img/${images[index]}`} alt={`Image ${index}`} />
  );
};

const App = () => {
  const [index, setIndex] = React.useState(0);

  const handleForward = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBackward = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <ButtonBwd onBackward={handleBackward} />
      <Diapo index={index} />
      <ButtonFwd onForward={handleForward} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
