/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// 단순 최소, 최대 값을 찾기 때문에 실패
function maxProfit1(prices: number[]): number {
    let result = 0;
    let max = 0;
    let min = Number.MAX_VALUE;

    for(const price of prices) {
        if(price < min) {
            min = price
        }

        if(price > min && price > max) {
            max = price
        }
    }

    if(max > min) {
        result = max - min
    }

    return result
};


// Cladue Code로 min,max가 아닌 시간 순서에 대한 문제라는 힌트를 받음
// 한번 배열을 순회하기 때문에 O(n)
// @lc code=start
function maxProfit(prices: number[]): number {
    let result = 0;
    let min: number | null = null;

    for(const price of prices) {
        if(min !== null) {
            const calcMax = price - min;
            if(calcMax > result) {
                result = calcMax
            }
        }

        if(min === null || min > price) {
            min = price
        }
    }
    return result
};
// @lc code=end


// Claude Code 작성
// 알고리즘적인 최적화는 더 이상 없으면 조건 없이 min, max로 더욱 간결한 코드 가능함을 피드백
function maxProfit3(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // 현재 가격에서 팔았을 때의 이익 계산
        const profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);

        // 최저가 업데이트
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
};

