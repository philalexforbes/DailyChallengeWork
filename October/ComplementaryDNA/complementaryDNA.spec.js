const complementaryDNA = require('./complementaryDNA');

describe('Given a strand of DNA return the complementary strands.', () => {
    test('1. complementaryDNA("ACGT") should return "TGCA".', () => {
        expect(complementaryDNA("ACGT")).toEqual("TGCA");
    });
    test('2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".', () => {
        expect(complementaryDNA("ATGCGTACGTTAGC")).toEqual("TACGCATGCAATCG");
    });
    test('3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".', () => {
        expect(complementaryDNA("GGCTTACGATCGAAG")).toEqual("CCGAATGCTAGCTTC");
    });
    test('4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".', () => {
        expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toEqual("CTAGATCGATCCGATCGATC");
    });
});