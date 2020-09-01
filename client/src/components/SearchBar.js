import React from "react";

const SearchBar = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">What would you like to read?</h1>
        <form className="col-8 offset-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter book title.."
          />
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
