import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/learn/describing-the-ui/tree")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
function Color({ value }) {
  return <div className="colorbox" style={{ backgroundColor: value }} />;
}
function Copyright({ year }) {
  return <p className="small">©️ {year}</p>;
}
function FancyText({ title, text }) {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
}
function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

const inspirations = [
  {
    type: "quote",
    value: "Don’t let yesterday take up too much of today.” — Will Rogers",
  },
  { type: "color", value: "#B73636" },
  { type: "quote", value: "Ambition is putting a ladder against the sky." },
  { type: "color", value: "#256266" },
  { type: "quote", value: "A joy that's shared is a joy made double." },
  { type: "color", value: "#F9F2B4" },
];
