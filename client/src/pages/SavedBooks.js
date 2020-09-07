import React from "react";

const SavedBooks = (props) => {
  return (
    <div className="container">
      <h1>Saved Books:</h1>
      <div className="text-left mt-5">
        {props.books.map((element, index) => (
          <div key={index} className="my-4 row">
            <img
              className="col-sm-2"
              style={{ maxWidth: "10rem", maxHeight: "13rem" }}
              src={element.image}
              alt="Cover preview"
            />
            <div className="col-sm-10">
              <h4 className="card-title">{element.title}</h4>
              <h6>
                <strong>{element.authors}</strong>
              </h6>
              <p className="card-text">{element.description}</p>
              <a
                href={element.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More
              </a>
              <button
                className="btn btn-danger mx-3"
                onClick={() => {
                  props.handleRemove(element._id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedBooks;
