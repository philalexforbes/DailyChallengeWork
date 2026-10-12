//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-25
// Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.
// Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:
// ---
// title: My Post
// draft: false
// views: 100
// ---
// Should return:
// {
//   title: "My Post",
//   draft: false,
//   views: 100
// }
//     Numbers, Booleans, and Strings should all be returned as their respective type.
//     The given string will have new lines separated with the newline character ("\n"). 
//     The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".

const parseFrontmatter = (str) => {
    str = str.replaceAll('-', '').trim().split('\n');
    const frontMatter = new Object();
    for(let i = 0; i < str.length; i++){
        let tempStr = str[i].split(': ');
        let value;
        if(!isNaN(Number(tempStr[1]))) {
            value = Number(tempStr[1]);
        }
        else if(tempStr[1] === 'true' || tempStr[1] === 'false') {
            value = (tempStr[1] === 'true');
        }
        else {
            value = tempStr[1];
        }
        frontMatter[tempStr[0]] = value;
    }

    return frontMatter;
}

module.exports = parseFrontmatter;