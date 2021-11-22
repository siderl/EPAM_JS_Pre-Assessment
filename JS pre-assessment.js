// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// Updated function to use es6 syntax and updated the time complexity from O(n) to O(sqrt(n))
// The name of the function was updated by one which better describes what the function does
// IMPROVEMENT 1. Now the function validates at the beginning the scenarios where the number is less or equal to 1, equal to 2 or equal to 3. 
// This help us to avoid unnecessary operations. 
// IMPROVEMENT 2. '<' Operator changed to '<=' in the comparison. Previously the function was not evaluating all the primality test,
// in some cases, not all the composites numbers were evaluated correctly. The solution was working as 'nextPrimeFibNumber' only passes fibonacci numbers 
// that fit only in scenarios where the number was prime or composite with non integer sqrt. For example, if we pass the number 25 as input, 
// the function is going to evaluate:
// 5 % 2  === 0   -->  NOT
// 5 % 3  === 0   -->  NOT
// 5 % 4  === 0   -->  NOT
// and then will return true, 25 IS NOT a prime number, so that was wrong. The new improvement will evaluate also:
// 5 % 5  === 0   -->  YES
// So now the function will return false, 25 is not a prime number, so now it will be correct.
const isPrimeNumber = (num) => {

    if (num <= 1)  return false;
    if (num <= 3)  return true;

    const sqrtNumber = Math.sqrt(num);
    for (let i = 2; i <= sqrtNumber; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const cached = {};

// Modified function time complexity from O(2^n) to O(n) and space complexity from O(1) to O(n) by caching the previously calculated values
// sacrifice space complexity because in very large numbers the code can take a long time to find a prime fibonaci number
// IMPROVEMENT 3. "calculations" variable deleted as it is not in use.
const fibonacci = (num) => {
    if (num in cached) {
        return cached[num];
    } else {
        if (num <= 1) return num;
        cached[num] = fibonacci(num - 1) + fibonacci(num - 2);
        return cached[num];
    }
};

// The name of the function was updated by one which better describes what the function does
// IMPROVEMENT 3. Console logs and console warns were deleted. 'console.warn' must be use for print warnings, not results. A function should not 
// send user outputs, it makes the algorithm slower.
// IMPROVEMENT 4. The function now returns directly the result when it finds it. The objective of our function is to obtain and return the next prime fibonacci number,
// not print it. 
// IMPROVEMENT 5. As we now return the result directly when we find it, we don't need the 'nextFibPrimeNumber' and 'isNumberFound' variables anymore. The while is going
// to break when the function return the result. 
const nextPrimeFibNumber = (number) => {
    // Renamed variables to better describe what they are
    let positionCounter = 1;

    while (true) {
        const fibNumber = fibonacci(positionCounter);

        // Simplified if/else statement to remove duplicated/nested if/else code
        if (fibNumber > number && isPrimeNumber(fibNumber)) {
            return fibNumber;
        } else {
            positionCounter++;
        }
    }
}

console.log(nextPrimeFibNumber(20));
