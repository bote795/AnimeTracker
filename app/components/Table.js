import React from "react";
import AnimeEntry from "./AnimeEntry";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
      { Name: "test", id: 1, episode: "4000" },
      { Name: "test the cool kids blah blah", id: 2, episode: "4" },
      { Name: "test2", id: 3, episode: "400" },
      { Name: "test2", id: 4, episode: "400" },
      { Name: "test2", id: 6, episode: "400" },
      { Name: "test2", id: 7, episode: "400" },
      { Name: "test2", id: 8, episode: "400" },
      { Name: "test2", id: 9, episode: "400" },
      { Name: "test2", id: 5, episode: "40" }
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
    const EDIT = browser.i18n.getMessage("appEdit");
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
