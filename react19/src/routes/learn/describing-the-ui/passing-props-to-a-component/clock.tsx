import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute(
  "/learn/describing-the-ui/passing-props-to-a-component/clock",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <div>
      <p>
        Pick a color:{" "}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
function Clock({ color, time }: { color: string; time: string }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
