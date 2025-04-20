import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/adding-interactivity")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to={"/learn/adding-interactivity/responding-to-events"}>
        responding-to-events
      </Link>
      <Link to={"/learn/adding-interactivity/state-a-components-memory"}>
        state-a-components-memory
      </Link>
      <br />
      <Outlet />
    </div>
  );
}
