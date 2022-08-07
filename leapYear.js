
// without function

    // const year = 2024;

    // if (year % 4 === 0 && year % 100 !== 0) {
    //     console.log('leap year');
    // } 

    // else if (year % 400 === 0){
    //     console.log('leap year');
    // }

    // else{
    //     console.log('Not leap year');
    // }

// with function

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return "leap year";
    } else if(year % 400 == 0) {
        return "leap year";
    }
    else{
        return "not a leap year";
    }
}

console.log(isLeapYear(2022)); 
console.log(isLeapYear(2018)); 
console.log(isLeapYear(2032)); 
console.log(isLeapYear(2020)); 
