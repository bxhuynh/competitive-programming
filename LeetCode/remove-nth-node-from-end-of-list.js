/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let l,
    r = head;

  //at begin, the right pointer will move n - 1 steps (since init r was 1 step)
  for (i = 1; i < n; i++) {
    // 1 <= n <= sz
    if (r.next) {
      r = r.next;
    }
  }

  //next, both left and right moving foward at same time until right pointer reach end
  // l = 3, r = 5 => need to remove 4
  while (r && r.next) {
    r = r.next;
    if (!l) l = head;
    else l = l.next;
  }

  //finally, remove n-th element
  // l.next is n-th element
  if (l && l.next) {
    l.next = l.next.next;
    return head;
  }
  // if n element is head => remove head
  return head.next;
};
