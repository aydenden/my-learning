import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const DescribingTheUi = () => {
  return (
    <div>
      <Link to="/describing-the-ui/first" className="[&.active]:font-bold">
        First
      </Link>
      <Link
        to="//describing-the-ui/importing-and-exporting-components"
        className="[&.active]:font-bold"
      >
        importing-and-exporting
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

export const Route = createFileRoute("/describing-the-ui")({
  component: DescribingTheUi,
});
