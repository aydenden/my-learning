import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/managing-state")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to="/learn/managing-state/reacting-to-input-with-state"
        className="[&.active]:font-bold"
      >
        reacting-to-input-with-state
      </Link>
      <Link
        to="/learn/managing-state/choosing-the-state-structure"
        className="[&.active]:font-bold"
      >
        choosing-the-state-structure
      </Link>
      <Link
        to="/learn/managing-state/sharing-state-between-components"
        className="[&.active]:font-bold"
      >
        sharing-state-between-components
      </Link>
      <Link
        to="/learn/managing-state/preserving-and-resetting-state"
        className="[&.active]:font-bold"
      >
        State를 보존하고 초기화하기
      </Link>
      <Link
        to="/learn/managing-state/extracting-state-logic-into-a-reducer"
        className="[&.active]:font-bold"
      >
        state 로직을 reducer로 작성하기
      </Link>
      <Link
        to="/learn/managing-state/scaling-up-with-reducer-and-context"
        className="[&.active]:font-bold"
      >
        Reducer와 Context로 앱 확장하기
      </Link>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      <Outlet />
    </div>
  );
}
