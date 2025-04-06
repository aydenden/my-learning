import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/tic-tac-toe" className="[&.active]:font-bold">
          틱택토 듀토리얼
        </Link>
        <Link to="/thinking-in-react" className="[&.active]:font-bold">
          리액트로 사고하기
        </Link>
        <Link to="/describing-the-ui" className="[&.active]:font-bold">
          Describing the UI
        </Link>
        <Link to="/writing-markup-with-jsx" className="[&.active]:font-bold">
          writing-markup-with-jsx
        </Link>
        <Link
          to="/javascript-in-jsx-with-curly-braces"
          className="[&.active]:font-bold"
        >
          javascript-in-jsx-with-curly-braces
        </Link>
        <Link
          to="//passing-props-to-a-component"
          className="[&.active]:font-bold"
        >
          javascript-in-jsx-with-curly-braces
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
