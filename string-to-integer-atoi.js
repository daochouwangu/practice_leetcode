/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let sum = 0
    let isPositive = 1;
    str = str.trim();
    if (!/^(?:\-|\+|[0-9])/.test(str)) {
        return sum;
    } 
    if(str[0] == "-") {
        isPositive = -1;
    }
    if (/^(?:\-|\+)/.test(str)) {
        str = str.substring(1)
    }
    sum = getSum(str) * isPositive
    let Max = Math.pow(2,31) - 1

    if (sum > Max) {
        return Max
    } else if (sum < - Max - 1) {
        return  - Max - 1
    }
    return sum
};
var getSum = function(str) {
    let sum = 0
    let arr = str.split('')
    for (let char of arr){
        if(!/[0-9]/.test(char)) break;
        sum = sum * 10 + parseInt(char)
    }
    return sum
}
