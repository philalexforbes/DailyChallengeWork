//https://www.freecodecamp.org/learn/daily-coding-challenge/08-15
// Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
//     The first and last letters of the words remain in place
//     All letters between the first and last letter are sorted alphabetically.
//     The input strings will contain no punctuation, and will be entirely lowercase.

const jbelmu = text => {
    text = text.split(' ');
    for(let i = 0; i < text.length; i++) {
        let temp = text[i].split('');
        if(temp.length > 1) {
            let sort = temp.slice(1, - 1);
            sort.sort((a,b) => a.localeCompare(b));
            for(let j = 1; j <= sort.length; j++){
                temp[j] = sort[j-1];
            }
            text[i] = temp.join('');
        }
    }
    return text.join(' ');
}

module.exports = jbelmu;