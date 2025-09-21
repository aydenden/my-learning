# LeetCode 학습 가이드라인

## 문제 해결 프로세스

사용자가 문제를 문의하면 다음 단계를 따라 진행합니다:

### 1. 문제 검색 및 조회
- LeetCode MCP를 활용하여 문제 검색
- 파일명(예: 121.best-time-to-buy-and-sell-stock.ts)과 내용에서 문제 번호와 문제 이름 매칭
- 정확한 문제 정보 확인

### 2. 3단계 학습 접근법

#### Step 1: 핵심 포인트 파악
- 문제의 핵심 아이디어와 패턴 식별
- 필요한 자료구조와 알고리즘 개념 설명
- 문제 해결의 핵심 키포인트 제시

#### Step 2: 접근 방법 설명
- 단계별 해결 전략 수립
- 다양한 접근법 비교 (brute force → 최적화)
- 각 방법의 장단점 분석

#### Step 3: 종합 풀이 및 학습 방법
- 완전한 풀이 과정 설명
- 코드 구현과 최적화 기법
- 유사 문제 연결 및 학습 방향 제시
- 실전 응용 방법

## 문서 생성 규칙

### 파일 명명 규칙
- 각 문제의 TypeScript 파일(예: 121.best-time-to-buy-and-sell-stock.ts)과 동일한 이름의 마크다운 파일을 생성
- 파일명 형식: `[문제번호].[문제이름].md`

### 문서 구조
```markdown
# [문제번호]. [문제제목]

## 문제 분석
- 핵심 포인트
- 요구사항 분석
- 제약사항 확인

## 접근 방법
### 방법 1: [접근법명]
- 시간복잡도: O(?)
- 공간복잡도: O(?)
- 설명

### 방법 2: [최적화된 접근법명]
- 시간복잡도: O(?)
- 공간복잡도: O(?)
- 설명

## 최종 풀이
```typescript
/*
  전체 시간복잡도(Time Complexity): O(n) + O(n/2) + ... -> O(n)
  전체 공간복잡도(Space Complexity): O(n) + O(n/2) + ... -> O(n)
  (n: 리스트/배열의 크기)
*/
function solutionFunction(): returnType {
  const operation = someAction(); // TC: O(?), SC: O(?)
  return result; // TC: O(?), SC: O(?)
}
```

## 학습 포인트
- 핵심 개념
- 유사 문제
- 실전 응용
```

## 코드 작성 규칙

### 복잡도 표기 규칙
1. **함수 위 주석**: 전체 시간/공간 복잡도를 함수 바로 위에 주석으로 표기
   ```typescript
   /*
     전체 시간복잡도(Time Complexity): O(n) + O(n/2) + O(n/2) -> O(2n) -> O(n)
     전체 공간복잡도(Space Complexity): O(n) + O(1) -> O(n)
     (n: 데이터 구조의 크기 설명)
   */
   function functionName() { ... }
   ```

2. **라인별 주석**: 각 주요 연산 라인 옆에 해당 라인의 개별 TC/SC 표기
   ```typescript
   const array = list.slice(0, half); // TC: O(n/2), SC: O(n/2)
   const result = array.reverse(); // TC: O(n/2), SC: O(1)
   return array.every((val, i) => val === other[i]); // TC: O(n/2)
   ```

3. **복잡도 계산 과정**: 함수 위 주석에서 각 연산의 복잡도를 더해서 최종 Big O 도출 과정 표시

### TypeScript 파일 구조
- 헬퍼 함수들이 있다면 메인 함수 위에 배치
- 각 함수마다 위 복잡도 표기 규칙 적용
- 최종 solution 함수는 파일 하단에 배치

## 워크플로우
1. 사용자 문제 문의 → LeetCode MCP로 문제 검색
2. 파일명 매칭으로 해당 문제 파일 확인
3. 3단계 학습 접근법으로 설명
4. xxx.md 파일 생성 (기존 파일 있으면 업데이트)