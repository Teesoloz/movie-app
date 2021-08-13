import React, { useState } from "react";

const Form = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.getMovie(searchValue);
    resetInputField();
  };

  return (
    <form>
      <input
        className="search"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input
        className="search"
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
      />
    </form>
  );
};

export default Form;
