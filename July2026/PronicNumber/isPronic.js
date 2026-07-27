//www.freecodecamp.org/learn/daily-coding-challenge/07-27
// Given a number, determine whether it is a pronic number.
// A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.

const isPronic = n => {
    for(let i = 0; i <= n; i++){
        if(i * (i+1) === n){
            return true;
        }
    }
    return false;
}

module.exports = isPronic;