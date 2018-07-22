import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
export default class ShowEpisode extends Component {
  episodeChange = e => {
    //TODO: Validate that this is a number 
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
        className="episode-content-editable"
        placeholder={"1"}
        html={episode || ""} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.episodeChange} // handle innerHTML change
      />
    );
  }
}
