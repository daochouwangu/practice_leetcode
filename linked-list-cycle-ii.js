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
var detectCycle = function(head) {
  if (head == null || head.next == null) {
      return null
  }
  let cur = head
  let myMap = new Map()
  for(let i=0;cur.next != null;i++){
      if (myMap.has(cur.next)) {
          return cur.next
      }
      myMap.set(cur, i)
      cur = cur.next
  }
  return null
};
