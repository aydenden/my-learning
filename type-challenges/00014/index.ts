/*
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 * First of Array
 * - Implement a generic First<T> that takes an Array T and returns its first element's type.
 * */

//
type First<T extends Array<any>> = T[0];
// github 모법 답안
// 빈 배열일 경우 never를 type 반환
/**
 * llm 설명
 * TypeScript에서 빈 배열의 첫 번째 요소 타입을 never로 반환하는 것은 타입 안전성을 높이는 데 도움이 됩니다.
 * 이유:
 * never는 "절대 발생하지 않는 값"을 의미합니다. 즉, 빈 배열에서 첫 번째 요소를 얻으려는 시도는 논리적으로 불가능하므로 never가 적합합니다.
 * 만약 T[0]만 사용하면, 빈 배열의 경우 undefined가 반환됩니다. 하지만 타입 시스템에서는 실제로 값이 없다는 것을 명확히 표현하기 위해 never가 더 엄격합니다.
 * never를 반환하면, 이후 해당 타입을 사용하는 코드에서 실수로 값을 할당하거나 접근하려고 할 때 타입 에러가 발생하여 버그를 사전에 방지할 수 있습니다.
 */
type First2<T extends Array<any>> = T extends [] ? never : T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First2<arr3>; // expected to be 3
type head3_2 = First<arr3>; // expected to be 3

const a1: head1 = 1;
const a1: head1 = "1";
const a3: head1 = "a";

const b1: head2 = "3";
const b2: head2 = 2;
const b3: head2 = 3;

const c1: head3 = "3";
const c2: head3 = 2;
const c3: head3 = 3;

const c1_1: head3_2 = "3";
const c2_1: head3_2 = 2;
const c3_1: head3_2 = 3;
