//https://www.freecodecamp.org/learn/daily-coding-challenge/11-01
// Given a message string, a secret key string, and a signature number, 
// determine if the signature is valid using this encoding method:
//     Letters in the message and secret key have these values:
//         a to z have values 1 to 26 respectively.
//         A to Z have values 27 to 52 respectively.
//     All other characters have no value.
//     Compute the signature by taking the sum of the message plus the sum of the secret key.
// For example, given the message "foo" and the secret key "bar", the signature would be 57:
// f (6) + o (15) + o (15) = 36
// b (2) + a (1) + r (18) = 21
// 36 + 21 = 57
// Check if the computed signature matches the provided signature.

const verify = (message, key, signature) => {
    const values = 
    [   ' ','a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z','A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z'
    ];
    const regex = /\W/gm;
    message = message + key;
    message = message.replaceAll(regex,'');
    let computedSignature = 0;

    for(let i = 0; i < message.length; i++){
        computedSignature = computedSignature + values.indexOf(message[i]);
    }
    return computedSignature === signature;
}

module.exports = verify;