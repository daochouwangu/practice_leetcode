/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null || head.next == null){
        return head
    }
    let cur = head
    let prev = null
    let newHead = head.next
    while(cur !== null && cur.next !== null) {
        let [swap1, swap2]  = [cur, cur.next]
        let nextNode = swap2.next
        if (prev != null) {
            prev.next = swap2
        }
        swap2.next = swap1
        swap1.next = nextNode
        cur = nextNode
        prev = swap1
    }
    return newHead
};
