document.addEventListener("DOMContentLoaded", function () {
  let buttonDOM = document.getElementById("ex4Btn");

  let crepeListDOM = document.querySelector("ul#crepe");

  buttonDOM.addEventListener("click", function (event) {
    let li = document.createElement("li");
    let txt = document.createTextNode("Beurre");
    li.appendChild(txt);
    crepeListDOM.appendChild(li);
  });
});
