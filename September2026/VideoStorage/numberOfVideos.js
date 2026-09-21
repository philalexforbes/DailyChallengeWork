//https://www.freecodecamp.org/learn/daily-coding-challenge/09-21
// Given a video size, a unit for the video size, a hard drive capacity, 
// and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

//     The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
//     If not given one of the video units above, return "Invalid video unit".
//     The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
//     If not given one of the hard drive units above, return "Invalid drive unit".
//     Return the number of whole videos the drive can fit.
//     Use the following conversions:

// Unit 	Equivalent
// 1 B 	1 B
// 1 KB 	1000 B
// 1 MB 	1000 KB
// 1 GB 	1000 MB
// 1 TB 	1000 GB

// For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.

const numberOfVideos = (videoSize, videoUnit, driveSize, driveUnit) => {
    const videoConversionToGB = {
        'B': 1000000000,
        'KB': 1000000,
        'MB': 1000,
        'GB': 1
    }

    const driveConversionToTB = {
        'GB': 1000000,
        'TB': 1000
    }

    const conver = {
        'KB': 1000000000000,
        'MB': 1000000,
        'GB': 1000,
        'TB': 1
    }

    if(!Object.hasOwn(videoConversionToGB, videoUnit)){
        return 'Invalid video unit';
    }
    else if(!Object.hasOwn(driveConversionToTB, driveUnit)) {
        return 'Invalid drive unit';
    }

    let size = Math.abs((driveSize * driveConversionToTB[driveUnit]) / (videoSize * videoConversionToGB[videoUnit]));
    size = size > 1 ? size : size * conver[videoUnit];
    return Math.floor(size);
}

module.exports = numberOfVideos;