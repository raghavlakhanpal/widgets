import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  //use State
  const [searchValue, setSearchValue] = useState("programming");
  const [resultValue, setResultValue] = useState([]);

  //useEffect and fuction to fetch results from wikipedia api
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchValue,
        },
      });
      setResultValue(data.query.search);
    };
    if (searchValue && !resultValue.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (searchValue) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [resultValue.length, searchValue]);

  //function to create a list of results fetched
  const renderedResults = resultValue.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
