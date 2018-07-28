import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class Settings extends Component {
  state = {
    checked: ["wifi"]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemText primary="Open in a new Tab" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("tab")}
                checked={this.state.checked.indexOf("tab") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemText primary="Show Total Episode Count" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("totalEps")}
                checked={this.state.checked.indexOf("totalEps") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemText primary="Display Time Elapsed" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("time")}
                checked={this.state.checked.indexOf("time") !== -1}
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