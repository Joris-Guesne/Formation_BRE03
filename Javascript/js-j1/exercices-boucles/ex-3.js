let i = 0;
while (i <= 100) {
  if (i <= 50) {
    if (i % 2 === 0) {
      console.log(`${i} Pair`);
    } else {
      console.log(`${i} Impair`);
    }
  } else {
    if (i % 3 === 0) {
      console.log(`${i}`);
    }
  }
  i++;
}
