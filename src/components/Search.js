import React, { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter the search term</label>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
