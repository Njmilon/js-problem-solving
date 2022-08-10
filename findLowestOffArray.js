function lowestOffArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
console.log(lowestOffArray([10, 320, 1, 39]));