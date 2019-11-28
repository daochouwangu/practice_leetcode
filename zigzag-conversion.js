/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let result = "";
    let length = s.length;
    for(let i = 0;i<numRows; i++){
        let index = 0;
        for(let j=0;;j++){
            while(true) {
                if(j == 0) {
                    index = i
                    break;
                }
                // 首尾
                if(i == 0 || i == numRows-1) {
                    index += (numRows - 1) * 2
                    break;
                }
                // 如果是中间的
                if(j % 2 == 1){
                    index +=  2 * (numRows - i -1)
                    break;
                }else {
                    index += 2 * i
                    break;
                }
            }
            if(index >= length) break;
            result += s[index];
        }
    }
    return result;
};
