/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let dict = Object.create(null)
    for(let i of s) {
        if(!dict[i]) {
            dict[i] = 1;
        } else {
            dict[i] ++;
        }
    }
    let arr = []
    let result = ""
    for(let i in dict){
        arr.push(i)
    }
    for(let i = 0; i<arr.length;i++){
        let max = i;
        for(let j = i; j<arr.length;j++){
            if(dict[arr[j]] > dict[arr[max]]) {
                max = j
            }
        }
        result += arr[max].repeat(dict[arr[max]]);
        [arr[max], arr[i]] = [arr[i], arr[max]]
    }
    return result
};
