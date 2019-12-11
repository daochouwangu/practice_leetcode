/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length > 12) return [];
    let ip = [];
    address(s, 0,"", 1);
    function address(s, start, result, curIndex){
        if(start > s.length || curIndex > 4) {
            if(curIndex === 5 && start >= s.length) {
                ip.push(result.substring(0, result.length - 1))
            }
            return 
        }
        if(s.length - start < 5 - curIndex || s.length - start > (5-curIndex) * 3){
            return;
        }
        for(let i = 0; i < 3; i++){
            if(start + i < s.length){
                if(i>0 && s[start] === '0') break;
                let subip = parseInt(s.substring(start, start + i + 1));
                if(subip>255) continue;
                address(s, start+i+1, result+subip+".", curIndex + 1);
            } 
        }
        return
    }
    return ip;
};
