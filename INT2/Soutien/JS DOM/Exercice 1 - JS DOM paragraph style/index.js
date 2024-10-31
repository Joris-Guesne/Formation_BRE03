document.addEventListener('DOMContentLoaded', function () {
  // Au clic sur le bouton ayant la classe js-submit-button
  // Changer la taille, famille et couleur de la police
  // de l'élément ayant la classe js-text

  
  let buttonDOM = document.querySelector('.js-submit-button');

  buttonDOM.addEventListener('click', function(){
    
    let textDOM = document.querySelector('.js-text');
    textDOM.style.fontFamily = 'monospace';
    textDOM.style.color = 'blue';
    textDOM.style.fontSize = '5rem';
  });
});
