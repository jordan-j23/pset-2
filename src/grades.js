const readlineSync = require("readline-sync");
const hwWeight= 0.15;
const qzWeight= 0.35;
const tsWeight= 0.5;
console.log("\nEnter three homework grades.");
let hw1=readlineSync.question("");
let h1 = Number(hw1);
let hw2 = readlineSync.question("");
let h2 = Number(hw2);
let hw3 = readlineSync.question("");
let h3 = Number(hw3);
console.log("\nEnter three quiz grades.");
let qz1 = readlineSync.question("");
let q1 = Number(qz1);
let qz2 = readlineSync.question("");
let q2 = Number(qz2);
let qz3 = readlineSync.question("");
let q3= Number(qz3);
console.log("\nEnter three test grades.");
let ts1 = readlineSync.question("");
let t1 = Number(ts1)
let ts2 = readlineSync.question("");
let t2 = Number (ts2)
let ts3 = readlineSync.question("");
let t3 = Number(ts3);

let hwAVG = (h1 + h2 + h3)/3;
let qzAVG = (q1 + q2 + q3)/3;
let tsAVG = (t1 + t2 + t3)/3;

let hwFinal = hwAVG * hwWeight;
let qzFinal = qzAVG * qzWeight;
let tsFinal = tsAVG * tsWeight;
let finalGrade = hwFinal + qzFinal + tsFinal;
finalGrade=finalGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour marking period grade is " + finalGrade+ "%.");
