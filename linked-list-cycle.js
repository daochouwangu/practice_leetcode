/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    let cur = head
    let myMap = new Map()
    for(let i=0;cur.next != null;i++){
        if (myMap.has(cur.next)) {
            return true
        }
        myMap.set(cur.next, i)
        cur = cur.next
    }
    return false
};
