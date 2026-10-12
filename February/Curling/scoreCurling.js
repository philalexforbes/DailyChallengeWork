//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-21
// Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.
// The layout:
//     The center cell (index [2, 2]) is the "button".
//     The 8 cells directly surrounding the button represent ring 1.
//     And the 16 cells on the outer edge of the house represent ring 2.
// In the given matrix:
//     "." represents an empty space.
//     "R" represents a space with a red stone.
//     "Y" represents a space with a yellow stone.
// Scoring rules:
//     Only one team can score per round.
//     The team with the stone closest to the button scores.
//     The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
//     The lower the ring number, the closer to the center the stone is.
//     If both teams' closest stone is the same distance from the center, no team scores.
// Return:
//     A string in the format "team: number_of_points". e.g: "R: 2".
//     or "No points awarded" if neither team scored any points.
// For example, given:
// [
//   [".", ".", "R", ".", "."],
//   [".", "R", ".", ".", "."],
//   ["Y", ".", ".", ".", "."],
//   [".", "R", ".", ".", "."],
//   [".", ".", ".", ".", "."]
// ]
// Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.

const scoreCurling = (house) => {
    let yScore = 0;
    let rScore = 0;
    if(house[2][2] === 'Y') {
        for(let i = 1; i < 4; i++) {
            for(let k = 1; k < 4; k++){
                if(house[i][k] === 'Y'){
                    yScore += 1;
                }
            }
        }
        return `Y: ${yScore}`
    } 
    else if(house[2][2] === 'R') {
        for(let i = 1; i < 4; i++) {
            for(let k = 1; k < 4; k++){
                if(house[i][k] === 'R'){
                    rScore += 1;
                }
            }
        }
        return `R: ${rScore}`
    }
    else {
        for(let i = 1; i < 4; i++) {
            for(let k = 1; k < 4; k++){
                if(house[i][k] === 'R'){
                    rScore += 1;
                }
                else if(house[i][k] === 'Y'){
                    yScore += 1;
                }
            }
        }
        if(rScore > 0 && yScore === 0){
            return `R: ${rScore}`;
        }
        else if(yScore > 0 && rScore === 0){
            return `Y: ${yScore}`;
        } 
        else if((rScore && yScore) === 0 || (yScore && rScore) > 0) {
            return 'No points awarded'
        }
    }
}

module.exports = scoreCurling;