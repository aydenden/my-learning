/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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
  전체 시간복잡도(Time Complexity): O(1) + O(1) + O(n + m) + O(1) + O(1) -> O(n + m + 4) -> O(n + m)
  전체 공간복잡도(Space Complexity): O(1) + O(1) + O(1) + O(1) -> O(4) -> O(1)
  (n: list1의 노드 개수, m: list2의 노드 개수)
*/
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let resultNode = new ListNode(); // TC: O(1), SC: O(1)
  let currnent = resultNode; // TC: O(1)

  while (list1 !== null && list2 !== null) { // TC: O(n + m)
    if (list1.val <= list2.val) {
      currnent.next = list1; // TC: O(1)
      list1 = list1.next; // TC: O(1)
    } else {
      currnent.next = list2; // TC: O(1)
      list2 = list2.next; // TC: O(1)
    }
    currnent = currnent.next; // TC: O(1)
  }

  currnent.next = list1 !== null ? list1 : list2; // TC: O(1)
  return resultNode.next; // TC: O(1)
}
// @lc code=end
