import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
