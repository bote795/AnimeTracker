import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField'
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});
class Feedback extends Component {
  state = {
    type: 10
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type-simple">Type</InputLabel>
          <Select
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: "type",
              id: "type-simple"
            }}
          >
            <MenuItem value={10}>bug</MenuItem>
            <MenuItem value={20}>Feature</MenuItem>
            <MenuItem value={30}>Comment To Developer</MenuItem>
          </Select>
          <TextField
            label="Comment"
            multiline={true}
            rows={3}
            rowsMax={5}
            fullWidth={true}
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Feedback);
