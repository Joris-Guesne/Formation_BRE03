let users = [
  {
    id: 0,
    isActive: false,
    age: 24,
    eyeColor: "green",
    name: "Marsh Obrien",
    company: "CENTURIA",
  },
  {
    id: 1,
    isActive: false,
    age: 21,
    eyeColor: "green",
    name: "Rios Gibson",
    company: "MULTRON",
  },
  {
    id: 2,
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Morgan Buchanan",
    company: "CENTURIA",
  },
  {
    id: 3,
    isActive: true,
    age: 25,
    eyeColor: "brown",
    name: "Franklin Dyer",
    company: null,
  },
  {
    id: 4,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Keller Pitts",
    company: "CENTURIA",
  },
  {
    id: 5,
    isActive: false,
    age: 25,
    eyeColor: "brown",
    name: "Davenport Maddox",
    company: "MULTRON",
  },
  {
    id: 6,
    isActive: true,
    age: 31,
    eyeColor: "brown",
    name: "Judith Graves",
    company: null,
  },
  {
    id: 7,
    isActive: true,
    age: 26,
    eyeColor: "blue",
    name: "Hoffman Hess",
    company: "CENTURIA",
  },
  {
    id: 8,
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Sheena Goff",
    company: "MULTRON",
  },
  {
    id: 9,
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Rose Lawrence",
    company: "EVENTIX",
  },
  {
    id: 10,
    isActive: false,
    age: 35,
    eyeColor: "blue",
    name: "Alston Goodman",
    company: "CENTURIA",
  },
  {
    id: 11,
    isActive: true,
    age: 28,
    eyeColor: "brown",
    name: "Nannie Berry",
    company: null,
  },
  {
    id: 12,
    isActive: true,
    age: 27,
    eyeColor: "blue",
    name: "Lynette Jackson",
    company: "CENTURIA",
  },
  {
    id: 13,
    isActive: false,
    age: 23,
    eyeColor: "blue",
    name: "Samantha Garrett",
    company: "EVENTIX",
  },
  {
    id: 14,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Grimes Savage",
    company: "CENTURIA",
  },
  {
    id: 15,
    isActive: false,
    age: 31,
    eyeColor: "green",
    name: "Atkinson Kirby",
    company: null,
  },
  {
    id: 16,
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Jami Burgess",
    company: "CENTURIA",
  },
  {
    id: 17,
    isActive: true,
    age: 31,
    eyeColor: "blue",
    name: "Sallie Albert",
    company: "CENTURIA",
  },
  {
    id: 18,
    isActive: false,
    age: 26,
    eyeColor: "blue",
    name: "Ora Hobbs",
    company: "EVENTIX",
  },
  {
    id: 19,
    isActive: true,
    age: 30,
    eyeColor: "blue",
    name: "Pruitt Sellers",
    company: "CENTURIA",
  },
];

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 1 : Compter les utilisateurs et utilisatrices actif-ve-s

/* Cette fonction retourne un tableau contenant uniquement les utilisateurs actifs */
function getActiveUsers(usersArray) {
  let activeUsersArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].isActive) {
      activeUsersArray.push(usersArray[i]);
    }
  }
  return activeUsersArray;
}

/* Cette fonction retourne un nombre en fonction de la longueur du tableau donné par la fonction getActiveUsers(usersArray) */
function getNmbrActiveUsers(usersArray) {
  return getActiveUsers(usersArray).length;
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 2 : Parmi les utilisateurs et utilisatrices acti-f-ves combien ont les yeux bleus ?

/* Cette fonction retourne un nombre > les personnes actives ayant les yeux bleu */
function getNmbrActiveBlueEyes(usersArray) {
  let activeUsersArray = getActiveUsers(usersArray);
  let activeBlueEye = 0;
  for (let i = 0; i < activeUsersArray.length; i++) {
    if (activeUsersArray[i].eyeColor === "blue") {
      activeBlueEye++;
    }
  }
  return activeBlueEye;
}

console.log(
  `Parmis les ${getNmbrActiveUsers(
    users
  )} utilisateurs actifs, ${getNmbrActiveBlueEyes(users)} ont les yeux bleus.`
);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 3 : Parmi les utilisateurs et utilisatrices actif-ve-s quel est l’âge moyen ?

/* Cette fonction retourne un tableau comprenant tout les ages des personnes actives */
function getActiveUsersAges(usersArray) {
  let activeUsersArray = getActiveUsers(usersArray);
  let agesArray = [];
  for (let i = 0; i < activeUsersArray.length; i++) {
    agesArray.push(activeUsersArray[i].age);
  }
  return agesArray;
}

/* Cette fonction retourne un nombre > moyenne des ages du tableau donné par la fonction getActiveUsersAges(usersArray) */
function computeActiveUsersAverageAge(usersArray) {
  let agesArray = getActiveUsersAges(usersArray);
  let totalAverageAge = 0;

  for (let i = 0; i < agesArray.length; i++) {
    totalAverageAge += agesArray[i];
  }
  totalAverageAge = totalAverageAge / agesArray.length;
  return totalAverageAge;
}

console.log(
  `Parmis les ${getNmbrActiveUsers(
    users
  )} utilisateurs actifs, la moyenne d'âge est de ${computeActiveUsersAverageAge(
    users
  )} ans.`
);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 4 : Rachat de MULTRON par CENTURIA

/* Cette fonction retourne un tableau comprenant tout les objets du tableau usersArray (dans notre cas users) ayant pour proprieté > company: "MULTRON" */
function getMultronUsers(usersArray) {
  let multronUsersArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].company === "MULTRON") {
      multronUsersArray.push(usersArray[i]);
    }
  }
  return multronUsersArray;
}

/* Cette fonction retourne un tableau comprenant tout les objets du tableau donné par la fonction getMultronUsers(usersArray) en changeant la proprieté > company: "MULTRON" en > company: "CENTURIA" */
function setMultronToCenturia(usersArray) {
  let newCenturiaUsersArray = getMultronUsers(usersArray);
  for (let i = 0; i < newCenturiaUsersArray.length; i++) {
    newCenturiaUsersArray[i].company = "CENTURIA";
  }
  return newCenturiaUsersArray;
}

/* Cette fonction retourne un nombre en fonction de la longueur du tableau donné par la fonction setMultronToCenturia(usersArray) */
function getNumbrNewCenturiaUsers(usersArray) {
  return setMultronToCenturia(usersArray).length;
}

console.log(
  `${getNumbrNewCenturiaUsers(
    users
  )} entreprises parmis tous les utilisateurs sont passées de MULTRON à CENTURIA.`
);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 5 : qui a les yeux marron et ne travaille pas chez CENTURIA ?

/* Cette fonction retourne un tableau comprenant tout les objets du tableau usersArray (dans notre cas users) ayant pour proprieté > eyeColor: "brown" */
function getBrownEyedUsers(usersArray) {
  let brownEyedUsersArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].eyeColor === "brown") {
      brownEyedUsersArray.push(usersArray[i]);
    }
  }
  return brownEyedUsersArray;
}

/* Cette fonction retourne un tableau comprenant tout les objets du tableau donné par getBrownEyedUsers(usersArray) en excluant les objets ayant pour proprieté > company: "CENTURIA */
function excludeCenturiaWorkers(usersArray) {
  let brownEyedUsersArray = getBrownEyedUsers(usersArray);
  let excludedCenturiaWorkersArray = [];
  for (let i = 0; i < brownEyedUsersArray.length; i++) {
    if (brownEyedUsersArray[i].company !== "CENTURIA") {
      excludedCenturiaWorkersArray.push(usersArray[i]);
    }
  }
  return excludedCenturiaWorkersArray;
}

/* Cette fonction retourne un nombre en fonction de la longueur du tableau donné par la fonction excludeCenturiaWorkers(usersArray) */
function getNmbrOfExcludedCenturiaWorkers(usersArray) {
  return excludeCenturiaWorkers(usersArray).length;
}

console.log(
  `Parmis tous les utilisateurs, ${getNmbrOfExcludedCenturiaWorkers(
    users
  )} ne travaillent pas a CENTURIA`
);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-> Étape 6 : pour chacune des couleurs d’yeux, compter le nombre de users actif-ve-s et inactif-ve-s

/* Cette fonction retourne un tableau comprenant tout les objets du tableau usersArray (dans notre cas users) ayant pour proprieté > eyeColor equivalent au parametre "eyeColorNeeded" ("brown" , "green" ou "blue") */
function getEyeColorPerUsers(usersArray, eyeColorNeeded) {
  let eyeColorPerUserArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    if (eyeColorNeeded === usersArray[i].eyeColor) {
      eyeColorPerUserArray.push(usersArray[i]);
    }
  }
  return eyeColorPerUserArray;
}

/* Cette fonction retourne un tableau comprenant tout les objets du tableau usersArray (dans notre cas users) ayant pour proprieté > isActive: true et > eyeColor equivalent au parametre "eyeColorNeeded" ("brown" , "green" ou "blue") */
function getNmbrOfActiveUserPerEyeColor(usersArray, eyeColorNeeded) {
  let eyeColorPerUserArray = getEyeColorPerUsers(usersArray, eyeColorNeeded);
  let nmbrOfActiveUserPerEyeColor = 0;
  for (let i = 0; i < eyeColorPerUserArray.length; i++) {
    if (eyeColorPerUserArray[i].isActive) {
      nmbrOfActiveUserPerEyeColor++;
    }
  }
  return nmbrOfActiveUserPerEyeColor;
}

/* Cette fonction retourne un tableau comprenant tout les objets du tableau usersArray (dans notre cas users) ayant pour proprieté > isActive: false et > eyeColor equivalent au parametre "eyeColorNeeded" ("brown" , "green" ou "blue") */
function getNmbrOfInactiveUserPerEyeColor(usersArray, eyeColorNeeded) {
  let eyeColorPerUserArray = getEyeColorPerUsers(usersArray, eyeColorNeeded);
  let nmbrOfInactiveUserPerEyeColor = 0;
  for (let i = 0; i < eyeColorPerUserArray.length; i++) {
    if (!eyeColorPerUserArray[i].isActive) {
      nmbrOfInactiveUserPerEyeColor++;
    }
  }
  return nmbrOfInactiveUserPerEyeColor;
}

console.log(
  `Parmi nos utilisateurs qui ont les yeux marrons, ${getNmbrOfActiveUserPerEyeColor(
    users,
    "brown"
  )} sont actifs et ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "brown"
  )} sont inactifs.`
);

console.log(
  `Parmi nos utilisateurs qui ont les yeux verts, ${getNmbrOfActiveUserPerEyeColor(
    users,
    "green"
  )} sont actifs et ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "green"
  )} sont inactifs.`
);

console.log(
  `Parmi nos utilisateurs qui ont les yeux bleus, ${getNmbrOfActiveUserPerEyeColor(
    users,
    "blue"
  )} sont actifs et ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "blue"
  )} sont inactifs.`
);
