import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const DescribingTheUi = () => {
  return (
    <div>
      <Link
        to="/learn/describing-the-ui/first"
        className="[&.active]:font-bold"
      >
        First
      </Link>
      <Link
        to="/learn/describing-the-ui/importing-and-exporting-components"
        className="[&.active]:font-bold"
      >
        importing-and-exporting-components
      </Link>
      <Link
        to="/learn/describing-the-ui/writing-markup-with-jsx"
        className="[&.active]:font-bold"
      >
        writing-markup-with-jsx
      </Link>
      <Link
        to="/learn/describing-the-ui/javascript-in-jsx-with-curly-braces"
        className="[&.active]:font-bold"
      >
        javascript-in-jsx-with-curly-braces
      </Link>
      <Link
        to="/learn/describing-the-ui/passing-props-to-a-component"
        className="[&.active]:font-bold"
      >
        passing-props-to-a-component
      </Link>
      <Link
        to="/learn/describing-the-ui/conditional-rendering"
        className="[&.active]:font-bold"
      >
        conditional-rendering
      </Link>
      <Link to="/learn/describing-the-ui/list" className="[&.active]:font-bold">
        list
      </Link>
      <Link to="/learn/describing-the-ui/pure" className="[&.active]:font-bold">
        pure
      </Link>
      <Link to="/learn/describing-the-ui/tree" className="[&.active]:font-bold">
        tree
      </Link>
      <br />
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      <br />
      <Outlet />
    </div>
  );
};

export default DescribingTheUi;

export const Route = createFileRoute("/learn/describing-the-ui")({
  component: DescribingTheUi,
});
