/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

//array of items to be used by Accordion component as data
const items = [
  {
    title: "What is React?",
    content:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
  },
  {
    title: "Why use React?",
    content:
      "ReactJS provides developers with reusable components that they can use to create new applications. Reusability is like a developer's miracle cure.",
  },
  {
    title: "How do you use React?",
    content: "You use React by using components.",
  },
];

//Array of colors that will be used as options in Dropdown Component
const options = [
  { label: "The color red", value: "red" },
  { label: "A bright color green", value: "green" },
  { label: "A shade of blue", value: "blue" },
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Accordion items={items} />
      <Search />
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}
