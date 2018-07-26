import React, { Component } from "react";
import ThirdPartyConnects from "./ThirdPartyConnects";

import Nav from "./Nav/Nav";
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        This is the options
        <ThirdPartyConnects />
      </div>
    );
  }
}
