// Example 1: If Sam lends $5000 to his friend and received $6000 after a year. Using the interest rate formula, find at what interest rate did Sam lends the amount to his friend? 

// formula is: interest rate = (simple interest * 100) / (principle amount * time)

// simple interest = (total amount - principle amount)

function calculateInterest(totalAmount, principleAmount, time) {
    const simpleInterest = totalAmount - principleAmount;
    const interestRate = (simpleInterest * 100) / (principleAmount * time);
    return interestRate;
}

const totalMoney = 6000;
const principleMoney = 5000;
const year = 1;

console.log(calculateInterest(totalMoney, principleMoney, year));