/**
 * @param {string} s
 * @return {string}
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 1) {
       return s
    }
    // 巧妙的方式解决了两种中心
    let str = '#' + s.split('').join('#') + '#'
    let rl = []
    let mx = 0
    let pos = 0
    // 最大长度
    let ml = 0
    for (let i = 0; i < str.length; i++){
        // 优化，快了至少50ms,优化原理： 当前坐标若在最大计算半径内，则当前值必能找到一个根据中心对称的点，而那个点的坐标已经被计算过，但是可能自己后面的超出半径的值不一定能形成回文，所以取最小值。
        if (i < mx) {
            rl[i] = Math.min(rl[2 * pos - i], mx - i)
        } else {
            rl[i] = 1
        }
        // 中心向两边拓展
        while (i - rl[i] > 0 && i + rl[i] < str.length && str[i - rl[i]] == str[i + rl[i]]) {
            rl[i]++
        }
        // 当前计算半径超过mx
        if (rl[i] + i - 1 > mx) {
            mx = rl[i] + i - 1              
            pos = i
        }
        // 更新最大长度
        if (ml < rl[i]) {
            ml = rl[i]
            sub = str.substring(i - rl[i]+1, i + rl[i])
        }
    }
    return sub.split('#').join('').trim()
};
