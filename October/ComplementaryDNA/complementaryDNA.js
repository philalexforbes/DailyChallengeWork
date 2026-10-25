//https://www.freecodecamp.org/learn/daily-coding-challenge/10-25
// Given a string representing a DNA sequence, return its complementary strand using the following rules:
//     DNA consists of the letters "A", "C", "G", and "T".
//     The letters "A" and "T" complement each other.
//     The letters "C" and "G" complement each other.
// For example, given "ACGT", return "TGCA".

const complementaryDNA = strand => {
    const complementary = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    let complemtaryStrand = '';

    for(let i = 0; i < strand.length; i++) {
        complemtaryStrand = complemtaryStrand + complementary[strand[i]];
    }
    return complemtaryStrand;

}

module.exports = complementaryDNA;