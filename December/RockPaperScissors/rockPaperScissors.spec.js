const rockPaperScissors = require('./rockPaperScissors');

describe('Determine who wins in the Rock Paper Scissors game', () => {
    test('1. rockPaperScissors("Rock", "Rock") should return "Tie".', () => {
        expect(rockPaperScissors("Rock", "Rock")).toEqual('Tie');
    });
    test('2. rockPaperScissors("Rock", "Paper") should return "Player 2 wins".', () => {
        expect(rockPaperScissors("Rock", "Paper")).toEqual('Player 2 wins');
    });
    test('3. rockPaperScissors("Scissors", "Paper") should return "Player 1 wins".', () => {
        expect(rockPaperScissors("Scissors", "Paper")).toEqual('Player 1 wins');
    });
    test('4. rockPaperScissors("Rock", "Scissors") should return "Player 1 wins".', () => {
        expect(rockPaperScissors("Rock", "Scissors")).toEqual('Player 1 wins');
    });
    test('5. rockPaperScissors("Scissors", "Scissors") should return "Tie".', () => {
        expect(rockPaperScissors("Scissors", "Scissors")).toEqual('Tie');
    });
    test('6. rockPaperScissors("Scissors", "Rock") should return "Player 2 wins".', () => {
        expect(rockPaperScissors("Scissors", "Rock")).toEqual('Player 2 wins');
    });
})