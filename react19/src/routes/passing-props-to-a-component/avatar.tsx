import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/passing-props-to-a-component/avatar")({
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

function Card({ children }) {
  return <div className="card">{children}</div>;
}
function Avatar({ person, size = 50 }) {
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
function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
