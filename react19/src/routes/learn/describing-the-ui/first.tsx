import { createFileRoute } from "@tanstack/react-router";

const Profile = () => {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
    </div>
  );
};

const First = () => {
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
};

export default First;

export const Route = createFileRoute("/learn/describing-the-ui/first")({
  component: First,
});
