//https://www.freecodecamp.org/learn/daily-coding-challenge/10-30
// A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. 
// The first five prime numbers are 2, 3, 5, 7, and 11.

// Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

const nthPrime = n => {
    const isPrime = (num) => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }
    let primeNumber = 0;
    let numberOfPrimes = 0;
    let start = 2;

    while(numberOfPrimes !== n) {
        if(isPrime(start)){
            numberOfPrimes = numberOfPrimes + 1;
            if(numberOfPrimes === n){
                primeNumber = start;
                break;
            }
        }
        start = start + 1;
    }
    return primeNumber;
}

module.exports = nthPrime;