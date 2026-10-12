//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-09
// Given an issue title and an array of current labels, return an updated array of labels based on the following rules:
// If the issue doesn't have any labels, add:
//     "bug" and "needs triage" if the title contains "error" or "bug"
//     "enhancement" and "discussing" if the title contains "feature" or "add"
// Otherwise, if the given labels contain:
//     "needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
//     "discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
//     Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"
// If the title contains:
//     "security", add a "critical" label

const triageIssue = (title, labels) => {
    const issueLabels = [];
    if(labels.length === 0 && (title.includes('error') || title.includes('bug'))) {
        issueLabels.push('bug', 'needs triage');
    }
    else if(labels.length === 0 && title.includes('add') || title.includes('feature')) {
        issueLabels.push('enhancement', 'discussing');
    }

    //"needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
    if(labels.includes('need triage') && title.includes('simple') || title.includes('easy')){
        let index = labels.indexOf('needs triage');
        labels.splice(index, 1, 'good first issue');
    }
    else if(labels.includes('discussing') && title.includes('planned') || title.includes('next')){
        let index = labels.indexOf('discussing');
        labels.splice(index, 1, 'on the roadmap');
    }
    else if(labels.includes('needs triage') || labels.includes('discussing')) {
        let index = labels.indexOf('discussing') !== -1 ? labels.indexOf('discussing') : labels.indexOf('needs triage');
        labels.splice(index, 1, 'help wanted');
    }

    labels.forEach((label) => issueLabels.push(label));

    if(title.includes('security')) {
        issueLabels.push('critical');
    }

    return issueLabels;
}

module.exports = triageIssue;