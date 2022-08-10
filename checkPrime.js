// is a number is only divisible by 1 and itself then its called a prime number.
  
function checkPrime(number) {
    count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            count ++;
            break;
        }
    }

    if (count === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPrime(19));