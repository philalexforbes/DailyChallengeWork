const emailChainCount = require('./emailChainCount');

describe('Return the correct number of times an email has been forwarded or replied', () => {
    test('1. emailChainCount("Re: Meeting Notes") should return 1.', () => {
        expect(emailChainCount("Re: Meeting Notes")).toEqual(1);
    });
    test('2. emailChainCount("Meeting Notes") should return 0.', () => {
        expect(emailChainCount("Meeting Notes")).toEqual(0);
    });
    test('3. emailChainCount("Re: re: RE: rE: Meeting Notes") should return 4.', () => {
        expect(emailChainCount("Re: re: RE: rE: Meeting Notes")).toEqual(4);
    });
    test('4. emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes") should return 5.', () => {
        expect(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")).toEqual(5);
    });
    test('5. emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary") should return 23.', () => {
        expect(emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary")).toEqual(23);
    });
})