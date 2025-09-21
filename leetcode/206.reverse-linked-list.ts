/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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
  전체 시간복잡도(Time Complexity): O(1) + O(1) + O(n) + O(1) -> O(n)
  전체 공간복잡도(Space Complexity): O(1) + O(1) + O(1) -> O(1)
  (n: linked list의 노드 개수)
*/
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || !head.next) { // TC: O(1), SC: O(1)
    return head; // TC: O(1)
  }

  let prev = null; // TC: O(1), SC: O(1)
  let current = head; // TC: O(1), SC: O(1)

  while (current !== null) { // TC: O(n) - n번 반복
    let next = current.next; // TC: O(1), SC: O(1)
    current.next = prev; // TC: O(1)
    prev = current; // TC: O(1)
    current = next; // TC: O(1)
  }

  return prev; // TC: O(1)
}
// @lc code=end
