import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import LinearProgress from "@material-ui/core/LinearProgress";
import User from "../../util/Services/User";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper
  }
});

class Settings extends Component {
  state = {
    checked: ["newTab"],
    loading: false,
    user: null
  };
  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState(() => ({ loading: true }));
    const user  = await User.get();
    const checked = Object.keys(user.options)
    .map(val => {
      if (user.options[val]) return val;
    })
    .filter((val) => val);

    this.setState(() => ({
      checked,
      loading: false,
      user
    }));
  };

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({
      loading: !loading
    });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    this.toggleLoading();
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    let {user} = this.state;
    user.options[value] = !user.options[value];
    
    this.toggleLoading()
    User.save(user).then(() => {
      this.toggleLoading()
      this.setState({
        checked: newChecked, 
        user
      });
    });
    
    // setTimeout(() => {
    //   this.toggleLoading();
    // }, 500);
  };

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    const NEW_TAB = browser.i18n.getMessage("settingsNewTab");
    const TOTAL_EP_COUNT = browser.i18n.getMessage("settingsTotalEpCount");
    const TIME_ELAPSED = browser.i18n.getMessage("settingsTimeElapsed");
    //TODO: add hover popup for each item
    return (
      <div className={classes.root}>
        {loading && <LinearProgress />}
        <List>
          <ListItem>
            <ListItemText primary={NEW_TAB} />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("newTab")}
                checked={this.state.checked.indexOf("newTab") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary={TOTAL_EP_COUNT} />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("totalEps")}
                checked={this.state.checked.indexOf("totalEps") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText primary={TIME_ELAPSED} />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("timeElapsed")}
                checked={this.state.checked.indexOf("timeElapsed") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
