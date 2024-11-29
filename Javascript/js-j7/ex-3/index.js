document.addEventListener("DOMContentLoaded", function () {
  let colorSelectorDOM = document.querySelector("#color");
  let sizeSelectorDOM = document.querySelector("#size");

  let headerDOM = document.querySelector("h2");
  let sectionSizeDOM = document.querySelector("article > section");

  colorSelectorDOM.addEventListener("change", function () {
    let selectedColor = colorSelectorDOM.value;
    if (selectedColor === "blue") {
      headerDOM.classList.remove("pink");
      headerDOM.classList.add("blue");
    } else if (selectedColor === "pink") {
      headerDOM.classList.remove("blue");
      headerDOM.classList.add("pink");
    }
  });

  sizeSelectorDOM.addEventListener("change", function () {
    let selectedSize = sizeSelectorDOM.value;
    if (selectedSize === "small") {
      sectionSizeDOM.classList.remove("big");
      sectionSizeDOM.classList.add("small");
    } else if (selectedSize === "big") {
      sectionSizeDOM.classList.remove("small");
      sectionSizeDOM.classList.add("big");
    }
  });
});
