const readlineSync = require("readline-sync");
let length = 48;
let width = 24;
let diameter = 6;
let area = (length) * (width);
// area of a circle = 3.14r^2
// r = diameter /2
let areaSec = (9) * 3.141;
let surfArea = (area) - (areaSec);
surfArea = surfArea.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\n The surface area of a standard Cornhole is " + surfArea + " square inch(es).");
