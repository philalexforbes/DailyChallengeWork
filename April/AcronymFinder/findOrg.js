//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-20
// Given a string representing an acronym, return the full name of the organization it belongs to from the list below:
//     "National Avocado Storage Authority"
//     "Cats Infiltration Agency"
//     "Fluffy Beanbag Inspectors"
//     "Department Of Jelly"
//     "Wild Honey Organization"
//     "Eating Pancakes Administration"
// Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

const findOrg = (acronym) => {
    const acronyms = {
        NASA: "National Avocado Storage Authority",
        CIA: "Cats Infiltration Agency",
        FBI: "Fluffy Beanbag Inspectors",
        DOJ: "Department Of Jelly",
        WHO: "Wild Honey Organization",
        EPA: "Eating Pancakes Administration",
    }

    return acronyms[acronym];
}

module.exports = findOrg;