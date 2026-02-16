//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-16
// Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.
//     Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
//         "W" is the number of wins in regulation, worth 3 points each
//         "OTW" is the number of overtime wins, worth 2 points each
//         "OTL" is the number of overtime losses, worth 1 point each
//         "L" is the number of losses, worth 0 points each
// For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.
// Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". 
// For example, "The semi-final games will be FIN vs SWE and CAN vs USA."

function getSemiFinalMatchups (teams) {
    let first, second, third, fourth;
    let scores = [];
    let scoreCopy = [];  // needed since we would lose the original array's positioning lining up with country when it the array is sorted by highest to lowest
    let country = [];

    for(let i = 0; i < teams.length; i++) {
        country.push(teams[i].match(/([A-Z)]+)/gm));
        let gameOutcomes = teams[i].match(/\d/gm);
        let score = [];

        score.push(Number(gameOutcomes[0]) * 3);
        score.push(Number(gameOutcomes[1]) * 2);
        score.push(Number(gameOutcomes[2]) * 1);
        score.push(Number(gameOutcomes[3]) * 0);

        let total = score.reduce((sum, current) => sum + current, 0);
        scores.push(total);
        scoreCopy.push(total);
    }
    scoreCopy.sort((a, b) => a > b ? -1 : 1);
    first = country[scores.indexOf(scoreCopy[0])];
    second = country[scores.indexOf(scoreCopy[1])];
    third = country[scores.indexOf(scoreCopy[2])];
    fourth = country[scores.indexOf(scoreCopy[3])];

    return `The semi-final games will be ${first} vs ${fourth} and ${second} vs ${third}.`;
}

module.exports = getSemiFinalMatchups;