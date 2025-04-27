import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
  "/learn/adding-interactivity/state-as-a-snapshot",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Form />
      <Counter />
    </div>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        1) +3
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
          alert(number);
        }}
      >
        2) +3
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
          setTimeout(() => {
            alert(number);
          }, 10_000);
        }}
      >
        3) +3
      </button>
    </>
  );
}

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
