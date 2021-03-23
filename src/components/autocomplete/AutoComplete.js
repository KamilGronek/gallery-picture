import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

function CustomInputAutocomplete(props) {
  let options = props.resultsArray.map((e) => e.query) || [""];
  return (
    <Autocomplete
      id="custom-input-demo"
      onChange={(e, newValue) => {
        props.onClickEnter(e, newValue);
        props.handleAutoComplete(newValue);
      }}
      onInputChange={(e, newInputValue) => {
        props.handleInputSearch(newInputValue);
      }}
      options={options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            placeholder="Search free high-resolution photos"
            type="text"
            {...params.inputProps}
            onKeyDown={(e) => {
              props.onClickEnter(e);
            }}
          />
        </div>
      )}
    />
  );
}

export default CustomInputAutocomplete;
