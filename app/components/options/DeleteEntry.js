import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircle from "@material-ui/icons/AddCircle";
export default class DeleteEntry extends Component {
  delete = e => {
    e.preventDefault();
    const { id } = this.props;
    const action = {
      type: "delete",
      id
    };

    return this.props.edit(action);
  };
  render() {
    const { id } = this.props;
    let icon;
    if (!id) {
      icon = <AddCircle color="error" />;
    } else {
      icon = <DeleteIcon />;
    }

    return (
      <div>
        <IconButton onClick={this.delete} aria-label="Delete">
          {icon}
        </IconButton>
      </div>
    );
  }
}
