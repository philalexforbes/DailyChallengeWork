// Given two strings representing fingerprints, determine if they are a match using the following rules:

//     Each fingerprint will consist only of lowercase letters (a-z).
//     Two fingerprints are considered a match if:
//         They are the same length.
//         The number of differing characters does not exceed 10% of the fingerprint length.

const isMatch = function(fingerprintA, fingerprintB) {
    let doFingerprintLengthsMatch = fingerprintA.length === fingerprintB.length ? true : false;
    let doFingerprintDifferencesNotExceed10Percent = false;

    if(doFingerprintLengthsMatch) {
        let matchPercentage;
        let numberOfMatches = 0;
        for(let i = 0; i < fingerprintA.length; i++){
            if(fingerprintA[i] === fingerprintB[i]){
                numberOfMatches++;
            }
        }
        matchPercentage = (numberOfMatches / fingerprintA.length) * 100;
        doFingerprintDifferencesNotExceed10Percent = matchPercentage >= 90 ? true : false;
    }

    return doFingerprintLengthsMatch && doFingerprintDifferencesNotExceed10Percent;
}

module.exports = isMatch;