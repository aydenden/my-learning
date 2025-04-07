import { createFileRoute } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export const Route = createFileRoute(
  "/learn/describing-the-ui/passing-props-to-a-component/avatar",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Card({ children }: PropsWithChildren) {
  return <div className="card">{children}</div>;
}
function Avatar({ person, size = 50 }: { person: Person; size?: number }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
function getImageUrl(person: Person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

interface Person {
  name: string;
  imageId: string;
}
