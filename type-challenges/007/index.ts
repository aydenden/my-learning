/**
 * 문제: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 * Implement the built-in Readonly<T> generic without using it.
 *
 * Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

/**
 * 1. T generic로 readonly로 만들 type을 받음
 * 2. keyof T로 T의 모든 키를 순회함
 * 3. readonly 키워드를 사용하여 각 키를 readonly로 만듦
 * 4. T[P]를 사용하여 각 키의 타입을 유지함
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hey2"; // TS2540: Cannot assign to title because it is a read-only property.

// 그러면 readonly가 object freeze와 같은지 확인해보자
console.log(Object.isFrozen(todo)); // false

// type 에러를 무시하고 값을 바꿔보면
// @ts-ignore
todo.title = "Hey2";
console.log(todo.title); // Hey2

// readonly는 object freeze와 다르다. readonly는 타입 시스템에서만 작동하고, 실제 객체를 변경할 수 있다.
// 그래서 freeze를 사용할 때 Readonly를 사용하는게 적절하다고 공식 문서에서도 권장한다.
Object.freeze(todo);

// 값을 변경해보면
// todo.title = "Hey3";
/**
 * node.js 에러가 발생한다.
 * TypeError: Cannot assign to read only property 'title' of object '#<Object>'
 */
console.log(Object.isFrozen(todo));

/**
 * ref
 * - https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
 * - https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 *
 */

// todo 객체의 object 속성 보기
// writable, configurable 속성이 false로 되어있다.
// 이는 object.freeze(todo)로 인해 객체가 변경 불가능하게 되었음을 의미한다.
console.log(Object.getOwnPropertyDescriptors(todo));
/**
 * {
 *   title: {
 *     value: 'Hey2',
 *     writable: false,
 *     enumerable: true,
 *     configurable: false
 *   },
 *   description: {
 *     value: 'foobar',
 *     writable: false,
 *     enumerable: true,
 *     configurable: false
 *   }
 * }
 */

const todo2 = {
  title: "Hey",
  description: "foobar",
  innerTodos: {},
};
Object.freeze(todo2);
console.log(Object.getOwnPropertyDescriptors(todo2));

/**
 * AI에게 물어본 결과:
 *   Object.freeze는 객체의 "최상위(얕은)" 속성만을 동결(shallow freeze)합니다. 즉, freeze된 객체의 직접적인 프로퍼티(속성)는 변경, 추가, 삭제가 불가능하지만, 그 프로퍼티가 객체(참조형)일 경우 그 내부의 속성은 여전히 변경이 가능합니다.
 *   ECMAScript 언어 스펙(ECMA-262)에 따르면:
 *   Object.freeze(obj)는 obj의 [[Extensible]] 내부 슬롯을 false로 만들고, obj의 모든 own property의 [[Writable]]과 [[Configurable]] 속성을 false로 만듭니다.
 *   하지만, 이 작업은 obj의 "own property"에만 적용됩니다. 만약 프로퍼티 값이 객체라면, 그 객체는 별도로 freeze되지 않습니다.
 *   즉, todo2.innerTodos는 여전히 일반 객체이기 때문에, 그 안에 동적으로 프로퍼티(title2 등)를 추가하거나 수정할 수 있습니다. innerTodos까지 동결하려면 Object.freeze(todo2.innerTodos)도 별도로 호출해야 합니다.
 *   이런 동작은 ECMAScript 명세(예: ECMA-262 19.1.2.6 Object.freeze ( O ))에 명시되어 있습니다. 깊은 동결(Deep Freeze)을 원한다면, 재귀적으로 모든 하위 객체에 Object.freeze를 적용하는 별도의 함수가 필요합니다.
 */
todo2.innerTodos.title2 = "Hey2";
console.log(Object.getOwnPropertyDescriptors(todo2.innerTodos));
