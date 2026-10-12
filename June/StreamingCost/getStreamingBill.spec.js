const getStreamingBill = require('./getStreamingBill');

describe('Given an array of movies and the subscription type the user has. Return the correct price for their movies.', () => {
    test('1. getStreamingBill([{ format: "HD", type: "rent" }], "none") should return "$3.99".' ,() => {
        expect(getStreamingBill([{ format: "HD", type: "rent" }], "none"))
        .toEqual("$3.99");
    });
    test('2. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium") should return "$12.73".' ,() => {
        expect(getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium"))
        .toEqual("$12.73");
    });
    test('3. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic") should return "$18.87".' ,() => {
        expect(getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic"))
        .toEqual("$18.87");
    });
    test('4. getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium") should return "$29.98".' ,() => {
        expect(getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium"))
        .toEqual("$29.98");
    });
    test('5. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none") should return "$42.96".' ,() => {
        expect(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none"))
        .toEqual("$42.96");
    });
    test('6. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic") should return "$50.36".' ,() => {
        expect(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic"))
        .toEqual("$50.36");
    });
});