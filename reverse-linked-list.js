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
 
var reverseList = function(head) {
    let [cur, prev] = [head, null]
    while(cur !== null){
        [cur.next, prev, cur ]= [prev, cur, cur.next]
    }
    return prev
};
*/
var reverseList = function(head) {
  if (head === null) return null;
  let h = head;
  let frt = head;
  let bhd = null;
  while(frt.next !== null) {
      bhd = frt.next;
      frt.next = bhd.next;
      bhd.next = h;
      h = bhd;
  }

  return h;

};
