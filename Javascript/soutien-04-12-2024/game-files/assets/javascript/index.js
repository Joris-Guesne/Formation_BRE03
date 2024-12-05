document.addEventListener("DOMContentLoaded", function () {
  let game = {
    word: "",
    tries: 5,
    letters: [],
  };

  function cleanWord(data) {
    let cleanedData = "";
    for (let i = 0; i < data.length; i++) {
      if (
        data[i] === "é" ||
        data[i] === "è" ||
        data[i] === "ê" ||
        data[i] === "ë"
      ) {
        cleanedData += "e";
      } else if (data[i] === "ï" || data[i] === "î") {
        cleanedData += "i";
      } else if (data[i] === "ç") {
        cleanedData += "c";
      } else if (data[i] === "à" || data[i] === "â") {
        cleanedData += "a";
      } else if (data[i] === "ô") {
        cleanedData += "o";
      } else if (data[i] === "ù" || data[i] === "û") {
        cleanedData += "u";
      } else {
        cleanedData += data[i];
      }
    }
    return cleanedData;
  }

  async function getWord() {
    let url = "https://random-word-api.vercel.app/api?words=1&length=8";
    let response = await fetch(url);
    let tableData = await response.json();
    let data = tableData[0];

    console.log("le mot en jeu est : ", data);

    game.word = cleanWord(data);
    console.log(game);
  }

  getWord();

  let keyboardKeys = document.querySelectorAll("#keyboard > ul > li");
  let individualLetter = document.querySelectorAll("#word > ul > li");

  console.log(keyboardKeys);

  for (let i = 0; i < keyboardKeys.length; i++) {
    let individualKey = keyboardKeys[i];
    individualKey.addEventListener("click", function (event) {
      event.preventDefault();

      let target = event.target;
      console.log("Le clic à eu pour cible : ", target);
      let targetedLetter = target.textContent.toLowerCase();
      console.log(targetedLetter);

      target.classList.add("disabled");

      game.letters.push(targetedLetter);
      console.log("Je viens de me mettre a jour ! :", game);

      let counter = 0;

      if (counter <= 8) {
        for (let i = 0; i < game.word.length; i++) {
          if (targetedLetter === game.word[i]) {
            individualLetter[i].textContent = targetedLetter;
            counter++;
          }
        }
      } else {
        game.tries = game.tries - 1;
      }
    });
  }
});
