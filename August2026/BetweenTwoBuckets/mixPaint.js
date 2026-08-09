//https://www.freecodecamp.org/learn/daily-coding-challenge/08-09
// Given two buckets of paint, each with an RGB color and a fullness level, return the mixed RGB color as an array of three integers.
//     Each bucket is an object (JavaScript) or dictionary (Python) with a color property (an array of three integers [r, g, b]) and a fullness property (0–100).
//     The mixed color is a weighted average of each channel in the two colors based on fullness level, with each channel rounded to the nearest integer.



const mixPaint = (bucket1, bucket2) => {
    const bucket = [];
    const fullness = bucket1.fullness + bucket2.fullness;
    for(let i = 0; i < bucket1.color.length; i++) {
        bucket1.color[i] = bucket1.color[i] * bucket1.fullness;
        bucket2.color[i] = bucket2.color[i] * bucket2.fullness;
        let mix = bucket1.color[i] + bucket2.color[i];
        mix = Math.round(mix / fullness);
        bucket.push(mix);
    }
    return bucket;
}

module.exports = mixPaint;