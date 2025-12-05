let users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Cường", age: 28 },
];
let doi = users.find((user) => user.name === "Bình");
console.log(doi);
let tuong = users.findIndex((user) => user.age === 28);
console.log(tuong);
