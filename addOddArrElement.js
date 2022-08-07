function addArrNumber(numbers) {

    let evenValue = 0;
    let oddValue = 0;
    let sumValue = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        //all arry element addition value
        sumValue = sumValue + element;

        //all even element addition value
        if (element % 2 == 0) {
            evenValue = evenValue + element;
        }

        //all odd element addition value
        else{
            oddValue = oddValue + element;
        }
    }
    console.log('total sum value:' , sumValue);
    console.log('total even sum value:' , evenValue);
    console.log('total odd sum value:' , oddValue);
}

const arrNum = [39,34,56, 64, 23];
addArrNumber(arrNum);
