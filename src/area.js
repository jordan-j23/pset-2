const readlineSync = require("readline-sync");

const MILLIMETERS_PER_INCH = 25.4;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthMM = width * MILLIMETERS_PER_INCH;
let lengthMM= length * MILLIMETERS_PER_INCH;
let areaMM= widthMM * lengthMM;
areaMM = areaMM.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMM + " square millimeter(s).");
