document.addEventListener("DOMContentLoaded", function () {
  let blueArticleDOM = document.querySelector("#blueTab");
  let pinkArticleDOM = document.querySelector("#pinkTab");

  let blueButtonDOM = document.querySelector("#blueTabButton");
  let pinkButtonDOM = document.querySelector("#pinkTabButton");

  pinkButtonDOM.addEventListener("click", function () {
    pinkButtonDOM.classList.add("active");
    pinkArticleDOM.classList.add("active");
    blueButtonDOM.classList.remove("active");
    blueArticleDOM.classList.remove("active");
  });

  blueButtonDOM.addEventListener("click", function () {
    blueButtonDOM.classList.add("active");
    blueArticleDOM.classList.add("active");
    pinkButtonDOM.classList.remove("active");
    pinkArticleDOM.classList.remove("active");
  });
});
