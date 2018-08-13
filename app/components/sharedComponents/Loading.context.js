import React, { Component } from "react";
import SharedLoadingBar from "./sharedLoadingBar";
const SharedLoadingContext = React.createContext();

export class SharedLoadingProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleLoadingBar = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };
  render() {
    const { children } = this.props;

    return (
      <SharedLoadingContext.Provider
        value={{
          toggleLoadingBar: this.toggleLoadingBar,
          snackbarIsOpen: this.state.isOpen
        }}
      >
        <SharedLoadingBar />

        {children}
      </SharedLoadingContext.Provider>
    );
  }
}

export const SharedLoadingConsumer = SharedLoadingContext.Consumer;
