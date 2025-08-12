/*
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 * First of Array
 * - Implement a generic First<T> that takes an Array T and returns its first element's type.
 * */

//
type First<T extends Array<any>> = T[0];
// github 모법 답안
// 빈 배열일 경우 never를 type 반환
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
