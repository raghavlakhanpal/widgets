/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
export default function App() {
  return (
    <div className="ui container">
      <Accordion items={items} />
      <Search />
    </div>
  );
}
