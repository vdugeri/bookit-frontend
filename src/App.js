import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import SearchResults from "./pages/bus-results/bus-results.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bus-results" component={SearchResults} />
      </Switch>
    </div>
  );
}

export default App;
