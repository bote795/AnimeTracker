import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

class Options extends React.Component {
  render() {
    const { id } = this.props;
    let icon;
    if (id) {
      icon = (
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      );
    }
    return <div>{icon}</div>;
  }
}

export default Options;
