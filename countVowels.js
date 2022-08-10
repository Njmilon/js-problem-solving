// count the number of vowels in a string.

function countVowels(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count++;
        }
    }
    return count;
}

const str = "i love u jaantuuuu";
console.log(countVowels(str));