/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for (let i of s) {
        switch(i) {
            case "(": arr.push(")"); break;
            case "[": arr.push("]"); break;
            case "{": arr.push("}"); break;
            default: if(i!== arr.pop()) {return false;}
        }
    }
    return arr.length == 0;
};
