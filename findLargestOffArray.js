function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        } 
    }
    return largest;
}

const numArray = [10, 20, 43, 54, 2];
console.log(findLargest(numArray));