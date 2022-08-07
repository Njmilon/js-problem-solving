// add all number from 1 to 10

    let sum = 0;

    for (let i = 0; i <= 10; i++) {
        sum = sum + i;
    }

    console.log('total sum of 1 to 10 : '+ sum);



    
// add all even and odd number from 1 to 10

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            sumEven = sumEven + i;
        }
        else{
            sumOdd = sumOdd + i;
        }
    }

    console.log('sum of even number = ', sumEven);
    console.log('sum of odd number = ', sumOdd);