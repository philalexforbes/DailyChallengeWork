const getMovieNightCost = require('./getMovieNightCost');

describe('Return the total cost of movie tickets given the day, showtime, and number of tickets.', () => {
    test('1. getMovieNightCost("Saturday", "10:00pm", 1) should return "$12.00".', () => {
        expect(getMovieNightCost("Saturday", "10:00pm", 1)).toEqual("$12.00");
    });
    test('2. getMovieNightCost("Sunday", "10:00am", 1) should return "$10.00".', () => {
        expect(getMovieNightCost("Sunday", "10:00am", 1)).toEqual("$10.00");
    });
    test('3. getMovieNightCost("Tuesday", "7:20pm", 2) should return "$10.00".', () => {
        expect(getMovieNightCost("Tuesday", "7:20pm", 2)).toEqual("$10.00");
    });
    test('4. getMovieNightCost("Wednesday", "5:40pm", 3) should return "$30.00".', () => {
        expect(getMovieNightCost("Wednesday", "5:40pm", 3)).toEqual("$30.00");
    });
    test('5. getMovieNightCost("Monday", "11:50am", 4) should return "$32.00".', () => {
        expect(getMovieNightCost("Monday", "11:50am", 4)).toEqual("$32.00");
    });
    test('6. getMovieNightCost("Friday", "4:30pm", 5) should return "$50.00".', () => {
        expect(getMovieNightCost("Friday", "4:30pm", 5)).toEqual("$50.00");
    });
    test('7. getMovieNightCost("Tuesday", "11:30am", 1) should return "$5.00".', () => {
        expect(getMovieNightCost("Tuesday", "11:30am", 1)).toEqual("$5.00");
    });
});