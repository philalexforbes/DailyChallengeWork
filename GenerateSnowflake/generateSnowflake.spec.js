const generateSnowflake = require('./generateSnowflake');

describe('Mirror the input at the newline', () => {
    test('1. generateSnowflake("* \n *\n* ") should return "*  *\n ** \n*  *".', () => {
        expect(generateSnowflake("* \n *\n* ")).toEqual('*  *\n ** \n*  *');
    });
    test('2. generateSnowflake("X=~") should return "X=~~=X".', () => {
        expect(generateSnowflake("X=~")).toEqual('X=~~=X');
    });
    test('3. generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".', () => {
        expect(generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ")).toEqual(" X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ");
    });
    test('4. generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".', () => {
        expect(generateSnowflake("*   *\n * * \n* * *\n * * \n*   *")).toEqual("*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *");
    });
    test('5. generateSnowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".', () => {
        expect(generateSnowflake("*  -\n * -\n*  -")).toEqual("*  --  *\n * -- * \n*  --  *");
    });
});