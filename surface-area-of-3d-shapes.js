/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    if(!grid || grid.length == 0) return 0;
    let length = grid.length;
    let width = grid[0].length;
    let frontalPlane = new Array(length), profilePlane = new Array(width), topView = 0;
    let area = 0;
    for (let i=0; i< length; i++) {
        frontalPlane[i] = 0;
    }
    for (let i=0; i< length; i++) {
        profilePlane[i] = 0;
    }
    for(let i = 0; i< length; i++) {
        for(let j = 0; j < width; j++) {
            if (j > 0) {
                frontalPlane[i] += Math.abs(grid[i][j] - grid[i][j-1]);
            }
            if (i > 0) {
                profilePlane[j] += Math.abs(grid[i][j] - grid[i - 1][j]);
            }
            // 
            if (j == 0) {
                frontalPlane[i] += grid[i][j];
            }
            if (j == width-1) {
                frontalPlane[j] += grid[i][j];
            }
            if(i == 0 ) {
                profilePlane[i] += grid[i][j];
            }
            if(i == length - 1 ) {
                profilePlane[i] += grid[i][j];
            }
            if(grid[i][j] != 0) topView ++ ;
        }
    } 
    for (let i=0; i< length; i++) {
        area += frontalPlane[i];    
    }
    for (let i=0; i< width; i++) {
        area += profilePlane[i];
    }
    area += topView * 2;
    return area;
};
