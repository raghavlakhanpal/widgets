import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const getTranslatedText = async () => {
      //fetchingdata using axios post request
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: KEY,
          },
        }
      );
      //putting result from axios to state
      setTranslated(data.data.translations[0].translatedText);
    };
    //callin the async function
    getTranslatedText();
  }, [language, text]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};
export default Convert;
