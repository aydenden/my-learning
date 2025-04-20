import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/learn/adding-interactivity/render-and-commit",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <Gallery />;
}

function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
