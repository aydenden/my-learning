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
      <Link to={"/learn/adding-interactivity/state-as-a-snapshot"}>
        state-as-a-snapshot
      </Link>
      <Link
        to={"/learn/adding-interactivity/queueing-a-series-of-state-updates"}
      >
        queueing-a-series-of-state-updates
      </Link>
      <Link to={"/learn/adding-interactivity/updating-objects-in-state"}>
        updating-objects-in-state
      </Link>
      <Link to={"/learn/adding-interactivity/updating-arrays-in-state"}>
        updating-arrays-in-state
      </Link>
      <br />
      <Outlet />
    </div>
  );
}
