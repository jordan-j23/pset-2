const readlineSync = require("readline-sync");
const HOURLY_WAGE = 12.5;
let hourlyWage = readlineSync.question("\nHourly wage: ");
let mon = readlineSync.question("\n Monday: ");
let tue = readlineSync.question("Tuesday: ");
let wed = readlineSync.question("Wednesday: ");
let thu = readlineSync.question("Thursday: ");
let fri = readlineSync.question("Friday: ");
let sat = readlineSync.question("Saturday: ");
let sun = readlineSync.question("Sunday: ");
let mon1 = mon * HOURLY_WAGE;
let tue1 = tue * HOURLY_WAGE;
let wed1 = wed * HOURLY_WAGE;
let thu1 = thu * HOURLY_WAGE;
let fri1 = fri * HOURLY_WAGE;
let sat1 = sat * HOURLY_WAGE;
let sun1 = sun * HOURLY_WAGE;
let total= mon1 + tue1 + wed1 + thu1 + fri1 + sat1 + sun1;
total = total.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYou'll make $" + total + " this week.");
