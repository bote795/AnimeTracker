import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

import AnimeTable from "./Table/Table";
import EditAnime from "./Form/EditAnime";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AnimeTable} />
            <Route exact path="/edit" component={EditAnime} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
