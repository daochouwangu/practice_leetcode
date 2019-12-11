/**
 * @param {string[]} strs
 * @todo 二分查找
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const length = strs.length
    if(length === 0){
        return '';
    }
    if(length === 1){
        return strs[0];
    }
    return samePrefix(strs.slice(0,length/2), strs.slice(length/2, length))[0]
};
var samePrefix = function(strs1, strs2) {
    if(strs1.length > 1) {
        const length = strs1.length
        return samePrefix(samePrefix(strs1.slice(0, length/2), strs1.slice(length/2, length)), strs2)
    }
    if(strs2.length > 1) {
        const length = strs2.length
        return samePrefix(strs1, samePrefix(strs2.slice(0, length/2), strs2.slice(length/2, length)))
    }
    let a = strs1[0], b = strs2[0];
    let point = 0;
    while(point < a.length && point < b.length) {
        if(a[point] !== b[point]) {
            break;
        }
        point ++;
    }
    if(point === 0) {
        return [""]
    }
    return [a.substring(0, point)];
}
