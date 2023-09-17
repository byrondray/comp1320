const monthCode = {
   january: 1,
   february: 4,
   march: 4,
   april: 0,
   may: 2,
   june: 5,
   july: 0,
   august: 3,
   september: 6,
   october: 1,
   november: 4,
   december: 6,
}

const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


function lastTwoDigitsFnc (year) {
    return (
        parseInt(year % 100)
    );
}

function lastTwoDigitsDividedBy12Fnc (lastTwoDigits) {
    return (
        Math.floor(lastTwoDigits / 12)
    );
}

function yearRemainderFnc (lastTwoDigits) {
    return (
        lastTwoDigits % 12
    );
}

function divideYearRemainder (yearRemainder) {
    return (
        Math.floor(yearRemainder / 4)
    )
}

function firstTwoDigitsOfYearFnc (year) {
    return (
        Math.floor(year / 100)
        );
    }

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true; 
    } else {
        return false; 
    }
}
    
function getDayOfTheWeek (year, month, day) {
    const lastTwoDigits = lastTwoDigitsFnc(year); // Gets the last 2 digits
    const lastTwoDigitsDividedBy12 = lastTwoDigitsDividedBy12Fnc(lastTwoDigits); // Divides by 12 and rounds down
    const yearRemainder = yearRemainderFnc(lastTwoDigits); // Remainder of divide by 12
    const yearRemainderDividedBy4 = divideYearRemainder(yearRemainder); // How many 4s fit into the remainder

    const addDayOfMonth = parseInt(day); 
    let monthCodeCounter = monthCode[month]; // Add the month code & use as counter


    const firstTwoDigitsOfYear = firstTwoDigitsOfYearFnc(year); // First 2 digits of the year

    switch (firstTwoDigitsOfYear) { // Add depending on century
        case 16:
            monthCodeCounter += 5;
            break;
        case 17:
            monthCodeCounter += 4;
            break;
        case 18: 
            monthCodeCounter += 2;
            break;
        case 20:
            monthCodeCounter += 6;
            break;
        case 21:
            monthCodeCounter += 4; 
            break;
    }

    const leapYearResult = isLeapYear(year); // leapyear true or false

            
    
    if ((leapYearResult == true) && (month == "january" || month == "february")) {
        monthCodeCounter -= 1; 
    } 



    function calculateDay() { // Calculate the day
        return ( 
            (lastTwoDigitsDividedBy12 + 
            yearRemainder + 
            yearRemainderDividedBy4 + 
            addDayOfMonth + 
            monthCodeCounter) % 7
        );
    }

    const result = calculateDay();

    return (daysOfWeek[result]); // access array
    
}

const daysInMonth = [
    { month: 'january', days: 31, number: 1 },
    { month: 'february', days: 28, number: 2 },
    { month: 'march', days: 31, number: 3 },
    { month: 'april', days: 30, number: 4 },
    { month: 'may', days: 31, number: 5 },
    { month: 'june', days: 30, number: 6 },
    { month: 'july', days: 31, number: 7 },
    { month: 'august', days: 31, number: 8 },
    { month: 'september', days: 30, number: 9 },
    { month: 'october', days: 31, number: 10 },
    { month: 'november', days: 30, number: 11 },
    { month: 'december', days: 31, number: 12 },
];


function printMonthDetails(monthInfo, year) {
    for (let day = 1; day <= monthInfo.days; day++) {
        const date = getDayOfTheWeek(year, monthInfo.month, day);
        console.log(`${monthInfo.number}-${day}-${year} is a ${date}.`);
    }
}

function calendar(year) {
    for (let monthInfo of daysInMonth) {
        printMonthDetails(monthInfo, year);
    };
}

function makeCalendar() { 
    console.log(calendar(2023));  
}

module.exports = { getDayOfTheWeek, makeCalendar };