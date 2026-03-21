//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-21
// Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.
//     The QR code may be given in any rotation of 90 degree increments.
//     A correctly oriented code has a 2x2 group of 1's (orientation markers) in the bottom-left, top-left, and top-right corners.
//     The three 2x2 orientation markers are not part of the binary data.
//     The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
//     A code will always have exactly one valid orientation.
// For example, given:
// [
//   "110011",
//   "110011",
//   "000000",
//   "000000",
//   "110000",
//   "110001"
// ]
// or given the same code with a different orientation:
// [
//   "110011",
//   "110011",
//   "000000",
//   "000000",
//   "000011",
//   "100011"
// ]
// Return "000000000000000000000001", all the binary data excluding the three 2x2 orientation markers.

const decodeQr = (qrCode) => {
    let flattenedQr = qrCode.join('');
    //working on checking the three corners in the ac check and rotate as necessary.
    //first check if the qr code is at 0 degrees
    if((qrCode[0].substring(0,2) &&  qrCode[1].substring(0,2) === '11') 
        && (qrCode[0].substring(4,6) && qrCode[1].substring(4,6) === '11') 
        && (qrCode[4].substring(0,2) && qrCode[5].substring(0,2) === '11')) 
    {
        console.log('No rotation needed');
        return qrCode[0].substring(2,4) + qrCode[1].substring(2,4) + qrCode[2] + qrCode[3] + qrCode[4].substring(2,6) + qrCode[5].substring(2,6);
    }
    //rotated 90 degrees
    else if((qrCode[0].substring(0,2) &&  qrCode[1].substring(0,2) === '11') 
        && (qrCode[0].substring(4,6) && qrCode[1].substring(4,6) !== '11') 
        && (qrCode[4].substring(0,2) && qrCode[5].substring(0,2) === '11')) 
    {
        console.log('Rotated 90');
        let newArr = [];
        newArr.push(`${flattenedQr[30]}${flattenedQr[24]}${flattenedQr[18]}${flattenedQr[12]}${flattenedQr[6]}${flattenedQr[0]}`);
        newArr.push(`${flattenedQr[31]}${flattenedQr[25]}${flattenedQr[19]}${flattenedQr[13]}${flattenedQr[7]}${flattenedQr[1]}`);
        newArr.push(`${flattenedQr[32]}${flattenedQr[26]}${flattenedQr[20]}${flattenedQr[14]}${flattenedQr[8]}${flattenedQr[2]}`);
        newArr.push(`${flattenedQr[33]}${flattenedQr[27]}${flattenedQr[21]}${flattenedQr[15]}${flattenedQr[9]}${flattenedQr[3]}`);
        newArr.push(`${flattenedQr[34]}${flattenedQr[28]}${flattenedQr[22]}${flattenedQr[16]}${flattenedQr[10]}${flattenedQr[4]}`);
        newArr.push(`${flattenedQr[35]}${flattenedQr[29]}${flattenedQr[23]}${flattenedQr[17]}${flattenedQr[11]}${flattenedQr[5]}`);
        return newArr[0].substring(2,4) + newArr[1].substring(2,4) + newArr[2] + newArr[3] + newArr[4].substring(2,6) + newArr[5].substring(2,6);
    }
    //rotated 180 degrees
    else if((qrCode[0].substring(0,2) &&  qrCode[1].substring(0,2) !== '11') 
        && (qrCode[0].substring(4,6) && qrCode[1].substring(4,6) === '11') 
        && (qrCode[4].substring(0,2) && qrCode[5].substring(0,2) === '11')) 
    {
        console.log('Rotated 180');
        let newArr = [];
        for(let i = qrCode.length -1 ; i >= 0; i--){
            let tempStr = '';
            for(let j = qrCode[i].length - 1; j >= 0; j--) {
                tempStr = tempStr + qrCode[i][j];
                
            }
            newArr.push(tempStr);
        }
        return newArr[0].substring(2,4) + newArr[1].substring(2,4) + newArr[2] + newArr[3] + newArr[4].substring(2,6) + newArr[5].substring(2,6);
    }
    //rotated 270 degrees
    else {
        console.log('Rotated 270');
        let newArr = [];
        newArr.push(`${flattenedQr[5]}${flattenedQr[11]}${flattenedQr[17]}${flattenedQr[23]}${flattenedQr[29]}${flattenedQr[35]}`);
        console.log(`${flattenedQr[5]}${flattenedQr[11]}${flattenedQr[17]}${flattenedQr[23]}${flattenedQr[29]}${flattenedQr[35]}`)
        newArr.push(`${flattenedQr[4]}${flattenedQr[10]}${flattenedQr[16]}${flattenedQr[22]}${flattenedQr[28]}${flattenedQr[34]}`);
        newArr.push(`${flattenedQr[3]}${flattenedQr[9]}${flattenedQr[15]}${flattenedQr[21]}${flattenedQr[27]}${flattenedQr[33]}`);
        newArr.push(`${flattenedQr[2]}${flattenedQr[8]}${flattenedQr[14]}${flattenedQr[20]}${flattenedQr[26]}${flattenedQr[32]}`);
        newArr.push(`${flattenedQr[1]}${flattenedQr[7]}${flattenedQr[13]}${flattenedQr[19]}${flattenedQr[25]}${flattenedQr[31]}`);
        newArr.push(`${flattenedQr[0]}${flattenedQr[6]}${flattenedQr[12]}${flattenedQr[18]}${flattenedQr[24]}${flattenedQr[30]}`);
        return newArr[0].substring(2,4) + newArr[1].substring(2,4) + newArr[2] + newArr[3] + newArr[4].substring(2,6) + newArr[5].substring(2,6);
    }
}

module.exports = decodeQr;