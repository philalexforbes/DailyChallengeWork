const triageIssue = require('./triageIssue');

describe('Given an issue and an array of labels return the updated array of labels.', () => {
    test('1. triageIssue("app crashes with error", []) should return ["bug", "needs triage"].', () => {
        expect(triageIssue("app crashes with error", []))
        .toEqual(["bug", "needs triage"]);
    });
    test('2. triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].', () => {
        expect(triageIssue("app crashes with error", ["bug", "needs triage"]))
        .toEqual(["bug", "help wanted"]);
    });
    test('3. triageIssue("add dark mode", []) should return ["enhancement", "discussing"].', () => {
        expect(triageIssue("add dark mode", []))
        .toEqual(["enhancement", "discussing"]);
    });
    test('4. triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].', () => {
        expect(triageIssue("add dark mode", ["enhancement", "discussing"]))
        .toEqual(["enhancement", "help wanted"]);
    });
    test('5. triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"].', () => {
        expect(triageIssue("xss security bug", []))
        .toEqual(["bug", "needs triage", "critical"]);
    });
    test('6. triageIssue("security vulnerability in auth", []) should return ["critical"].', () => {
        expect(triageIssue("security vulnerability in auth", []))
        .toEqual(["critical"]);
    });
    test('7. triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].', () => {
        expect(triageIssue("easy a11y fix", ["bug", "needs triage"]))
        .toEqual(["bug", "good first issue"]);
    });
    test('8. triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].', () => {
        expect(triageIssue("planned api migration", ["enhancement", "discussing"]))
        .toEqual(["enhancement", "on the roadmap"]);
    });
    test('9. triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].', () => {
        expect(triageIssue("improve security", ["enhancement", "discussing"]))
        .toEqual(["enhancement", "help wanted", "critical"]);
    });
});