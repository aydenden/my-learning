export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * 1. T generic type의 interface를 받습니다.
 * 2. K는 T의 key 중 일부를 선택할 수 있는 타입으로,
 *    keyof T를 사용하여 T의 key들을 가져옵니다.
 * 3. Mapped type을 사용하여 K에 해당하는 key들만 포함하는 새로운 타입을 생성합니다.
 *    즉, T의 모든 key 중 K에 있는 key들만 포함됩니다.
 * 4. [P in K]는 K에 있는 각 key를 순회하며,
 *    T[P]를 통해 해당 key의 타입을 가져옵니다.
 * 5. 결과적으로, MyPick<T, K>는 T에서 K에 해당하는 key들만 포함하는 새로운 타입을 반환합니다.
 */

export type MyPick2<T> = {
  [P in keyof T]: T[P];
};
