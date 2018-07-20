import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

class Options extends React.Component {
  render() {
    return (
      <div>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </div>
    );
  }
}

export default Options;
