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
  `Out of our currently ${getNmbrActiveUsers(
    users
  )} active users, ${getNmbrActiveBlueEyes(users)} have blue eyes.`
);

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
  `Out of our currently ${getNmbrActiveUsers(
    users
  )} active users, the average age is ${computeActiveUsersAverageAge(users)}.`
);

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
  )} user companies have been changed from MULTRON to CENTURIA.`
);

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
  `${getNmbrOfExcludedCenturiaWorkers(
    users
  )} users with brown eyes do not work at CENTURIA`
);

/* Cette fonction retourne un tableau comprenant tout les objets du tableau  usersArray (dans notre cas users) ayant pour proprieté > eyeColor equivalent au parametre "eyeColorNeeded" ("brown" , "green" ou "blue") */
function getEyeColorPerUsers(usersArray, eyeColorNeeded) {
  let eyeColorPerUserArray = [];
  for (let i = 0; i < usersArray.length; i++) {
    if (eyeColorNeeded === usersArray[i].eyeColor) {
      eyeColorPerUserArray.push(usersArray[i]);
    }
  }
  return eyeColorPerUserArray;
}

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
  `Out of our brown eyed users ${getNmbrOfActiveUserPerEyeColor(
    users,
    "brown"
  )} are active and ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "brown"
  )} are inactive`
);

console.log(
  `Out of our green eyed users ${getNmbrOfActiveUserPerEyeColor(
    users,
    "green"
  )} are active and ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "green"
  )} are inactive`
);

console.log(
  `Out of our blue eyed users ${getNmbrOfActiveUserPerEyeColor(
    users,
    "blue"
  )} are active and ${getNmbrOfInactiveUserPerEyeColor(
    users,
    "blue"
  )} are inactive`
);
