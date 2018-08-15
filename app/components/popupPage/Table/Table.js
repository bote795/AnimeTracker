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
import User from "../../../util/Services/User";
import Series from "../../../util/Services/Series";
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
    animeList: [],

    user: {
      options: {
        timeElapsed: false,
        totalEps: false
      }
    },
    loading: false
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    this.setState(() => ({ loading: true }));
    const user = await User.get();
    const animeList = await Series.get();
    console.log("This is the user %O", user);
    console.log("This is the animeList %O", animeList);
    this.setState(() => ({
      loading: false,
      user,
      animeList
    }));
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
      case "time":
      case "episode":
      case "totalEps":
        return state.map(
          anime =>
            anime.id !== action.id
              ? anime
              : Object.assign({}, anime, {
                  [action.type]: String(action.value)
                })
        );
      case "delete":
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
      default:
        return state;
    }
  }
  onEdit = async action => {
    this.setState(() => ({ loading: true }));
    const animeList = this.editAnime(this.state.animeList, action);
    //if(action !== 'episode')
    await Series.save(animeList);
    this.setState(() => ({
      animeList,
      loading: false
    }));
  };
  render() {
    const divStyle = { width: "100px", padding: "none" };
    const ANIME_NAME = browser.i18n.getMessage("appAnimeName");
    const EPISODE = browser.i18n.getMessage("appEpisode");
    const TIME_LAPS = browser.i18n.getMessage("appTimeLaps");
    const { animeList, user, loading } = this.state;
    const { options } = user;
    const { timeElapsed } = options;
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          {
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell padding="none" />
                  <TableCell>{ANIME_NAME}</TableCell>
                  <TableCell style={divStyle}>{EPISODE}</TableCell>
                  {timeElapsed && (
                    <TableCell padding="none">{TIME_LAPS}</TableCell>
                  )}
                  <TableCell padding="none" />
                </TableRow>
              </TableHead>
              <TableBody>
                <AddEntry edit={this.onEdit} options={options} />
                {animeList.map(anime => (
                  <AnimeEntry
                    key={anime.id}
                    animelist={anime}
                    edit={this.onEdit}
                    options={options}
                    disableInputs={true}
                  />
                ))}
              </TableBody>
            </Table>
          }
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(AnimeTable);
