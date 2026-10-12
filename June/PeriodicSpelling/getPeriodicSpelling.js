//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-27
// Given a word, determine if it can be spelled using element symbols from the periodic table.
//     Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".
// Here's a full list of the element symbols:

// ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];

// Return an array of the elements used to spell the word, in their original casing and in the order to spell the word. 
// Or, an empty array if it can't be spelled.

const getPeriodicSpelling = word => {
    const periodicSymbols = ["H","He","Li","Be","B","C","N","O","F",
                            "Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti",
                            "V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br",
                            "Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd",
                            "In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm",
                            "Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W",
                            "Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr",
                            "Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
                            "Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh",
                            "Fl","Mc","Lv","Ts","Og"];
    
    const spelling = [];

    for(let i = 0; i < word.length; i++){
        let char = `${word[i].toUpperCase()}${word[i+1]}`;
        if(periodicSymbols.includes(char)) {
            let index = periodicSymbols.indexOf(char);
            spelling.push(periodicSymbols[index]);
            periodicSymbols.splice(index,1);
            
            i = i + 1;
        }
        else if(periodicSymbols.includes(word[i].toUpperCase())){
            let index = periodicSymbols.indexOf(word[i].toUpperCase());
            spelling.push(periodicSymbols[index]);
        }
        else{
            let missingCharacters = '';
            let last = spelling.pop();
            if(periodicSymbols.includes(last[0])){
                let index = periodicSymbols.indexOf(last[0]);
                spelling.push(periodicSymbols[index]);
            }
            let currentSpelling = spelling.join('').toLocaleLowerCase();
            for(let j = 0; j < word.length; j++){
                if(currentSpelling[j] === undefined){
                    missingCharacters = missingCharacters + word[j];
                }
            }
            if(missingCharacters.length === 2){
                let poss = missingCharacters[0].toUpperCase() + missingCharacters[1];
                if(periodicSymbols.includes(poss)){
                    let index = periodicSymbols.indexOf(poss);
                    spelling.push(periodicSymbols[index]);
                }
            }
        }
    }

    if(spelling.join('').toLowerCase() === word){
        return spelling;
    }
    else{
        return [];
    }
    
}

module.exports = getPeriodicSpelling;