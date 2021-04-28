import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

function CustomInputAutocomplete(props) {
  let options = props.resultsArray.map((e) => e.query) || [""];
  return (
    <Autocomplete
      id="custom-input-demo"
      onChange={(e, newValue) => {
        props.onConfirm(e, newValue);
        props.onAutoComplete(newValue);  // wybranie opcji w inpucie
      }}
      onInputChange={(e, newInputValue) => { 
        props.onInputSearch(newInputValue);  //zmiana textu w inpucie
      }}
      options={options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            placeholder="Search free high-resolution photos"
            type="text"
            {...params.inputProps}
            onKeyDown={(e) => {    //klikniecie w klawiature
              if(e.keyCode === 13){
              props.onConfirm(e);
              }
            }}
          />
        </div>
      )}
    />
  );
}

export default CustomInputAutocomplete;