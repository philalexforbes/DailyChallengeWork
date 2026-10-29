//https://www.freecodecamp.org/learn/daily-coding-challenge/10-29
// On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. 
// Now, there are billions of email addresses.

// In this challenge, you are given a list of email addresses and need to sort them 
// alphabetically by domain name first (the part after the @), and username second (the part before the @).

//     Sorting should be case-insensitive.
//     If more than one email has the same domain, sort them by their username.
//     Return an array of the sorted addresses.
//     Returned addresses should retain their original case.

// For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].

const sort = emails => {
    const sortedEmails = emails.toSorted((a, b) => {
        const [userA, domainA] = a.split('@');
        const [userB, domainB] = b.split('@');

        // First, compare the domains
        const domainComparison = domainA.toLowerCase().localeCompare(domainB.toLowerCase());

        // If domains are different, sort by domain. If they are the same, sort by username.
        return domainComparison !== 0 ? domainComparison : userA.toLowerCase().localeCompare(userB);
    });

    return sortedEmails;
}

module.exports = sort;