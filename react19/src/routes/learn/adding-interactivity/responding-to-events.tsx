import { createFileRoute } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export const Route = createFileRoute(
  "/learn/adding-interactivity/responding-to-events",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Toolbar />
      <Signup />
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
