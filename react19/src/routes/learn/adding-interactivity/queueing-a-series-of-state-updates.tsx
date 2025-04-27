import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
  "/learn/adding-interactivity/queueing-a-series-of-state-updates",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // 변경되지 않은 number를 사용하기 때문에  3이 아닌 1이 증가한다.
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          // 리액트 큐에 적잭된 내부 함수는 이전 상태를 사용하여 업데이트한다.
          // 그렇기 때문에 위와 다르게 3이 증가한다.
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          // 5가 큐에 적재 된 후 마지막 값에서 +1이기 때문에 6이 증가한다.
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>
      <button
        onClick={() => {
          // 앞에 적재된 큐가 있더라도 최종적으로 42로 덮어쓴다.
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        last overwrite
      </button>
    </>
  );
}
