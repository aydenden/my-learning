import { createFileRoute } from "@tanstack/react-router";
import ThinkingInReact from "../step/thinking-in-react";

export const Route = createFileRoute("/thinking-in-react")({
  component: ThinkingInReact,
});
