import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
  const [params, setParams] = useState({ search: "", type: "" });
  const [results, setResults] = useState([]);

  const updateSearch = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const updateType = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const searchGoogleBooks = (e) => {
    e.preventDefault();
    if (params.search !== "" && params.type !== "") {
      API.search(params.type, params.search).then((response) => {
        console.log("Results:", response.data.items);
        setResults(response.data.items);
      });
    }
  };

  const handleSave = (obj) => {
    API.saveBook(obj);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchBar
              search={updateSearch}
              type={updateType}
              submit={searchGoogleBooks}
            />
            <SearchResults results={results} save={handleSave} />
          </Route>
          <Route exact path="/saved"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
