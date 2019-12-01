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
var isPalindrome = function(head) {
  if(!head) return true
  if (head.next == null) return true
  let slow = head,fast = head,pre = null
  while(fast != null) {
      tmp = slow.next
      slow.next = pre
      slow = tmp
      fast = fast.next.next
  }
  let rmid = Math.floor(length / 2)
  let lmid = rmid - 1;
  let rnode = head, lnode = head
  while (rmid -- ) {
      rnode = rnode.next;
  }
  let pre = null
  lmid ++;
  while (lmid --) {
      let tmp = lnode.next
      lnode.next = pre
      pre = lnode
      lnode = tmp
  }
  lnode = pre
  if (length %2 == 1) rnode = rnode.next
  while (rnode != null & lnode != null) {
      if (rnode.val != lnode.val) {
          return false
      }
      rnode = rnode.next
      lnode = lnode.next
  }
  return true
};
