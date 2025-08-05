/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 * Tuple to Object
 *   Given an array, transform it into an object type and the key/value must be in the provided array.
 * */

/**
 * T generic 타입을 readonly any[] 타입으로 제한
 * K는 T의 각 요소를 나타내는 타입
 * T[number]는 T 배열의 각 요소를 순회하여 K 타입을 생성
 * 최종적으로, 각 K를 키로 하고, K 자체를 값으로 가지는 객체 타입을 생성
 */
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type result = TupleToObject<typeof tuple>;

const obj: result = {
  "model X": "model X",
  "model Y": "model Y",
  tesla: "tesla",
  "model 3": "model 3",
};
