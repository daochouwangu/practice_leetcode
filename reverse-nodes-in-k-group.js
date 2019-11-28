/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null || head.next == null || k == 1) {
        return head
    }
    let newHead = head
    let cur = head
    let count = 0
    let pre = null
    let arr = []
    while(cur != null) {
        arr.push(cur)
        cur = cur.next
        if(arr.length == k) {
            let kHead = reverse(arr)
            if (pre != null) {
                pre.next = kHead
            }else {
                newHead = kHead
            }
            pre = arr[0]
            arr = [];
        }
        if(cur == null && pre) {
            pre.next = arr[0]
        }
    }
    return newHead
};
var reverse = function (listNodes) {
    let stack = [...listNodes]
    let newHead = stack.pop()
    let cur;
    let pre = newHead
    while(stack.length != 0) {
        cur = stack.pop()
        pre.next = cur
        pre = cur
    }
    return newHead
}
