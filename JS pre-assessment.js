// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// Updated function to use es6 syntax and updated the time complexity from O(n) to O(sqrt(n))
// The name of the function was updated by one which better describes what the function does
const isPrimeNumber = (num) => {
    const sqrtNumber = Math.sqrt(num);
    for (let i = 2; i < sqrtNumber; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

let calculations = 0;
const cached = {};

// Modified function time complexity from O(2^n) to O(n) and space complexity from O(1) to O(n) by caching the previously calculated values
// sacrifice space complexity because in very large numbers the code can take a long time to find a prime fibonaci number
const fibonacci = (num) => {
    if (num in cached) {
        return cached[num];
    } else {
        calculations++;
        if (num <= 1) return num;
        cached[num] = fibonacci(num - 1) + fibonacci(num - 2);
        return cached[num];
    }
};

// The name of the function was updated by one which better describes what the function does
const nextPrimeFibNumber = (number) => {
    // Renamed variables to better describe what they are
    let nextFibPrimeNumber = 0;
    let positionCounter = 1;

    // Added this new variable so while loop is more clear on when should be stopped
    // Reading "while number is not found" is more clear than while(true)
    let isNumberFound = false;

    while (!isNumberFound) {
        const fibNumber = fibonacci(positionCounter);
        console.log('fib', fibNumber, number, positionCounter);

        // Simplified if/else statement to remove duplicated/nested if/else code
        if (fibNumber > number && isPrimeNumber(fibNumber)) {
            nextFibPrimeNumber = fibNumber;
            isNumberFound = true;
        } else {
            positionCounter++;
            console.warn('bumping to', fibNumber);
        }
    }
    console.warn('Next prime fib ', nextFibPrimeNumber);
}

nextPrimeFibNumber(20);
