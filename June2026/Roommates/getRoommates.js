//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-09
// Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:
//     Each person has a name and a group property:
// [
//   { "name": "Alice", "group": "A" },
//   { "name": "Bob", "group": "B" },
//   { "name": "Carol", "group": "A" }
// ]
//     People can only share a room with someone from the same group and are paired in the order they are given.
//     Return an array of strings with names separated by " and " for a shared room, and just the name for a solo room. 
//     Names must appear in the order they were paired. For the example above, return ["Alice and Carol", "Bob"].

const getRoommates = (people) => {
    let groups = [];
    const rooms = [];

    function getUniqueValues(value, index, array) {
        return array.indexOf(value) === index;
    }

    for(let i = 0; i < people.length; i++) {
        groups.push(people[i].group);
    }

    groups = groups.filter(getUniqueValues);

    for(let i = 0; i < groups.length; i++) {
        const sameGroup = people.filter((person) => person.group === groups[i]);
        if(sameGroup.length > 1){
            let length = 0;
            while (length < sameGroup.length) {
                let roommates = "";
                if((length + 1) !== sameGroup.length) {
                    roommates = sameGroup[length].name +  ' and ' + sameGroup[length+1].name;
                } 
                else {
                    roommates = sameGroup[length].name;
                }
                rooms.push(roommates);
                length = length + 2;
            }
        } 
        else {
            rooms.push(sameGroup[0].name);
        }     
    }
    return rooms;
}

module.exports = getRoommates;