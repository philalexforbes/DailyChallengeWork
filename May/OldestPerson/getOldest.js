//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-11
// Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.
// If multiple people share the oldest age, return all of their names in the order they appear in the input.

const getOldest = (people) => {
    people = people.sort((a,b) => b.age - a.age);
    let oldest = [];

    for(let i = 0; i < people.length; i++) {
        if(people[0].age === people[i].age){
            oldest.push(people[i].name);
        }
    }

    return oldest;
}

module.exports = getOldest;