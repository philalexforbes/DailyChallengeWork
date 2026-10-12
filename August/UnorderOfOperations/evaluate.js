//https://www.freecodecamp.org/learn/daily-coding-challenge/08-27
// Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.
// For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.
//     Valid operators are +, -, *, /, and %.

const evaluate = (numbers, operators) => {
    let value = 0;
    let stop = 1;
    let evalArray = [];
    while(stop < numbers.length){
        for(let j = 0; j < operators.length; j++){
            if(stop < numbers.length){
                numbers.splice(stop, 0, operators[j]);
                stop = stop + 2;
            }         
        }
    }
    for(let i = 0; i < numbers.length; i++){
        evalArray.push(numbers[i]);
        if(evalArray.length === 3) {
            let str = evalArray.join('');
            let num = eval(str);
            value = num;
            evalArray = new Array;
            evalArray.push(num);
        }
    }
    return (value);
}

module.exports = evaluate;