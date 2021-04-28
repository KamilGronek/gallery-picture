import React, { useState, useEffect } from "react";
import axios from "axios";
import AutoComplete from "./autocomplete/AutoComplete";
import { useHistory, useLocation, useParams } from "react-router-dom";
import ModalSide from "./resultsPageChild/ModalSide";
import Gallery from "./resultsPageChild/Gallery";

function ResultPage() {
  const { message } = useParams("");
  const location = useLocation();
  const click = location.state;
  const [resultsPhotoArray, setResultsPhotoArray] = useState([]);
  const [resultsArray, setResultsArray] = useState([]);
  const [inputName, setInputName] = useState(message);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");

  const [clickEnter, setClickEnter] = useState(click);
  const accessKey = "9tJMde6Lvj7EwGnMaTcycDeV9-hZ4nrZv17OfGZ1p40";
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${inputName}&per_page=100=&client_id=${accessKey}`
      )
      .then((response) => {
        setResultsPhotoArray(response.data.results);
        console.log(response);
      });
  }, [clickEnter]);

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
    if (resultsArray.length !== 0) {
      setClickEnter(!clickEnter);
      window.history.replaceState(null, "", `/result/${e.target.value}`);
    }
  };

  const handleInputSearch = (value) => {
    if (value.length > 2) {
      setInputName(value);
    } else {
      setInputName("");
    }
  };

  const getPictureId = (id) => {
    setId(id);
    setModalIsOpen(true);
  };

  const gallery = () => {
    return resultsPhotoArray.map((result) => (
      <Gallery
        key={result.id}
        result={result}
        getPictureId={getPictureId}
      />
    ));
  };

  const galleryModal = () => {
    let tab = resultsPhotoArray
      .filter((result) => result.id === id)
      .map((res) => (
        <ModalSide
          key={res.id}
          res={res}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      ));
    return tab;
  };

  const handleOnClick = () => history.goBack();

 
  const handleAutoComplete = (searchQuery) => {
    // setClickEnter(!clickEnter);
    window.history.replaceState(null, "", `/result/${searchQuery}`);
  };

  return (
    <>
      <div className="gallery">
        <div className="gallery__input-browser">
          <AutoComplete
            resultsArray={resultsArray}
            onConfirm={handleEnterDown}
            onInputSearch={handleInputSearch}
            onAutoComplete={handleAutoComplete}
          />
        </div>
        <div className="gallery__info">
          <h1 className="textResult" style={{ paddingBottom: "20px" }}>
            {inputName}
          </h1>
          <span style={{ cursor: "pointer" }} onClick={handleOnClick}>
            Go back
          </span>
        </div>
        <div className="gallery__grid">{gallery()}</div>
      </div>
      {galleryModal()}
    </>
  );
}

export default ResultPage;
