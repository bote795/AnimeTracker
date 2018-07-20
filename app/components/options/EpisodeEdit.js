import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

export default class EpisodeEdit extends Component {
  add = e => {
    e.preventDefault();
    const { id, edit } = this.props;
    const action = {
      type: "add",
      id,
      value: 1
    };
    return edit(action);
  };

  subtract = e => {
    e.preventDefault();
    const { id, edit } = this.props;
    const action = {
      type: "add",
      id,
      value: -1
    };

    return this.props.edit(action);
  };
  render() {
    const { episode } = this.props;
    const spanStyle = {
      minWidth: "30px",
      display: "inline-block",
      textAlign: "center"
    };
    return (
      <div>
        <IconButton onClick={this.subtract} color="primary">
          <Icon>remove_circle</Icon>
        </IconButton>
        <span style={spanStyle}>{episode}</span>
        <IconButton onClick={this.add} color="primary">
          <Icon>add_circle</Icon>
        </IconButton>
      </div>
    );
  }
}
