//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-03
// Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.
// Valid commands are:
//     "URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
//     "Back" - moves to the previous page in history, or stays on the current page if there isn't one.
//     "Forward" - moves to the next page in history, or stays on the current page if there isn't one.
// For example, given ["freecodecamp.org", "freecodecamp.org/learn", "Back"], return [["freecodecamp.org", "freecodecamp.org/learn"], 0].

const getBrowserHistory = (commands) => {
    let urlHistory = [];
    let browserHistory = [];
    let navigationCount = 0;
    for (let i = 0; i < commands.length; i++) {
        if(i === 0){
            //we don't add to the count here but we do add to the array
            urlHistory.push(commands[i])
        }
        else if(commands[i] === 'Forward' && (i+1) !== commands.length){
            //forward has no url so we don't add it to the array
            navigationCount += 1;
        }
        else if(commands[i] === 'Forward' && commands[i-1] === 'Back' && commands[i-2] === 'Back'){
            navigationCount += 1;
            urlHistory.push(commands[i-3]);
        }
        else if(commands[i] === 'Forward' && i+1 === commands.length){
            //do nothing here because there is no further navigation
        }
        else if(commands[i] !== 'Back'){
            //
            navigationCount += 1;
            urlHistory.push(commands[i]);
        }
        else if(commands[i] === 'Back' && (i+1) === commands.length){
          
          navigationCount -= 1;
        }
        else if(commands[i] === 'Back' && commands[i+1] !== 'Back'){
          urlHistory.pop();
          navigationCount -= 1;
        }
        else if(commands[i] === 'Back' && commands[i-1] !== 'Back')
        {
          //urlHistory.pop();
            //we don't add to the browser history here but we do subtract from the count
            navigationCount -= 1;
        }

    }
    //here we want to add the count to the end of the browserHistory
    navigationCount = navigationCount < 0 ? 0 : navigationCount;
    browserHistory.push(urlHistory, navigationCount);
    return browserHistory;
}

module.exports = getBrowserHistory;