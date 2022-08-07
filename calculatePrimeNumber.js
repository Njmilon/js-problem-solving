
// jakhon kono number 1 r oy number sara onno kono number diye vag jae na takhon take prime number bole.
// 2 theke suru kore ter ager number porjonto chalate hoe


function isPrime(number) {
    let count = 0;
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            count++;
        }
    }

    if (count === 0) {
        console.log('prime number');
    } 
    
    else {
        console.log('not a prime number');
    }
}

isPrime(59);