import { createFileRoute } from "@tanstack/react-router";
import { Gallery, Profile } from "@/components/import-and-export";

export const Route = createFileRoute(
  "/describing-the-ui/importing-and-exporting-components/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello !</div>)
      <Profile />
      <Gallery />
    </>
  );
}
