const detectMutations = require('./detectMutations');

describe('Given two strands of DNA return the indexes if applicable where the strands differ.', () => {
    test('1. detectMutations("ATCG", "ATGG") should return [2].', () => {
        expect(detectMutations("ATCG", "ATGG"))
            .toEqual([2]);
    });
    test('2. detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC") should return [4, 9, 11].', () => {
        expect(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC"))
            .toEqual([4, 9, 11]);
    });
    test('3. detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG") should return [].', () => {
        expect(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG"))
            .toEqual([]);
    });
    test('4. detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG") should return [15, 16, 17, 18].', () => {
        expect(detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG"))
            .toEqual([15, 16, 17, 18]);
    });
    test('5. detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28].', () => {
        expect(detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT"))
            .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28]);
    });
});