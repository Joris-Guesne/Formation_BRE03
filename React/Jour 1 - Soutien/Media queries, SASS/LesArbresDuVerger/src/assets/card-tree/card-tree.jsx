import "./card-tree.scss";

function CardTree({ imageSource, imageLabel }) {
  return (
    <figure className="image-container">
      <img src={imageSource} alt="Image" />
      <figcaption className="overlay">
        <div className="text">{imageLabel}</div>
      </figcaption>
    </figure>
  );
}

export default CardTree;
