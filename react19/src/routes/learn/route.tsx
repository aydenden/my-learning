import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/learn/describing-the-ui" className="item">
        describing-the-ui
      </Link>
      <Link to="/learn/adding-interactivity" className="[&.active]:font-bold">
        adding-interactivity
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
