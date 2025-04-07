import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/learn/describing-the-ui/passing-props-to-a-component",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to="/learn/describing-the-ui/passing-props-to-a-component/avatar"
        className="[&.active]:font-bold"
      >
        avatar
      </Link>
      <Link
        to="/learn/describing-the-ui/passing-props-to-a-component/clock"
        className="[&.active]:font-bold"
      >
        clock
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
