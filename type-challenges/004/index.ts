import type { MyPick, MyPick2 } from "./pick";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "description">;
type TodoPreview2 = MyPick2<Todo>;

// title 타입의 string이기에 숫자를 넣어서 에러 잘 나옴
const todo1: TodoPreview = {
  title: "1",
  description: "Clean room",
  completed: "dslkjfsld",
};
// title 타입의 string이기에 string을 넣어서 에러가 나지 않음
const todo2: TodoPreview = {
  title: "Clean room",
  description: "Clean room",
};

/**
 * MyPick2<Todo>
 */
// title 타입의 string이기에 숫자를 넣어서 에러 잘 나옴
const todo1_2: TodoPreview2 = {
  title: "title is required",
  title2: "1",
  description: "Clean room",
};

const check = (todo: TodoPreview2) => {
  todo.title = "Test";
  todo.title2 = "Test2";
};
