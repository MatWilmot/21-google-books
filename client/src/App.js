import React, { useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    API.searchTitle("of mice and men")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/search">
            <div className="container text-center">
              <SearchBar />
            </div>
          </Route>
          <Route exact path="/saved"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
}
