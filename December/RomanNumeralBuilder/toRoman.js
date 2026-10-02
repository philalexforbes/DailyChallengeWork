//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-11
// Given an integer, return its equivalent value in Roman numerals.
// Roman numerals use these symbols:
// Symbol 	Value
// I 	1
// V 	5
// X 	10
// L 	50
// C 	100
// D 	500
// M 	1000
// Roman numerals are written from largest to smallest, left to right using the following rules:
//     Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
//     Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
//     No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
// Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

function toRoman(num) {
  let stringNum = String(num);
  let numerals = '';
  if(stringNum.length === 1){
    numerals = convertOnesToRoman(num);
  } 
  else if (stringNum.length === 2) {
    let tensArray = convertTensToRoman(num);
    numerals += tensArray[0];
    numerals += convertOnesToRoman(tensArray[1]);
  }
  else if(stringNum.length === 3) {
    let hundredsArray = convertHundredsToRoman(num);
    numerals += hundredsArray[0];
    let remainder = hundredsArray[1];
    let stringRemainder = String(remainder);
    if (stringRemainder.length === 2){
        let tensArray = convertTensToRoman(remainder);
        numerals += tensArray[0];
        numerals += convertOnesToRoman(tensArray[1]);
    } 
    else {
        numerals += convertOnesToRoman(hundredsArray[1]);
    }
  } 
  else if(stringNum.length === 4){
    let thousandsArray = convertThousandsToRoman(num);
    numerals += thousandsArray[0];
    let remainder = thousandsArray[1];
    let stringRemainder = String(remainder);
    if (stringRemainder.length === 3){
        let hundredsArray = convertHundredsToRoman(remainder);
        numerals += hundredsArray[0];
        remainder = hundredsArray[1];
        stringRemainder = String(remainder);
        if (stringRemainder.length === 2){
            let tensArray = convertTensToRoman(remainder);
            numerals += tensArray[0];
            numerals += convertOnesToRoman(tensArray[1]);
        } 
        else {
            numerals += convertOnesToRoman(hundredsArray[1]);
        }
    } 
    else if(stringRemainder.length === 2){
        let tensArray = convertTensToRoman(remainder);
        numerals += tensArray[0];
        numerals += convertOnesToRoman(tensArray[1]);
    } 
    else {
        numerals += convertOnesToRoman(remainder);
    }
  }
  return numerals;
}

function convertOnesToRoman(num) {
    let numerals = '';
    if(num === 9) {
      numerals = 'IX';
    } else if (num === 4) {
      numerals = 'IV';
    } else if(num >= 5 && num <= 8) {
      let ones = num - 5;
      numerals += 'V';
      for (let i = 1; i<=ones; i++){
        numerals += 'I';
      }
    } else if(num <= 3 && num >= 1){
      for (let i = 1; i<= num; i++){
        numerals += 'I';
      }
    }
    return numerals;
}

function convertTensToRoman(num) {
    let numerals = '';
    let tens = num / 10;
    tens = Math.floor(tens);
    let remainder = num % 10;
    if (tens === 9) {
        numerals = 'XC';
    } else if(tens <= 8 && tens >= 5){
        numerals += 'L';
        tens = tens - 5;
        for (let i = 1; i <= tens; i++) {
            numerals += 'X';
        }
    } else if(tens === 4){
        numerals = 'XL';
    } else {
        for (let i =1; i <= tens; i++) {
            numerals += 'X';
        }
    }
    return [numerals, remainder];
}

function convertHundredsToRoman(num) {
    let numerals = '';
    let hundreds = num /100;
    hundreds = Math.floor(hundreds);
    let remainder = num % 100;
    if (hundreds === 9) {
        numerals = 'CM';
    }
    else if (hundreds <= 8 && hundreds >= 5){
        numerals += 'D';
        hundreds = hundreds - 5;
        for (let i =1; i <= hundreds; i++) {
            numerals += 'C';
        }
    }
    else if(hundreds === 4){
        numerals = 'CD';
    }
    else {
        for (let i = 1; i <= hundreds; i++) {
            numerals += 'C';
        }
    }
    return [numerals, remainder];
}

function convertThousandsToRoman(num){
    let numerals = '';
    let thousands = num / 1000;
    thousands = Math.floor(thousands);
    let remainder = num % 1000;
    if (thousands === 9){
        numerals = 'MX'
    } else if(thousands <= 8 && thousands >= 5){
        numerals += 'V';
        thousands = thousands - 5;
        for (let i =1; i<= thousands; i++) {
            numerals += 'M';
        }
    } else if(thousands === 4) {
        numerals = 'MV';
    } else {
        for (let i = 1; i <= thousands; i++) {
            numerals += 'M';
        }
    }
    return [numerals, remainder];
}

module.exports = toRoman;