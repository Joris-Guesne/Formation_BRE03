let relationships = [
  {
    name: "Sarah",
    friends: ["John", "Sophie"],
  },
  {
    name: "John",
    friends: ["Sophie", "Simon"],
  },
  {
    name: "Simon",
    friends: ["John", "Sophie", "Sarah"],
  },
  {
    name: "Sophie",
    friends: ["John", "Sarah"],
  },
];

for (let i = 0; i < relationships.length; i++) {
  console.log(`${relationships[i].name}`);
  if (Array.isArray(relationships[i].friends)) {
    for (let j = 0; j < relationships[i].friends.length; j++) {
      console.log(`- ${relationships[i].friends[j]}`);
    }
  }
}
