import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ContentEditableEvent from "./ShowEpisode";
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

    return edit(action);
  };
  render() {
    const { id, episode, edit, totalEps, options } = this.props;
    let { disableInputs } = this.props;

    return (
      <div>
        <IconButton onClick={this.subtract} disabled={!id} color="primary">
          <Icon>remove_circle</Icon>
        </IconButton>
        <ContentEditableEvent
          id={id}
          value={episode}
          edit={edit}
          action="episode"
          placeholder="1"
          disabled={disableInputs}
        />
        {options.totalEps && totalEps && <span>/</span>}
        {options.totalEps &&
          totalEps && (
            <ContentEditableEvent
              id={id}
              value={totalEps}
              edit={edit}
              action="totalEps"
              placeholder=""
              disabled={disableInputs}
            />
          )}

        <IconButton onClick={this.add} disabled={!id} color="primary">
          <Icon>add_circle</Icon>
        </IconButton>
      </div>
    );
  }
}
