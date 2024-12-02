function ageTest(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Autorisation accordée.");
    } else {
      reject("Autorisation refusée");
    }
  });
}

ageTest(42)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
ageTest(16)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
