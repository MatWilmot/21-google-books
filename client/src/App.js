import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
  useEffect(() => {
    API.search("of mice and men")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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
        console.log(response.data.items);
        setResults(response.data.items);
      });
    }
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
            <SearchResults results={results} />
          </Route>
          <Route exact path="/saved"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
