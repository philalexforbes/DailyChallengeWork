//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-04
//Given a string, return it as-is if it's 20 characters or shorter. 
// If it's longer than 20 characters, truncate it to the first 17 characters and append "..."
//  to the end of it (so it's 20 characters total) and return the result.

function truncateText(text) {
    let textLength = text.length;
    if(textLength > 20){
        let newText = '';
        for(let i = 0; i < 17; i++){
            newText += text[i];
        }
        text = newText;
        text += '...';
    }
    return text;
}

module.exports = truncateText;