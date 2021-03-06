import React from "react";

const SearchResults = (props) => {
  return (
    <div className="container">
      <h1>Search Results:</h1>
      <div className="text-left mt-5">
        {props.results.map((element, index) => (
          <div key={index} className="my-4 row">
            <img
              className="col-sm-2"
              style={{ maxWidth: "10rem", maxHeight: "13rem" }}
              src={
                element.volumeInfo.imageLinks
                  ? element.volumeInfo.imageLinks.smallThumbnail
                  : "https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
              }
              alt="Cover preview"
            />
            <div className="col-sm-10">
              <h4 className="card-title">{element.volumeInfo.title}</h4>
              <h6>
                <strong>
                  {element.volumeInfo.authors
                    ? element.volumeInfo.authors.join(", ")
                    : "No Author Listed"}
                </strong>
              </h6>
              <p className="card-text">
                {element.volumeInfo.description
                  ? element.volumeInfo.description
                  : "No Description Available"}
              </p>
              <a
                href={element.volumeInfo.canonicalVolumeLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More
              </a>
              <button
                className="btn btn-primary mx-3"
                onClick={() => {
                  props.save({
                    title: element.volumeInfo.title,
                    authors: element.volumeInfo.authors
                      ? element.volumeInfo.authors.join(", ")
                      : "No Author Listed",
                    description: element.volumeInfo.description
                      ? element.volumeInfo.description
                      : "No Description Available",
                    image: element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.smallThumbnail
                      : "https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png",
                    link: element.volumeInfo.canonicalVolumeLink,
                  });
                }}
              >
                Save for Later
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
