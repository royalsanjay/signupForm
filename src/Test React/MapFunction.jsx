import React from "react";
import Map from "./Map";

const MapFunction = () => {
  const Persons = [
    {
      id: 1,
      name: "Ram",
      age: 30,
      skill: "ReactJs",
    },
    {
      id: 2,
      name: "Shyam",
      age: 2,
      skill: "VueJs",
    },
  ];
  const PersonList = Persons.map((person) => (
    <Map key={person.id} data={person} />
  ));

  return <div>{PersonList}</div>;
};

export default MapFunction;
