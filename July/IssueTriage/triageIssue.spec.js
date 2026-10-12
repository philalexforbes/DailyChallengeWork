const triageIssue = require('./triageIssue');

describe('Given a date stamp since the last post on an issue and the last message posted determine what action should be taken.', () => {
    test('1. triageIssue(86400000, "Lets fix it") should return "leave it".', () => {
        expect(triageIssue(86400000, "Lets fix it")).toEqual("leave it");
    });
    test('2. triageIssue(1209600000, "still waiting") should return "bump it".', () => {
        expect(triageIssue(1209600000, "still waiting")).toEqual("bump it");
    });
    test('3. triageIssue(864000000, "bump") should return "close it".', () => {
        expect(triageIssue(864000000, "bump")).toEqual("close it");
    });
    test('4. triageIssue(604800000, "Do we still want this?") should return "bump it".', () => {
        expect(triageIssue(604800000, "Do we still want this?")).toEqual("bump it");
    });
    test('5. triageIssue(604800000, "Bumping this") should return "close it".', () => {
        expect(triageIssue(604800000, "Bumping this")).toEqual("close it");
    });
    test('6. triageIssue(345600000, "I\'ll make a PR") should return "leave it".', () => {
        expect(triageIssue(345600000, "I'll make a PR")).toEqual("leave it");
    });
});