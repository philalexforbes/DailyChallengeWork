//https://www.freecodecamp.org/learn/daily-coding-challenge/09-19
// Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), 
// return the number of photos the hard drive can store using the following constraints:

//     1 gigabyte equals 1000 megabytes.
//     Return the number of whole photos the drive can store.

const numberOfPhotos = (photoSizeMb, hardDriveSizeGb) => {
    const hdSizeMb = 1000 * hardDriveSizeGb;
    return Math.floor(hdSizeMb / photoSizeMb);
}

module.exports = numberOfPhotos;