/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  if(tomatoSlices !=0 && cheeseSlices > tomatoSlices) {
      return []
  }
  let han = (tomatoSlices - 2 * cheeseSlices) / 2
  if (Math.floor(han) !== han || han < 0 || han > cheeseSlices) {
      return []
  }
  return [han, cheeseSlices-han]
};
