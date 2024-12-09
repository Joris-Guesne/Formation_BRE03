/***********************************************************************
 *                    Exercices fonctions et boucles for 
 ***********************************************************************/

/***************************** Exercice 1 ******************************/
// Créer une fonction isCoucou qui prendra en paramètre un mot
// Elle retournera true si le mot est "coucou" et false sinon.
// La fonction ne sera pas sensible à la casse.

// Comportement attendu
console.log(isCoucou('Fromage')); // affiche false
console.log(isCoucou('Coucou')); // affiche true
console.log(isCoucou('coucou')); // affiche true

/***************************** Exercice 2 ******************************/
// Créer une fonction checkAge qui prendra en paramètre un age
// Elle retournera true si l'age est supérieur ou égal à 18 et false dans le cas contraire.

console.log(checkAge(12)); // affiche false
console.log(checkAge(18)); // affiche true
console.log(checkAge(23)); // affiche true

/***************************** Exercice 3 ******************************/
// Afficher le contenu du tableau suivant dans la console
let data = ['J\'aime', 'Manger', 'Des', 'Tomates'];

// Affiche dans la console :
// J'aime
// Manger
// Des
// Tomates

/***************************** Exercice 4 ******************************/
// Créer une fonction calculerMoyenne qui prendra en paramètre notes un tableau.
// Elle retournera le résultat du calcul

// Comportement attendu
let notes = [12, 78, 56, 22, 44, 10];
let moyenne = calculerMoyenne(notes);
console.log(moyenne);// Affiche 37

/***************************** Exercice 5 ******************************/
// Pour chaque étudiant de la collection, afficher sa moyenne.
// Utiliser la fonction de l'exercice précédent pour effectuer le calcul

const students = [
  {
      name: 'John',
      notes: [1, 20, 18, 19, 12]
  },
  {
      name: 'Jane',
      notes: [17, 18, 20, 13, 15]
  },
  {
      name: 'Sophie',
      notes: [17, 12, 14, 15, 13]
  },
  {
      name: 'Marc',
      notes: [2, 3, 5, 8, 9]
  },
  {
      name: 'Manon',
      notes: [18, 17, 18, 19, 12]
  }
];

// Affiche dans la console :
// John 14
// Jane 16.6
// Sophie 14.2
// Marc 5.4
// Manon 16.8
