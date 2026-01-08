const parseUnorderedList = require('./parseUnorderedList');

describe('Returned text is in markdown for an unordered list', () => {
    test('1. parseUnorderedList("- Item A\n- Item B") should return "<ul><li>Item A</li><li>Item B</li></ul>".', () => {
        expect(parseUnorderedList("- Item A\n- Item B")).toEqual("<ul><li>Item A</li><li>Item B</li></ul>");
    });
    test('2. parseUnorderedList("-  JavaScript\n-  Python") should return "<ul><li>JavaScript</li><li>Python</li></ul>".', () => {
        expect(parseUnorderedList("-  JavaScript\n-  Python")).toEqual("<ul><li>JavaScript</li><li>Python</li></ul>");
    });
    test('3. parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla") should return "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>".', () => {
        expect(parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla")).toEqual("<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>");
    });
    test('4. parseUnorderedList("- A-1\n- A-2\n- B-1") should return "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>".', () => {
        expect(parseUnorderedList("- A-1\n- A-2\n- B-1")).toEqual("<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>");
    });
});