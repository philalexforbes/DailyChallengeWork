const spaceJam = require('./spaceJam');

describe('Given a string, return the string with all capitalized letters and a space between each character.', () => {
    test('1. spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".', () => {
        expect(spaceJam("freeCodeCamp")).toEqual("F  R  E  E  C  O  D  E  C  A  M  P");
    });
    test('2. spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".', () => {
        expect(spaceJam("   free   Code   Camp   ")).toEqual("F  R  E  E  C  O  D  E  C  A  M  P");
    });
    test('3. spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".', () => {
        expect(spaceJam("Hello World?!")).toEqual("H  E  L  L  O  W  O  R  L  D  ?  !");
    });
    test('4. spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".', () => {
        expect(spaceJam("C@t$ & D0g$")).toEqual("C  @  T  $  &  D  0  G  $");
    });
    test('5. spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".', () => {
        expect(spaceJam("allyourbase")).toEqual("A  L  L  Y  O  U  R  B  A  S  E");
    });
});