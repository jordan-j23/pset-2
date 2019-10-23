const readlineSync = require("readline-sync");

const CENTIMETERS_PER_INCH= 2.54

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthCM= width * CENTIMETERS_PER_INCH;
let lengthCM= length * CENTIMETERS_PER_INCH;
let perimeterCM= widthCM + lengthCM + widthCM + lengthCM;
perimeterCM=perimeterCM.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeterCM + " centimeter(s).");
