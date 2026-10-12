//www.freecodecamp.org/learn/daily-coding-challenge/2026-02-22
// Given a 2D array of medal winners, return a medal count for each country as a CSV string.
//     In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]
//     The returned CSV string should have the following format, with the first line being headers:
// Country,Gold,Silver,Bronze,Total
// country_name,gold_count,silver_count,bronze_count,total_medals
//     Separate new lines with the new line character ("\n").
//     Do not include spaces around commas or at the end of lines.
//     Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.
// For example, given:
// [
//   ["USA", "CAN", "NOR"],
//   ["NOR", "USA", "CAN"],
//   ["USA", "NOR", "SWE"]
// ]
// Return:
// "Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"

// Which looks like this when printed:
// Country,Gold,Silver,Bronze,Total
// USA,2,1,0,3
// NOR,1,1,1,3
// CAN,0,1,1,2
// SWE,0,0,1,1

const countMedals = (winners) => {
    let medalCounts = 'Country,Gold,Silver,Bronze,Total\n';
    let goldMedals = [];
    let silverMedals = [];
    let bronzeMedals = [];
    let countries = []; //used to get all countries that placed
    let totals = [];

    for (let i = 0; i < winners.length; i++) {
        goldMedals.push(winners[i][0]); //separating the gold medals
        silverMedals.push(winners[i][1]); //separting the silver medals
        bronzeMedals.push(winners[i][2]); //separting the bronze medals
        for(let j = 0; j < winners[i].length; j++) {
            //adding a country to the array of countries if it hasn't already been added
            if(countries.indexOf(winners[i][j]) === -1){
                countries.push(winners[i][j]); 
            }
        }
    }
    
    for (let i = 0; i < countries.length; i++) {
        let goldCount = 0;
        let silverCount = 0;
        let bronzeCount = 0;
        let medals = [];
        medals.push(countries[i]);
        goldMedals.forEach((country) => (country === countries[i] && goldCount++));
        medals.push(goldCount);
        silverMedals.forEach((country) => (country === countries[i] && silverCount++));
        medals.push(silverCount);
        bronzeMedals.forEach((country) => (country === countries[i] && bronzeCount++));
        medals.push(bronzeCount);
        medals.push(goldCount + silverCount + bronzeCount);
        totals.push(medals);
    }
    //sort the array by gold medals if the medal counts match we will sort them by alphabetical
    totals.sort((a,b) => {
        if(a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    });

    for(let i = 0; i < totals.length; i++) {
        medalCounts += totals[i].join(',');
        if(i !== totals.length - 1){
            medalCounts += '\n';
        }
    }
    return medalCounts;
}

module.exports = countMedals;