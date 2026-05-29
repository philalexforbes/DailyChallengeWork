//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-29
// Given two strings for different image dimensions, return the aspect ratio of the image with a greater width-to-height ratio.
//     The given strings will be in the format "WxH", for example, "1920x1080".
//     The aspect ratio is the ratio of width to height, reduced to the lowest whole numbers. For example, "1920x1080" reduces to "16:9".
//     Return a string in format "W:H", for example, "16:9".

const getWiderAspectRatio = (a, b) => {
    let width, height;
    if(Number(a.split('x')[0]) > Number(b.split('x')[0])){
        width = Number(a.split('x')[0]);
        height = Number(a.split('x')[1]);
    }
    else {
        width = Number(b.split('x')[0]);
        height = Number(b.split('x')[1]);
    }
    let widthRatio = 0, heightRatio = 0;
    let widthGCF = [], heightGCF = [];

    for(let i = 1; i <= width; i++){
        if(width % i === 0){
            widthGCF.push(i);
        }
    }

    for(let i = 1; i <= height; i++){
        if(height % i === 0){
            heightGCF.push(i);
        }
    }

    let common = widthGCF.filter((number) => heightGCF.includes(number)).sort((a,b) => b - a);
    widthRatio = width / common[0];
    heightRatio = height / common[0];

    return `${widthRatio}:${heightRatio}`;
}

module.exports = getWiderAspectRatio;