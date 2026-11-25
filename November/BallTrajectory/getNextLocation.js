//https://www.freecodecamp.org/learn/daily-coding-challenge/11-29
//Today's challenge is inspired by the video game Pong, which was released November 29, 1972.
// Given a matrix (array of arrays) that includes the location of the ball (2), 
// and the previous location of the ball (1), return the matrix indices for the next location of the ball.
//     The ball always moves in a straight line.
//     The movement direction is determined by how the ball moved from 1 to 2.
//     The edges of the matrix are considered walls. If the ball hits a:
//         top or bottom wall, it bounces by reversing its vertical direction.
//         left or right wall, it bounces by reversing its horizontal direction.
//         corner, it bounces by reversing both directions.

const getNextLocation = (matrix) => {
    let verticalLimit = matrix.length - 1;
    let horizontalLimit = matrix.length - 1;
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i].includes(1)){
            let index = matrix[i].indexOf(1);
            if(matrix[i][index+1] === 2){ //to the right
                if(index+2 <= horizontalLimit){
                    return [i,index+2];
                }
                else{
                    return[i, index-1];
                }
            }
            else if(matrix[i][index-1] === 2){ //to the left
                if(index-2 >= 0) {
                    return [i, index -2];
                }
                else {
                    return [i, index+1];
                }
            }
            else if(matrix[i-1][index] === 2) { //above
                if(i-2 >= 0){
                    return [i-2, index]
                }
                else{
                    return [i+1, index];
                }
            }
            else if(matrix[i-1][index-1] === 2) { //to the upper left diagonally
                if(i-2 >=0 && index - 2 >=0){
                    return [i-2, index - 2];
                }
                else if(i+2 >= verticalLimit){
                    return [i-2, index];
                }
                else {
                    return [i+1, index + 1];
                }
            }
            else if(matrix[i+1][index] === 2) { //below
                if(i + 2 <= verticalLimit){
                    return [i+2, index];
                }
                else {
                    return [i-1, index];
                }
            }
            else if(matrix[i+1][index+1] === 2) {//to the bottom right diagonally
                if(i+2 <= verticalLimit && index + 2 <= horizontalLimit){
                    return [i+2, index + 2];
                }
                else{
                    return [i, index];
                }
            }
            else if(matrix[i+1][index-1] === 2) { //to the bottom left diagonally
                if(i+2 <= verticalLimit && index - 2 >=0){
                    return [i+2, index - 2];
                }
                else {
                    return [i-1, index -1];
                }
            }

            else if(matrix[i-1][index+1] === 2) { //to the upper right diagonally
                if(i - 2 <= 0 && index + 2 <= horizontalLimit){
                    return [i, index + 2];
                }
                else {
                    return [i+1, index - 1];
                }
            }
        }
    }
}

module.exports = getNextLocation;