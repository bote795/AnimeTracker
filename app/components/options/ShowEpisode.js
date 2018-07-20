import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
export default class ShowEpisode extends Component {
  episodeChange = e => {
    const { id, edit } = this.props;
    const action = {
      type: "episode",
      id,
      value: e.target.value
    };
    return edit(action);
  };
  render() {
    const spanStyle = {
      minWidth: "30px",
      display: "inline-block",
      textAlign: "center"
    };
    const { episode } = this.props;
    return (
      <ContentEditable
        style={spanStyle}
        html={episode} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.episodeChange} // handle innerHTML change
      />
    );
  }
};
