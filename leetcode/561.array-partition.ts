/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// O(n log n)
function arrayPairSum1(nums: number[]): number {
    const sorted = nums.sort((a, b) => a-b);

    let result = 0;
    for(let i = 0; i < nums.length; i+=2) {
        result += Math.min(sorted[i], sorted[i +1]);
    }

    return result
};


// @lc code=start
function arrayPairSum(nums: number[]): number {
    const sorted = nums.sort((a, b) => a-b);

    let result = 0;
    for(let i = 0; i < nums.length; i+=2) {
        // 정렬을 하였기 때문에 첫번째가 무조건 작음
        result += sorted[i];
    }

    return result
};
// @lc code=end

