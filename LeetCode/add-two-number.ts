class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const root: ListNode = {
    val: (l1.val + l2.val) % 10,
    next: null,
  };

  let temp = root;
  let rem = l1.val + l2.val >= 10 ? 1 : 0;

  while (l1.next && l2.next) {
    l1 = l1.next;
    l2 = l2.next;
    temp.next = {
      val: (l1.val + l2.val + rem) % 10,
      next: null,
    };
    temp = temp.next;
    rem = l1.val + l2.val + rem >= 10 ? 1 : 0;
  }

  while (l1.next) {
    l1 = l1.next;
    temp.next = {
      val: (l1.val + rem) % 10,
      next: null,
    };
    temp = temp.next;
    rem = l1.val + rem >= 10 ? 1 : 0;
  }

  while (l2.next) {
    l2 = l2.next;
    temp.next = {
      val: (l2.val + rem) % 10,
      next: null,
    };
    temp = temp.next;
    rem = l2.val + rem >= 10 ? 1 : 0;
  }

  if (rem) {
    temp.next = {
      val: rem,
      next: null,
    };
  }

  return root;
}
