//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-17
// Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:
// Years Married 	Milestone
// 1 	"Paper"
// 5 	"Wood"
// 10 	"Tin"
// 25 	"Silver"
// 40 	"Ruby"
// 50 	"Gold"
// 60 	"Diamond"
// 70 	"Platinum"
//     If they haven't reached the first milestone, return "Newlyweds".

const getMilestone = (years) => {
    if(years >= 1 && years <= 4){
        return "Paper";
    }
    else if(years >= 5 && years <= 9){
        return "Wood";
    }
    else if(years >= 10 && years <= 24){
        return "Tin";
    }
    else if(years >= 25 && years <= 39){
        return "Silver";
    }
    else if(years >= 40 && years <= 49){
        return "Ruby";
    }
    else if(years >= 50 && years <= 59){
        return "Gold";
    }
    else if(years >= 60 && years <= 69){
        return "Diamond";
    }
    else if(years >= 70){
        return "Platinum";
    }
    else {
        return "Newlyweds";
    }
}

module.exports = getMilestone;