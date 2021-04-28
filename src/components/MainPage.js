import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import AutoComplete from "./AutoComplete";

function AutoCompletePage() {
  const [resultsArray, setResultsArray] = useState([]);
  const [inputName, setInputName] = useState("");
  const [clickEnter, setClickEnter] = useState(true);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://photocollection1.herokuapp.com/api/nautocomplete/${inputName}`
      )
      .then((response) => {
        setResultsArray(response.data.autocomplete);
      });
  }, [inputName]);

  const handleEnterDown = (e) => {
    if ( resultsArray.length !== 0) {
      setClickEnter(!clickEnter);
      const location = {
        pathname: `/result/${e.target.value}`,
        state: {
          click: clickEnter,
        },
      };
      history.push(location);
    }
  };

  const handleAutoComplete = (searchQuery) => {
    const location = {
      pathname: `/result/${searchQuery}`,
    };
    history.push(location);
  };

  const handleInputSearch = (value) => {
    if (value.length > 2) {
      setInputName(value);
    } else {
      setInputName("");
    }
  };

  const mainText = () => {
    return (
      <div className="text">
        <h1>Unsplash</h1>
        <p>
          "The internet’s source of"
          <a href="/license">freely-usable images</a>
        </p>
        <p>Powered by creators everywhere.</p>
      </div>
    );
  };

  return (
    <>
      <div className="bg-picture">
        <div className="container-1">
          {mainText()}
          <div className="input-browser">
            <AutoComplete
              resultsArray={resultsArray}
              onConfirm={handleEnterDown}
              onInputSearch={handleInputSearch}
              onAutoComplete={handleAutoComplete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoCompletePage;