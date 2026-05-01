const groupAnagrams = require('./groupAnagrams');

describe('Given a list of words return a 2D array with anagrams grouped together inside the outside array.', () => {
    test('1. groupAnagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]].', () => {
        expect(groupAnagrams(["listen", "silent", "hello", "enlist", "world"]))
        .toEqual([["listen", "silent", "enlist"], ["hello"], ["world"]]);
    });
    test('2. groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].', () => {
        expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
        .toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
    });
    test('3. groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].', () => {
        expect(groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]))
        .toEqual([['care', 'race', 'acre'],['pots', 'stop', 'tops', 'opts', 'post', 'spot'],['evil', 'vile', 'live', 'veil']]);
    });
    test('4. groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].', () => {
        expect(groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]))
        .toEqual([["algorithms", "logarithms"], ["education", "cautioned", "auctioned"], ["triangle", "integral", "alerting", "relating"]]);
    });
});