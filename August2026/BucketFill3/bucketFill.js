//https://www.freecodecamp.org/learn/daily-coding-challenge/08-10
// Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

// Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.

//     Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
//     Clicks can use any color as an intermediate step, not just the target color.

const adjacents = [
    [-1, 0],
    [ 1, 0],
    [ 0, 1],
    [ 0,-1]
]

function markBlob(grid, blobId, [row, col], id) {
    let newBlobId = blobId.map(row => [...row]);
    const color = grid[row][col];
    newBlobId[row][col] = id;

    for(let [dr, dc] of adjacents) {
        const [r,c] = [row + dr, col + dc];
        if(grid[r]?.[c] === color && newBlobId[r]?.[c] === -1) {
            newBlobId = markBlob(grid, newBlobId, [r,c], id);
        }
    }

    return newBlobId;
}

const getBlobs = (grid) => {
    let blobId = grid.map(row => row.map(() => -1));
    const blobs = [];

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++){
            if(blobId[r][c] !== -1) continue;
            blobs.push({color: grid[r][c], cell: [r,c]});
            blobId = markBlob(grid, blobId, [r, c], blobs.length - 1);
        }
    }

    return {blobId, blobs}
}

const getNeighbors = (grid, blobId, blobCount) => {
    const neighbors = Array.from({length: blobCount}, () => new Set());

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++){
            const id = blobId[r][c];
            for(let [dr, dc] of adjacents) {
                const [nr,nc] = [r + dr, c + dc];
                const nid = blobId[nr]?.[nc];

                if(nid !== undefined && nid !== id) neighbors[id].add(nid);
            }
        }
    }
    return neighbors;
}

function unvisitedNeighborsByColor(cluster, neighbors, blobs, visited) {
    const byColor = new Map();
    for(let id of cluster) {
        for(let neighbor of neighbors[id]) {
            if(visited.has(neighbor)) continue;
            if(!byColor.has(blobs[neighbor].color)) {
                byColor.set(blobs[neighbor].color, []);
            }
            byColor.get(blobs[neighbor].color).push(neighbor);
        }
    }
    return byColor;
}

const getFillPlan = (start, blobs, neighbors) => {
    const visited = new Set([start]);
    let cluster = [start];
    const order = [];

    while(cluster.length) {
        const byColor = unvisitedNeighborsByColor(cluster, neighbors, blobs, visited);
        if(byColor.size === 0) break;

        cluster = []
        for(let [color, ids] of byColor){
            order.push(color);
            for(let id of ids) {
                if(visited.has(id)) continue;
                visited.add(id);
                cluster.push(id);
            }
        }
    }

    return order;
}

const bucketFill = (grid, targetColor) => {
    const {blobId, blobs} = getBlobs(grid);

    if(blobs.length === 1) {
        return blobs[0].color === targetColor ? 0 : 1;
    }

    const neighbors = getNeighbors(grid, blobId, blobs.length);

    let bestOrder;

    for(let i = 0; i < blobs.length; i++) {
        const order = getFillPlan(i, blobs, neighbors);
        if(!bestOrder || order.length < bestOrder) {
            bestOrder = order.length + 1;
        }
    }

    return bestOrder;
}

module.exports = bucketFill;