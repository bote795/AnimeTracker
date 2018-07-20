import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

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
    return (
      <div>
        <IconButton onClick={this.delete} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}
