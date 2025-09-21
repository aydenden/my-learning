/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
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

/*
  전체 시간복잡도(Time Complexity): O(1) + O(1) + O(1) + O(max(m, n)) + O(1) -> O(max(m, n))
  전체 공간복잡도(Space Complexity): O(1) + O(1) + O(1) + O(max(m, n)) -> O(max(m, n))
  (m: l1의 노드 개수, n: l2의 노드 개수)
*/
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode(0); // TC: O(1), SC: O(1)
  let current = result; // TC: O(1), SC: O(1)
  let carry = 0; // TC: O(1), SC: O(1)

  // TC: O(max(m, n))
  while (l1 || l2 || carry) {
    let val1 = l1?.val || 0; // TC: O(1)
    let val2 = l2?.val || 0; // TC: O(1)

    let sum = val1 + val2 + carry; // TC: O(1)

    current.next = new ListNode(sum % 10); // TC: O(1), SC: O(1) - 새 노드

    carry = Math.floor(sum / 10); // TC: O(1)

    current = current.next; // TC: O(1)
    if (l1) l1 = l1.next; // TC: O(1)
    if (l2) l2 = l2.next; // TC: O(1)
  }

  return result.next; // TC: O(1)
}
// @lc code=end
