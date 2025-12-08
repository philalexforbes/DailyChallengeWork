const compressString = require('./compressString');

describe('String is being compressed when multiple words are repeated', ()=> {
    test('compressString("yes yes yes please") should return "yes(3) please".', ()=> {
        expect(compressString('yes yes yes please')).toEqual('yes(3) please');
    });
    test('compressString("I have have have apples") should return "I have(3) apples".', ()=> {
        expect(compressString('I have have have apples')).toEqual('I have(3) apples');
    });
    test('compressString("one one three and to the the the the") should return "one(2) three and to the(4)".', ()=> {
        expect(compressString('one one three and to the the the the')).toEqual('one(2) three and to the(4)');
    });
    test('compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)".', ()=> {
        expect(compressString('route route route route route route tee tee tee tee tee tee')).toEqual('route(6) tee(6)');
    });
})