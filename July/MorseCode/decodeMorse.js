//https://www.freecodecamp.org/learn/daily-coding-challenge/07-31
// Given a Morse code string, return the decoded message using the following table:
// Code 	Letter 	Code 	Letter
// .- 	A 	-. 	N
// -... 	B 	--- 	O
// -.-. 	C 	.--. 	P
// -.. 	D 	--.- 	Q
// . 	E 	.-. 	R
// ..-. 	F 	... 	S
// --. 	G 	- 	T
// .... 	H 	..- 	U
// .. 	I 	...- 	V
// .--- 	J 	.-- 	W
// -.- 	K 	-..- 	X
// .-.. 	L 	-.-- 	Y
// -- 	M 	--.. 	Z

//     Letters are separated by a single space
//     Words are separated by three spaces

const decodeMorse = (code) => {
    const morseCode = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '': ' '
    }

    const decodedText = [];

    code = code.split(' ');

    for(let c in code) {
        decodedText.push(morseCode[code[c]]);
    }
    return decodedText.join('').replaceAll(/\s{2}/gm,' ');
}

module.exports = decodeMorse;