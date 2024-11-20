let buttonDOM = document.querySelector(".js-button");

function Paragraph(content) {
  let paragraphDOM = document.createElement("p");
  paragraphDOM.innerHTML = content;
  return paragraphDOM;
}

buttonDOM.addEventListener("click", function () {
  let paragraphDOM = Paragraph("Plop !");
  document.body.appendChild(paragraphDOM);
});
