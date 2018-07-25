import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import uuid from "uuid/v4";

import AnimeEntry from "./AnimeEntry";
import AddEntry from "./AddEntry";
const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: "auto"
  }
});

class AnimeTable extends React.Component {
  state = {
    //TODO: in memory use epsiode as string then on save save it as number
    animeList: [
      { name: "test", id: uuid(), episode: "4000" },
      { name: "test the cool kids blah blah", id: uuid(), episode: "4" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "400" },
      { name: "test2", id: uuid(), episode: "40" }
    ]
  };

  editAnime(state = [], action) {
    switch (action.type) {
      case "add":
      case "subtract":
        return state.map(
          anime =>
            anime.id !== action.id
              ? anime
              : Object.assign({}, anime, {
                  episode: String(Number(anime.episode) + action.value)
                })
        );
      case "name":
        return state.map(
          anime =>
            anime.id !== action.id
              ? anime
              : Object.assign({}, anime, {
                  name: action.value
                })
        );
      case "episode":
        return state.map(
          anime =>
            anime.id !== action.id
              ? anime
              : Object.assign({}, anime, {
                  episode: String(action.value)
                })
        );
      case "delete":
        console.log("delete ", action.id);
        return state.filter(anime => {
          return anime.id !== action.id;
        });
      case "add_entry":
        const { name, episode } = action.value;
        const id = uuid();
        return [
          {
            id,
            name,
            episode
          },
          ...state
        ];
    }
  }
  onEdit = action => {
    const animeList = this.editAnime(this.state.animeList, action);
    this.setState(() => ({
      animeList
    }));
  };
  render() {
    const divStyle = { width: "100px", padding: "none" };
    const ANIME_NAME = browser.i18n.getMessage("appAnimeName");
    const EPISODE = browser.i18n.getMessage("appEpisode");
    const { animeList } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell padding="none" />
                <TableCell>{ANIME_NAME}</TableCell>
                <TableCell style={divStyle}>{EPISODE}</TableCell>
                <TableCell padding="none" />
              </TableRow>
            </TableHead>
            <TableBody>
              <AddEntry edit={this.onEdit} />
              {animeList.map(anime => (
                <AnimeEntry
                  key={anime.id}
                  animelist={anime}
                  edit={this.onEdit}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(AnimeTable);
