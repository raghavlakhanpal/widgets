import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedList = options.map((option, index) => {
    if (selected === option) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedList}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
