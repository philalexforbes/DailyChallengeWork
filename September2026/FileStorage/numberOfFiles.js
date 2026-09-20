//https://www.freecodecamp.org/learn/daily-coding-challenge/09-20
// Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), 
// return the number of files the hard drive can store using the following constraints:
//     The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
//     Return the number of whole files the drive can fit.
//     Use the following conversions:
// Unit 	Equivalent
// 1 B 	1 B
// 1 KB 	1000 B
// 1 MB 	1000 KB
// 1 GB 	1000 MB
// For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

const numberOfFiles = (fileSize, fileUnit, driveSizeGb) => {
    const conversionToGB = {
        'B': 1000000000,
        'KB': 1000000,
        'MB': 1000,
        'GB': 1
    }
    const storageSizeConverted = driveSizeGb * conversionToGB[fileUnit];
    return Math.floor(storageSizeConverted / fileSize);
}

module.exports = numberOfFiles;