const getAverageGrade = require('./getAverageGrade');

describe('Return the correct letter for the average of the exam scores', () => {
    test('1. getAverageGrade([92, 91, 90, 94, 89, 93]) should return "A-".', () => {
        expect(getAverageGrade([92, 91, 90, 94, 89, 93])).toEqual('A-');
    });
    test('2. getAverageGrade([84, 89, 85, 100, 91, 88, 79]) should return "B+".', () => {
        expect(getAverageGrade([84, 89, 85, 100, 91, 88, 79])).toEqual('B+');
    });
    test('3. getAverageGrade([63, 69, 65, 66, 71, 64, 65]) should return "D".', () => {
        expect(getAverageGrade([63, 69, 65, 66, 71, 64, 65])).toEqual('D');
    });
    test('4. getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".', () => {
        expect(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100])).toEqual('A+');
    });
    test('5. getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".', () => {
        expect(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60])).toEqual('C+');
    });
    test('6. getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".', () => {
        expect(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59])).toEqual('F');
    });
});