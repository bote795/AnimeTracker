import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

class Options extends React.Component {
  render() {
    const { id } = this.props;
    let icon;
    if (id) {
      icon = (
        <IconButton component={Link} to="/edit" aria-label="Edit">
          <EditIcon />
        </IconButton>
      );
    }
    return <div>{icon}</div>;
  }
}

export default Options;
