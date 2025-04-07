import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/learn/describing-the-ui/conditional-rendering",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <ItemIf isPacked={true} name="Helmet with a golden leaf" />
        <ItemIf isPacked={false} name="Photo of Tam" />
        <ItemNull isPacked={true} name="Helmet with a golden leaf" />
        <ItemNull isPacked={false} name="Photo of Tam" />
        <ItemTernary isPacked={true} name="Helmet with a golden leaf" />
        <ItemTernary isPacked={false} name="Photo of Tam" />
        <ItemLogicalAND isPacked={true} name="Helmet with a golden leaf" />
        <ItemLogicalAND isPacked={false} name="Photo of Tam" />
        <ItemVariable isPacked={true} name="Helmet with a golden leaf" />
        <ItemVariable isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}
function ItemIf({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}
function ItemNull({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}
function ItemTernary({ name, isPacked }) {
  return <li className="item">{name + (isPacked ? " ✅" : "")}</li>;
}
function ItemLogicalAND({ name, isPacked }) {
  return <li className="item">{name + (isPacked && " ✅")}</li>;
}
function ItemVariable({ name, isPacked }) {
  const content = isPacked ? name + " ✅" : name;
  return <li className="item">{content}</li>;
}
