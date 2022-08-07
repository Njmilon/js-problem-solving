//without function

/*--------------------------------------------
const arrNum = [20, 39, 13, 345,53];

let totalValue = 0;
for (let i = 0; i < arrNum.length; i++) {
    const indexNumber = i;
    const element = arrNum[indexNumber];
    totalValue = totalValue + element;
    console.log(indexNumber, element, totalValue);
}
------------------------------------------------*/

    // console.log(indexNumber, element, totalValue);
    // here indexNumber and elemnt cannot accessible. and that's cause a refernce error
    
    // console.log(totalValue);
    //we can access totalValue



    
//with function
    function addArrNumber(numbers) {

        let sumValue = 0;
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            sumValue = sumValue + element;
            // console.log(i, element, sumValue);
        }
        return sumValue;
    }

    // const arrNum = [39,34,56, 64, 23];
    // const finalValue = addArrNumber(arrNum);
    // console.log(finalValue);




// get all odd element and using addArrNumber() calculate total addition value
    function findOddElementInArray(arrNumbers) {
        const oddArr = [];
        for (let i = 0; i < arrNumbers.length; i++) {
            const element = arrNumbers[i];
            if (element % 2 !== 0) {
                oddArr.push(element);
            }             
        }
        return oddArr;
    }

    const numbers = [29,49,23,44,33,22];
    const allOddArrays = findOddElementInArray(numbers);

    //using addArrNumber function to calculate addition of all the odd number.
    const totalValueOfOdd = addArrNumber(allOddArrays);
    console.log(totalValueOfOdd);