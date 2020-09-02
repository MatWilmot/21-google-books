import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">What would you like to read?</h1>
          <form className="col-8 offset-2" onSubmit={props.submit}>
            <div className="form-row">
              <div className="form-group col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type something.."
                  name="search"
                  onChange={props.search}
                />
              </div>
              <div className="form-group col-md-3">
                <select
                  name="type"
                  className="form-control"
                  onChange={props.type}
                >
                  <option value="choose">Choose...</option>
                  <option value="author">Author</option>
                  <option value="title">Title</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitBtn"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
