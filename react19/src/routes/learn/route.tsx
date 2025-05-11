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
