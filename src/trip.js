const readlineSync = require("readline-sync");
let students = readlineSync.question("\nStudents: ");
let teachers = readlineSync.question("Teachers: ");
let passengers = parseFloat(students) + parseFloat(teachers);
let cap= readlineSync.question("Bus capacity: ");
let remaining= parseFloat(passengers) % parseFloat(cap);
cap = Math.round(parseFloat(passengers)/parseFloat(cap));
cap = cap.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\n" + parseFloat(cap) + " bus(es) is (are) needed, with " + parseFloat(remaining) + " passenger(s) on the last bus.");
