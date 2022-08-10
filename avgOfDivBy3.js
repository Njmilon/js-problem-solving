// calculate the average of all the numbers that is divisible by 3 from 1 to n.

function avgDivBy3(n) {

    let count = 0 , sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            count++;
            sum = sum + i;
        }
    }
    let avg = sum / count;
    return avg;
}

console.log(avgDivBy3(10));