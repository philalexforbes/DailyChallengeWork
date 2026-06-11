//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-11
// Given a 2D array where each inner array contains (in this order) an idea name, an optimistic estimate, a realistic estimate, and a pessimistic estimate (in days), 
// return an array of the idea names sorted by expected time to completion, shortest first.
// Calculate the expected time to completion for each idea using the following formula:
//     expected = ((optimistic + 4 * realistic + pessimistic) / 6) * length of idea name

const analyzeIdeas = (ideas) => {
    const numberOfIdeas = ideas.length;
    let estimates = [];

    for(let i = 0; i < numberOfIdeas; i++) {
        const ideaName = ideas[i][0];
        const estimate = (((ideas[i][1] + 4 * ideas[i][2] + ideas[i][3]) / 6) * ideaName.length);
        let idea = new Object();
        idea["name"] = ideaName;
        idea["estimate"] = estimate;
        estimates.push(idea);
    }

    estimates = estimates.sort((a,b) => a.estimate - b.estimate);
    return estimates.map((idea) => idea.name);
}

module.exports = analyzeIdeas;