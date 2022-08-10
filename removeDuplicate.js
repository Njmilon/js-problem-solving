// remove duplicate value in an array

function removeDuplicate(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (uniqueArr.includes(element) !== true) {
            uniqueArr.push(element);
        }
    }
    return uniqueArr;
}

const arr = [19, 29, 19, 20, 40, 30, 20];

console.log(removeDuplicate(arr));