/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
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
  전체 공간복잡도(Space Complexity): O(n)
  (n: linked list의 노드 개수)
*/
function toArray(node: ListNode | null): number[] {
  const result: number[] = []; // SC: O(n)
  let current = node;

  while (current !== null) { // TC: O(n)
    result.push(current.val); // TC: O(1)
    current = current.next;
  }

  return result;
}

function isPalindrome1(head: ListNode | null): boolean {
  const nodeToArray = toArray(head); // tc O(n)
  const nodesLength = nodeToArray.length;
  const half = nodesLength / 2;

  const prev: number[] = [];
  for (let i = 0; i <= half; i++) {
    // tc O(n / 2)
    prev.push(nodeToArray[i]);
  }

  return nodeToArray
    .splice(nodesLength - half, nodesLength)
    .reverse() // tc O(n / 2)
    .every((curr, index) => {
      // tc O(n / 2)

      return curr === prev[index];
    });
}

/*
  전체 시간복잡도(Time Complexity): O(n) + O(n/2) + O(n/2) + O(n/2) -> O(n + n/2 + n/2 + n/2) -> O(2.5n) -> O(n)
  전체 공간복잡도(Space Complexity): O(n) + O(n/2) + O(n/2) -> O(n + n/2 + n/2) -> O(2n) -> O(n)
  (n: linked list의 노드 개수)
*/
function isPalindrome(head: ListNode | null): boolean {
  const nodeToArray = toArray(head); // TC: O(n), SC: O(n)
  const nodesLength = nodeToArray.length;
  const half = Math.floor(nodesLength / 2);

  const firstHalf = nodeToArray.slice(0, half); // TC: O(n/2), SC: O(n/2)
  const secondStart = nodesLength % 2 === 0 ? half : half + 1;
  const secondHalf = nodeToArray.slice(secondStart).reverse(); // TC: O(n/2), SC: O(n/2)

  return firstHalf.every((val, i) => val === secondHalf[i]); // TC: O(n/2)
}
// @lc code=end
