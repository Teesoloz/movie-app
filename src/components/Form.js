import React from "react";

function Form(props) {
  return (
    <div className="container">
      <h1 className="title">Type your movie title below</h1>
      <form className="form">
        <label htmlFor="query" className="label">
          welcome
        </label>
        <input
          className="search"
          placeholder="search movie here"
          type="text"
          name="query"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.getMovie();
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Form;
