//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-29
// Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.
//     The query string begins after the "?",
//     each parameter is separated by "&",
//     each key/value pair is separated by "="
// For example, given "https://example.com/search?name=Alice&age=30", return:
// {
//   "name": "Alice",
//   "age": "30"
// }
// All values should be returned as strings.

const parseUrlQuery = (url) => {
    const regex = /(?<=\?)[\S+]+/gm;
    let queryParams = url.match(regex)[0];
    queryParams = queryParams.split('&');
    let body = new Object();
    for(let i = 0; i < queryParams.length; i++) {
        let queryParam = queryParams[i].split('=');
        body[queryParam[0]] = queryParam[1];
    }
    return body;
}

module.exports = parseUrlQuery;