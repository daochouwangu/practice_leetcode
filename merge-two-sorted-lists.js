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
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    let head;
    if (l1.val < l2.val) {
        head = new ListNode(l1.val)
        l1 = l1.next
    } else {
        head = new ListNode(l2.val)
        l2 = l2.next
    }
    let cur = head
    while(l1!=null && l2!=null) {
        if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            cur.next = new ListNode(l2.val)
            l2 = l2.next
        }
        cur = cur.next
    }
    while (l1!=null) {cur.next = l1;l1 = null}
    while (l2!=null) {cur.next = l2;l2 = null}
    return head
};
