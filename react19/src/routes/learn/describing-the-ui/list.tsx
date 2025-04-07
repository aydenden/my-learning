import { createFileRoute } from "@tanstack/react-router";
import "./list.css";
import { useEffect, useId, useState } from "react";

export const Route = createFileRoute("/learn/describing-the-ui/list")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Just List</p>
      <JustList />
      <p>Filter List</p>
      <FilterList />
      <p>Key List</p>
      <KeyList />
      <p>Duplicate Key List</p>
      <DuplicateKeyList />
    </div>
  );
}

function JustList() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  return people.map((person) => <li>{person}</li>);
}

const people1 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];
const people2 = [
  {
    id: 0,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 1,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 2,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 3,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];
function FilterList() {
  const chemists = people1.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return listItems;
}

function KeyList() {
  return people1.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
}
function DuplicateKeyList() {
  const [switchList, setSwitchList] = useState(true);

  const list = switchList ? people1 : people2;

  return (
    <>
      <button onClick={() => setSwitchList(!switchList)}>리스트 변경</button>
      {list.map((person, index) => (
        <li key={index}>
          <img src={getImageUrl(person)} alt={person.name} />
          <p>
            <b>{person.name}:</b>
            {" " + person.profession + " "}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
    </>
  );
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
