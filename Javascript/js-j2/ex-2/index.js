let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

for (i=0 ; i<animals_even.length ; i++) {
    if (i%2 === 0) {
        console.log(animals_even[i])
    }
}

for (i=0 ; i<animals_odd.length ; i++) {
    if (i%2 !== 0) {
        console.log(animals_odd[i])
    }
}