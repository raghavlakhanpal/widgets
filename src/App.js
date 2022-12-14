/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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

//longer logic which can be replced by a router component
//functions to display components based on pathname
// const path = window.location.pathname;

// const showAccordian = () => {
//   if (path === "/") return <Accordion items={items} />;
// };
// const showList = () => {
//   if (path === "/list") return <Search />;
// };
// const showDropdown = () => {
//   if (path === "/dropdown")
//     return (
//       <Dropdown
//         label="Select a color"
//         selected={selected}
//         onSelectedChange={setSelected}
//         options={options}
//       />
//     );
// };
// const showTranslate = () => {
//   if (path === "/translate") return <Translate />;
// };

export default function App() {
  //creating a state for Dropdown Component
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
