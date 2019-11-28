/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let max = 1;
    let curStr = s[0]
    outer: for(start = 0;start < s.length;){
        if (max + start > s.length) {
            return max;
        }
        for(cur = curStr.length + start; cur < s.length; cur++){
            let index = curStr.indexOf(s[cur]);
            if(index != -1){
                max = max > curStr.length ? max : curStr.length;
                curStr = s.substring(start + index + 1, start + curStr.length);
                start = start + index + 1;
                break;
            } else {
                curStr += s[cur];
                max = max > curStr.length ? max : curStr.length;
            }
        }
		if (cur == s.length) return max;
    }
    return max;
};
