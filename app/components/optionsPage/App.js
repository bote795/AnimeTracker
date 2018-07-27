import React, { Component } from "react";
import ThirdPartyConnects from "./ThirdPartyConnects";
import { MemoryRouter as Router } from "react-router-dom";

import Nav from "./Nav/LeftNav";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
        </Router>
      </div>
    );
  }
}
