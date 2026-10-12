//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-22
// Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:
// Average Score 	Letter Grade
// 97-100 	"A+"
// 93-96 	"A"
// 90-92 	"A−"
// 87-89 	"B+"
// 83-86 	"B"
// 80-82 	"B-"
// 77-79 	"C+"
// 73–76 	"C"
// 70-72 	"C-"
// 67-69 	"D+"
// 63-66 	"D"
// 60–62 	"D-"
// below 60 	"F"
// Calculate the average by adding all scores in the array and dividing by the total number of scores.

function getAverageGrade(scores) {
    let average = scores.reduce((sum, current) => sum + current, 0);
    average = average / scores.length;
    let grade = '';
    if (average >= 97) {
        grade = 'A+'
    }
    else if(average < 97 && average >= 93){
        grade = 'A';
    }
    else if(average < 93 && average >= 90){
        grade = 'A-';
    }
    else if(average < 90 && average >= 87){
        grade = 'B+';
    }
    else if(average < 87 && average >= 83){
        grade = 'B';
    }
    else if(average < 83 && average >= 80){
        grade = 'B-';
    }
    else if(average < 80 && average >= 77){
        grade = 'C+';
    }
    else if(average < 77 && average >= 73){
        grade = 'C';
    }
    else if(average < 73 && average >= 70){
        grade = 'C-';
    }
    else if(average < 70 && average >= 67){
        grade = 'D+';
    }
    else if(average < 67 && average >= 63){
        grade = 'D';
    }
    else if(average < 63 && average >= 60){
        grade = 'D-';
    }
    else{
        grade = 'F';
    }
    return grade;
}

module.exports = getAverageGrade;