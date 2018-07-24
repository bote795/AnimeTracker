import React, { Component } from "react";
import AnimeEntry from "../AnimeEntry";

export default class AddEntry extends Component {
  state = {
    anime: {
      Name: "",
      episode: ""
    }
  };
  editAnime(state = [], action, edit) {
    const { anime } = this.state;
    switch (action.type) {
      case "name":
        return Object.assign({}, anime, {
          name: action.value
        });
      case "episode":
        return Object.assign({}, anime, {
          episode: String(action.value)
        });
      case "add_entry":
        const { name, episode } = action.value;
        edit({ type: "add_entry", value: { name, episode } });
        return {
          name: "",
          episode: ""
        };
    }
  }
  onEdit = action => {
    const { edit } = this.props;
    const anime = this.editAnime(this.state.anime, action, edit);
    this.setState(() => ({
      anime
    }));
  };
  render() {
    const { anime } = this.state;
    return <AnimeEntry animelist={anime} edit={this.onEdit} />;
  }
}
