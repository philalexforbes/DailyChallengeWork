const isMatch = require('./isMatch');

describe('Do the fingerprints match?', () => {
    test('"helloworld" fingerprint should match "helloworld"', () => {
        expect(isMatch('helloworld', 'helloworld')).toBeTruthy();
    });
    test('"helloworld" fingerprint should not match "helloworlds"', () => {
        expect(isMatch('helloworld', 'helloworlds')).toBeFalsy();
    });
    test('"thequickbrownfoxjumpsoverthelazydog" fingerprint should match "thequickbrownfoxjumpsoverthelazydog"', () => {
        expect(isMatch('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthelazydog')).toBeTruthy();
    });
    test('"theslickbrownfoxjumpsoverthelazydog" fingerprint should match "thequickbrownfoxjumpsoverthehazydog"', () => {
        expect(isMatch('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazydog')).toBeTruthy();
    });
    test('"thequickbrownfoxjumpsoverthelazydog" fingerprint should match "thequickbrownfoxjumpsoverthehazycat"', () => {
        expect(isMatch('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazycat')).toBeFalsy();
    });
})