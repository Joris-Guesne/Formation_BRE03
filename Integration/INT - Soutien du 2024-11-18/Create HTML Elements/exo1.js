addEventListener("DOMContentLoaded", function () {
  let chatDOM = document.querySelector(".js-chat");

  chatDOM.addEventListener("mouseenter", function () {
    let paragraphDOM = document.createElement("p");
    paragraphDOM.innerText = "Que la force soit avec toi !";
    console.log(paragraphDOM);
    document.body.appendChild(paragraphDOM);
  });
});
