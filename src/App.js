import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/result/:message" render={() => <ResultPage />} />
      </Router>
    </div>
  );
}

export default App;
