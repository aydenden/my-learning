import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/learn/describing-the-ui" className="[&.active]:font-bold">
        describing-the-ui
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
