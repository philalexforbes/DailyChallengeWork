//https://www.freecodecamp.org/learn/daily-coding-challenge/10-28
// On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

// Given an array of browser commands you executed on Netscape Navigator, 
// return the current page you are on after executing all the commands using the following rules:

//     You always start on the "Home" page, which will not be included in the commands array.
//     Valid commands are:
//         "Visit Page": Where "Page" is the name of the page you are visiting. For example, 
//         "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
//         "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
//         "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.

// For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

const navigate = commands => {
    let sites = ['Home'];
    let position = 0;

    for(let i = 0; i < commands.length; i++){
        if(commands[i].includes('Visit')) {
            let site = commands[i].replace('Visit ', '');
            sites.push(site);
            position = position + 1;
        }
        else if(commands[i] === 'Back'){
            position = position - 1 !== -1 ? position - 1 : 0;
        }
        else {
            
            position = position + 1 === commands.length ? position : position + 1;
            sites.splice(position); 
        }
        console.log(sites);
        return sites[position];
    }
}

module.exports = navigate;