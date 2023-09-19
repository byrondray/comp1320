const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const makeCalendar = require("./lab-two").makeCalendar;
const readline = require("readline-sync");

const year = readline.question("Enter a year: ");
const monthUpperCase = readline.question("Enter a month: ");
const day = readline.question("Enter a date: ");

function monthToLowerCase() {
    return (
        monthUpperCase.toLowerCase()
    );
}

const month = monthToLowerCase(monthUpperCase);


console.log(getDayOfTheWeek(year, month, day));

// makeCalendar();