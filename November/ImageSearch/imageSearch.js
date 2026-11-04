//https://www.freecodecamp.org/learn/daily-coding-challenge/11-04
// On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.
// Given an array of image names and a search term, return an array of image names containing the search term.
//     Ignore the case when matching the search terms.
//     Return the images in the same order they appear in the input array.


const imageSearch = (images, term) => {
    const foundImages = [];

    for(let i = 0; i < images.length; i++) {
        if(images[i].toLowerCase().includes(term.toLowerCase())){
            foundImages.push(images[i]);
        }
    }

    return foundImages;
}

module.exports = imageSearch;