//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-07
// Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.
//     The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.
//     "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.
//     "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.

const getElementSize = (windowSize, elementVw, elementVh) => {
    const regex = /\d+/gm;
    elementVw = elementVw.match(regex);
    elementVw = Number(elementVw[0]) / 100;
    elementVh = elementVh.match(regex);
    elementVh = Number(elementVh[0]) / 100;
    windowSize = windowSize.match(regex);
    let windowWidth = Number(windowSize[0]) * elementVw;
    let windowHeight = Number(windowSize[1]) * elementVh;
    return `${windowWidth} x ${windowHeight}`;
}

module.exports = getElementSize;