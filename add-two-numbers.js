/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1node = l1;
    let l2node = l2
    let j = 0
    let cur;
    let head;
    while(l1node != null || l2node != null) {
        let l1v = l1node ? l1node.val : 0
        let l2v = l2node ? l2node.val : 0
        let sum = l1v + l2v + j;
        if (sum > 9) {
            sum = sum % 10
            j = 1;
        } else {
            j = 0
        }
        if(head == null) {
            head = new ListNode(sum)
            cur = head
        } else {
            let a = new ListNode(sum)
            cur.next = a
            cur = a
        }
        l1node = l1node? l1node.next : null;
        l2node = l2node? l2node.next : null;
    }
    if (j != 0) {
        cur.next = new ListNode(j)
    }
    return head
};
