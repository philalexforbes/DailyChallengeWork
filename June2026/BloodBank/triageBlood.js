//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-26
// Given an array of the inventory at a blood bank and an array of patient blood type requests, return a string in the format "X of Y patients served". 
// Where X is the maximum number of patients that can receive blood from the bank's inventory, and Y is the total number of patients.
// Each entry in both arrays is one of the following blood types: "AB", "A", "B", or "O".
// Compatibility rules:
//     "AB" can receive from any blood type.
//     "A" can receive from "A" and "O".
//     "B" can receive from "B" and "O".
//     "O" can only receive from "O".
// Duplicate entries in the given arrays represent quantity.

const triageBlood = (bank, patients) => {
    const bloodCompatibility = {
        A: ['A', 'O'],
        B: ['B', 'O'],
        AB: ['AB', 'A', 'B', 'O'],
        O: ['O']
    }
    const numOfPatients = patients.length;
    let numberServed = 0;

    patients = patients.sort((a,b) => a.localeCompare(b));
    bank = bank.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < patients.length; i++){
        let bloodTypes = bloodCompatibility[patients[i]];
        if(bank.length === 0){
            break;
        }

        for(let j = 0; j < bank.length; j++) {
            let blood = bank[j];
            let num = numberServed;
            for(let k = 0; k < bloodTypes.length; k++){
                if(bloodTypes[k] === blood){
                    numberServed = numberServed + 1;
                    let index = bank.indexOf(blood);
                    bank.splice(index, 1);
                    break;
                }
            }
            if(num !== numberServed) {
                break;
            }
        }
    }

    return `${numberServed} of ${numOfPatients} patients served`;
}

module.exports = triageBlood;