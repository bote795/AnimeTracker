import React from 'react';
import { SharedLoadingConsumer } from './Loading.context';
import LinearProgress from "@material-ui/core/LinearProgress";

const SharedLoadingBar = () => (
  <SharedLoadingConsumer>
    {({ snackbarIsOpen }) => (
       snackbarIsOpen && <LinearProgress />
    )}
  </SharedLoadingConsumer>
);

export default SharedLoadingBar;