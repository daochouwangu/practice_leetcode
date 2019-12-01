/**
 * @isBest false
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let length = points.length
  if (length == 1) return 0;
  let start = new Point(points[0][0], points[0][1]); 
  let time = 0;
  for(let i = 1; i<length; i++) {
      let next = new Point(points[i][0], points[i][1]);
      time += start.road(next);
      start = next;
  }
  return time;
};
class Point {
  constructor(x,y){
      this.x = x;
      this.y = y;
  }
  road(end){
      let xDis = end.x - this.x, 
          yDis = end.y - this.y;
      let time = 0 ;
      for (;xDis != 0 || yDis !=0 ; ) {
          time ++;
          if (xDis != 0) {
              xDis = xDis > 0 ? xDis - 1 : xDis + 1;
          }
          if (yDis != 0) {
              yDis = yDis > 0 ? yDis - 1 : yDis + 1;
          }
      }
      return time;
  }
}
