//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-23
// Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.
// Each blood type consists of:
//     A letter: "A", "B", "AB", or "O"
//     And an Rh factor: "+" or "-"
// Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.
// Letter Rules:
//     "O" can donate to other letter type.
//     "A" can donate to "A" and "AB".
//     "B" can donate to "B" and "AB".
//     "AB" can donate only to "AB".
// Rh Rules:
//     Negative ("-") can donate to both "-" and "+".
//     Positive ("+") can donate only to "+".
// Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

const canDonate = (donor, recipient) => {
    const regex = /(A[+-])|(B[+-])|(O[+-])|(AB[+-])/gm;
    if((donor.match(regex) || recipient.match(regex)) === null){
        return 'Invalid blood type!';
    }

    if(donor === 'O-') {
        return true;
    }
    else if(donor === 'O+' && recipient.endsWith('+')){
        return true;
    }
    else if(donor === 'A-' && (recipient === 'A-' || recipient === 'AB-' || recipient === 'A+' || recipient === 'AB+')){
        return true;
    }
    else if(donor === 'B-' && (recipient === 'B-' || recipient === 'AB-' || recipient === 'B+' || recipient === 'AB+')){
        return true;
    }
    else if(donor === 'A+' && (recipient === 'A+' || recipient === 'AB+')){
        return true;
    }
    else if(donor === 'B+' && (recipient === 'B+' || recipient === 'AB+')){
        return true;
    }
    else{
        return false;
    }
}

module.exports = canDonate;