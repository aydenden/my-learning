import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learn/describing-the-ui/pure")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />

      <CupSideeffect />
      <CupSideeffect />
      <CupSideeffect />

      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />

      <CupUseEffect guest={1} />
      <CupUseEffect guest={2} />
      <CupUseEffect guest={3} />
    </section>
  );
}

function Recipe({ drinkers }: { drinkers: number }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

let guest = 0;
function CupSideeffect() {
  // 나쁜 지점: 이미 존재했던 변수를 변경하고 있습니다!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function CupUseEffect({ guest }) {
  const [sideEffectValue, setSideEffectValue] = useState(0);

  useEffect(() => {
    setSideEffectValue(guest * 1.5);
  }, [guest]);
  return <h2>Tea cup for guest #{sideEffectValue}</h2>;
}
