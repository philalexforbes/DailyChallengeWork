const validate = require('./validate');

describe('Given a possible email determine if it is valid or not.', () => {
    test('1. validate("a@b.cd") should return true.', () => { 
        expect(validate("a@b.cd")).toEqual(true);
    });
    test('2. validate("hell.-w.rld@example.com") should return true.', () => { 
        expect(validate("hell.-w.rld@example.com")).toEqual(true);
    });
    test('3. validate(".b@sh.rc") should return false.', () => { 
        expect(validate(".b@sh.rc")).toEqual(false);
    });
    test('4. validate("example@test.c0") should return false.', () => { 
        expect(validate("example@test.c0")).toEqual(false);
    });
    test('5. validate("freecodecamp.org") should return false.', () => { 
        expect(validate("freecodecamp.org")).toEqual(false);
    });
    test('6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.', () => { 
        expect(validate("develop.ment_user@c0D!NG.R.CKS")).toEqual(true);
    });
    test('7. validate("hello.@wo.rld") should return false.', () => { 
        expect(validate("hello.@wo.rld")).toEqual(false);
    });
    test('8. validate("hello@world..com") should return false.', () => { 
        expect(validate("hello@world..com")).toEqual(false);
    });
    test('9. validate("develop..ment_user@c0D!NG.R.CKS") should return false.', () => { 
        expect(validate("develop..ment_user@c0D!NG.R.CKS")).toEqual(false);
    });
    test('10. validate("git@commit@push.io") should return false.', () => { 
        expect(validate("git@commit@push.io")).toEqual(false);
    });
});