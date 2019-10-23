readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthIN = width * width;
let lengthIN = length * length;
let diagonalIN =;
diagonalIN=diagonalIN.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonalIN + " inch(es).")
