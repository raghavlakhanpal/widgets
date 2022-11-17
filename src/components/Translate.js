import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//Array of languages to be used by Translate Component
const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Dutch", value: "nl" },
];

const Translate = ({ languageOptions }) => {
  // creating a state for Translate Component
  const [language, setLanguage] = useState(options[0]);
  //creating a state for the search text in Translate
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text:</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="search"
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
