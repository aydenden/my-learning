// title 타입의 string이기에 숫자를 넣어서 에러 잘 나옴
const todo1 = {
    title: "1",
    description: "Clean room",
    completed: "dslkjfsld",
};
// title 타입의 string이기에 string을 넣어서 에러가 나지 않음
const todo2 = {
    title: "Clean room",
};
/**
 * MyPick2<Todo>
 */
// title 타입의 string이기에 숫자를 넣어서 에러 잘 나옴
const todo1_2 = {
    title: "title is required",
    title2: "1",
};
const check = (todo) => {
    todo.title = "Test";
    todo.title2 = "Test2";
};
export {};
