"use strict";
// ========================
// LES VARIABLES
// ========================
let num = 24;
let num2;
let numerOrString;
num = 14;
numerOrString = 3;
numerOrString = "5";
// ========================
// LES TABLEAUX
// ========================
let array = ["chien", "chat", "poisson"];
let tableau = [];
let tableau1 = []; // permet d'ajouter les nombre et du texte
// let tableau2?;
array[1] = "cheval";
array[0] = "serpent";
tableau.push(1);
tableau1.push("paul");
let zidane = {
    id: 0,
    name: "zidane",
    jersey: 10,
};
let drogba = {
    id: 0,
    name: "Drogba",
};
// console.log(drogba);
// ========================
// LES CLASSES
// ========================
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, "Prince");
// console.log(prince);
const goli = new Singer(0, "Goli", true);
// console.log(goli);
const chanteur = new Singer(0, "1234", true);
// console.log(chanteur);
// ========================
// LES FONCTIONS
// ========================
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
sayMyName("goli");
sayMyName();
// const ageDuCapitaine = (age: number | string, size?: number) => {
//   if (size) {
//     console.log(
//       `La taile du capitaine est de : ${size} et il est agé de : ${age} ans`
//     );
//   } else {
//     console.log(`Le capitaine est agé de: ${age}`);
//   }
//   return "ok";
// };
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taile du capitaine est de : ${size} et il est agé de : ${age} ans`);
    }
    else {
        console.log(`Le capitaine est agé de: ${age}`);
    }
    return "ok";
};
ageDuCapitaine(12, 123);
ageDuCapitaine(12);
// ========================
// LES ENUM & TUPLE
// ========================
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PRENUM"] = 1] = "PRENUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "Jean",
    attributes: [1, "author"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("Connextion spéciale!!!");
}
console.log(user1);
