//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-06
// Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.
// The given strings will contain the values:
//     "C": Your current location
//     "G": Your goal
//     "T": Traversable parts of the trail
//     "-": Untraversable parts of the map
// Return a string with the moves needed to follow the trail from your location to your goal where:
//     "R" is a move right
//     "D" is a move down
//     "L" is a move left
//     "U" is a move up
//     There will always be a single continuous trail, without any branching, from your current location to your goal.
//     Each trail location will have a maximum of two traversable locations touching it.
// For example, given:
// [
//   "-CT--",
//   "--T--",
//   "--TT-",
//   "---T-",
//   "---G-"
// ]
// Return "RDDRDD".

const navigateTrail = (map) => {
    let directions = '';
    let startingPoint;
    let startingPointPosition;
    for(let i = 0; i < map.length; i++) {
        if(map[i].includes('C')){
            startingPoint = i; 
            break;
        }
    }
    startingPointPosition = map[startingPoint].search('C'); //gets the spot in the string where you start
    if(startingPoint < (map.length / 2)){
        let start = startingPointPosition;
        for(let i = startingPoint; i < map.length; i++) {
            if(map[i][start] === 'C' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                directions += 'D';
            }
            else if(map[i][start] === 'T' && ((start - 1) === -1 && map[i][start+1] === '-')){
                directions += 'DD';
            }
            else if(map[i][start] === 'T' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                directions +='D';
            }
            else if(map[i][start-1] === 'T'){
                while(start !== 0) {
                    if(map[i][start-1] === 'T'){
                        directions += 'L';
                        start = start -1;
                    }
                    else if(map[i][start-1] === 'G'){
                        directions += 'L';
                        break;
                    } else {
                        directions += 'D'
                        break;
                    }
                }
            }
            else if(map[i][start+1] === 'T') {
                while(start !== map[i].length){
                    if(map[i][start+1] === 'T'){
                        directions += 'R';
                        start = start + 1;
                    }
                    else if(map[i][start+1] === 'G') {
                        directions += 'R';
                        break;
                    }
                    else {
                        directions += 'D';
                        break;                        
                    }
                }
            }
            else if(map[i][start-1] === 'G'){
                directions += 'L';
                break;
            }
            else if(map[i][start+1] === 'G'){
                directions += 'R';
                break;
            }
            else if(map[i][start] === 'G'){

            }
            else {
                directions += 'D';
            }
        }
    } 
    else {
        let start = startingPointPosition;
        if(map[0].search('G') !== -1 || map[1].search('G') !== -1) {
            for(let i = startingPoint; i > 0; i--) {
                if(map[i][start] === 'C' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                    directions += 'U';
                }
                else if(map[i][start-1] === 'T'){
                    while(start !== 0) {
                        if(map[i][start-1] === 'T'){
                            directions += 'L';
                            start = start -1;
                        }
                        else if(map[i][start-1] === 'G'){
                            directions += 'L';
                            break;
                        } 
                        else {
                            directions += 'U'
                            break;
                        }
                    }
                }
                else if(map[i][start+1] === 'T') {
                    while(start !== map[i].length){
                        if(map[i][start+1] === 'T'){
                            directions += 'R';
                            start = start + 1;
                        }
                        else if(map[i][start+1] === 'G') {
                            directions += 'R';
                            break;
                        }
                        else {
                            directions += 'U';
                            break;                        
                        }
                    }
                }
                else if(map[i][start-1] === 'G'){
                    directions += 'L';
                    break;
                }
                else if(map[i][start+1] === 'G'){
                    directions += 'R';
                    break;
                }
                else if(map[i][start] === 'G'){

                }
                else {
                    directions += 'U';
                }
            }
        }
        else {
            for(let i = startingPoint; i > 0; i--) {
                if(map[i][start] === 'C' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                    directions += 'U';
                }
                else if(map[i][start-1] === 'T'){
                    while(start !== 0) {
                        if(map[i][start-1] === 'T'){
                            directions += 'L';
                            start = start -1;
                        }
                        else if(map[i][start-1] === 'G'){
                            directions += 'L';
                            break;
                        } 
                        else {
                            directions += 'U'
                            break;
                        }
                    }
                }
                else if(map[i][start+1] === 'T') {
                    while(start !== map[i].length){
                        if(map[i][start+1] === 'T'){
                            directions += 'R';
                            start = start + 1;
                        }
                        else if(map[i][start+1] === 'G') {
                            directions += 'R';
                            break;
                        }
                        else {
                            directions += 'U';
                            break;                        
                        }
                    }
                }
                else if(map[i][start-1] === 'G'){
                    directions += 'L';
                    break;
                }
                else if(map[i][start+1] === 'G'){
                    directions += 'R';
                    break;
                }
                else if(map[i][start] === 'G'){

                }
                else {
                    directions += 'U';
                }
            }
            directions += 'U';
        for(let i = 0; i < map.length; i++) {
            if(map[i][start] === 'C' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                directions += 'D';
            }
            else if(map[i][start] === 'T' && ((start - 1) === -1 && map[i][start+1] === '-')){
                directions += 'DD';
            }
            else if(map[i][start] === 'T' && (map[i][start-1] === '-' && map[i][start+1] === '-')) {
                directions +='D';
            }
            else if(map[i][start-1] === 'T'){
                while(start !== 0) {
                    if(map[i][start-1] === 'T'){
                        directions += 'L';
                        start = start -1;
                    }
                    else if(map[i][start-1] === 'G'){
                        directions += 'L';
                        break;
                    } else {
                        directions += 'D'
                        break;
                    }
                }
            }
            else if(map[i][start+1] === 'T') {
                while(start !== map[i].length){
                    if(map[i][start+1] === 'T'){
                        directions += 'R';
                        start = start + 1;
                    }
                    else if(map[i][start+1] === 'G') {
                        directions += 'R';
                        break;
                    }
                    else {
                        directions += 'D';
                        break;                        
                    }
                }
            }
            else if(map[i][start-1] === 'G'){
                directions += 'L';
                break;
            }
            else if(map[i][start+1] === 'G'){
                directions += 'R';
                break;
            }
            else if(map[i][start] === 'G'){

            }
            else {
                directions += 'D';
            }
        }
        }

    }
    return directions;
}

module.exports = navigateTrail;