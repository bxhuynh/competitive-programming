/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let res: ListNode = new ListNode();
  let curr: ListNode = res;

  while (list1 && list2) {
    curr.next = new ListNode();
    curr = curr.next;
    if (list1.val <= list2.val) {
      curr.val = list1.val;
      list1 = list1.next;
    } else {
      curr.val = list2.val;
      list2 = list2.next;
    }
  }

  while (list1) {
    curr.next = new ListNode();
    curr = curr.next;
    curr.val = list1.val;
    list1 = list1.next;
  }
  while (list2) {
    curr.next = new ListNode();
    curr = curr.next;
    curr.val = list2.val;

    list2 = list2.next;
  }

  return res.next;
}
