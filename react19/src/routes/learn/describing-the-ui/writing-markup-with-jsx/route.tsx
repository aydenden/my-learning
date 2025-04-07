import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/learn/describing-the-ui/writing-markup-with-jsx",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to="/learn/describing-the-ui/writing-markup-with-jsx/syntax-error"
        className="[&.active]:font-bold"
      >
        Syntax Error
      </Link>
      <Link
        to="/learn/describing-the-ui/writing-markup-with-jsx/rule"
        className="[&.active]:font-bold"
      >
        기본 규칙
      </Link>

      <br />
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      <br />
      <Outlet />
    </div>
  );
}
