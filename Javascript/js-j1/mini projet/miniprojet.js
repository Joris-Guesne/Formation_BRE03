let mystery = Math.floor(Math.random() * 100);

let guess = 0;


while (guess !== mystery) {
    let guess = parseInt(window.prompt("Quel est le nombre mystere ?"));
    if (guess < mystery) {
        window.alert("C'est plus !");
    } else if (guess > mystery){
        window.alert("C'est moins !");
    } else {
        window.alert("Bien joué !");
        break;
    }
} 