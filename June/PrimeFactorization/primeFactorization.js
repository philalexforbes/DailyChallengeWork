//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-20
// Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

// A prime factorization is the set of prime numbers that multiply together to produce the given integer. Each number has exactly one set. 
// For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

// If the given integer is itself prime, return it in a single-element array.

const primeFactorization = (n) => {
    const primeNumbers = [];
    let i = 2;
    let primesNotFound = true;
    while(primesNotFound) {
        if(isPrime(n)) {
            primeNumbers.push(n);
            primesNotFound = false;
        }
        if(n % i === 0) {
            n = n / i;
            if(isPrime(i)) {
                primeNumbers.push(i);
            }
        }
        else {
            i = i + 1;
        }
    }
    return primeNumbers;
}

const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

module.exports = primeFactorization;