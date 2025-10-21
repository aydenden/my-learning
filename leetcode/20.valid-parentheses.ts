/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/*
  전체 시간복잡도(Time Complexity): O(n)
  전체 공간복잡도(Space Complexity): O(n)
  (n: 문자열의 길이)
*/
function isValid(s: string): boolean {
    // 홀수 길이는 절대 유효할 수 없음 (조기 반환)
    if (s.length % 2 !== 0) return false; // TC: O(1), SC: O(1)

    const stack: string[] = []; // SC: O(n)

    // 닫는 괄호 → 여는 괄호 매핑
    const pairs: Record<string, string> = { // SC: O(1)
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) { // TC: O(n)
        // 여는 괄호인 경우: Stack에 추가
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // TC: O(1)
        }
        // 닫는 괄호인 경우: 매칭 확인
        else {
            // Stack이 비어있거나 top과 매칭 안 되면 실패
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return false; // TC: O(1)
            }
            stack.pop(); // TC: O(1)
        }
    }

    // 모든 괄호가 올바르게 닫혔는지 확인
    return stack.length === 0; // TC: O(1)
};
// @lc code=end

