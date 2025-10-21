/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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
  전체 시간복잡도(Time Complexity): O(n)
  전체 공간복잡도(Space Complexity): O(1)
  (n: 연결 리스트의 노드 개수)

  동작 원리:
  1. Dummy 노드로 left=1 엣지 케이스 처리
  2. left-1 위치까지 이동하여 beforeLeft 찾기 - TC: O(left)
  3. left~right 구간을 표준 reversal로 역순 - TC: O(right-left)
  4. 역순된 구간을 앞뒤로 연결 복원 - TC: O(1)
*/
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || left === right) return head;

  // Dummy 노드로 left=1 엣지 케이스 처리 - TC: O(1), SC: O(1)
  const dummy = new ListNode(0);
  dummy.next = head;

  // Step 1: left-1 위치까지 이동 - TC: O(left)
  let beforeLeft = dummy;
  for (let i = 0; i < left - 1; i++) {
    beforeLeft = beforeLeft.next!;
  }

  // Step 2: left~right 구간 역순 - TC: O(right-left)
  let prev: ListNode | null = null;
  let curr: ListNode | null = beforeLeft.next; // left 노드
  const leftNode = curr; // 역순 후 꼬리가 될 노드

  // 표준 reversal 기법 - TC: O(right-left+1)
  for (let i = 0; i <= right - left; i++) {
    const next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
  }
  // 반복 후: prev = right 노드 (역순된 head), curr = right+1 노드

  // Step 3: 연결 복원 - TC: O(1)
  beforeLeft.next = prev; // left 이전과 역순된 head 연결
  leftNode!.next = curr; // 역순된 꼬리와 right 이후 연결

  return dummy.next;
}
// @lc code=end
