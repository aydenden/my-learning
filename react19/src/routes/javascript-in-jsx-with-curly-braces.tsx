import { createFileRoute } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export const Route = createFileRoute("/javascript-in-jsx-with-curly-braces")({
  component: RouteComponent,
});

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        color: "pink",
      }}
    >
      {children}
    </div>
  );
};
const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const Avatar = () => {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
};

function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

function RouteComponent() {
  return (
    <Container>
      <Avatar />
      <TodoList />
    </Container>
  );
}
