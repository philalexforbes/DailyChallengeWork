//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-23
// Given an array of issue numbers and another array of pull request (PR) numbers, return an array of issues that remain open after all PRs have been merged.
//     A PR closes an issue if their digits are a rotation of each other. For example, issue 123 would be closed by PR 231 or 312.
//     A PR does not close an issue with the exact same number. For example, PR 123 does not close issue 123. So an issue with all the same number can't get closed.
//     Either number may have leading zeros stripped. For example, PR 201 would close issue 12 (012, a rotation of 201). Similarily, issue 201 would be closed by PR 12.
// Return the remaining open issues in the order they were given.

const getOpenIssues = (issues, prs) => {
    for(let i = 0; i < issues.length; i++) {
        let issue = String(issues[i]);
        let issueOriginal = issues[i];
        for(let i = 0; i < issue.length - 1; i++) {
            issue = issue[issue.length -1] + issue.substring(0, (issue.length -1));
            for(let pr of prs) {
                pr = String(pr).split('');
                for(let p = 0; p < pr.length; p++) {
                    if (pr[p] === '0'){
                        pr[p] = '';
                    }
                }
                pr = Number(pr.join(''));
                if(Number(issue) === pr) {
                    let index = issues.indexOf(issueOriginal);
                    issues.splice(index,1);
                    i--;
                }
            }
        }
    }
    return issues;
}

module.exports = getOpenIssues;