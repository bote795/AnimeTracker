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
    maxWidth: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    minWidth: 300
  },
  textInput: {
    paddingBottom: 30
  }
});
class Feedback extends Component {
  state = {
    type: 'bug',
    body: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
  }
  allowButton = () => {
    const { type, body} = this.state;
    return type && !!body;
  }
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type-simple">Type</InputLabel>
          <Select
            required={true}
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: "type",
              id: "type-simple"
            }}
          >
            <MenuItem value={'bug'}>bug</MenuItem>
            <MenuItem value={'feature'}>Feature</MenuItem>
            <MenuItem value={'comment'}>Comment To Developer</MenuItem>
          </Select>
          
          <TextField
            label="Comment"
            multiline={true}
            onChange={this.handleChange}
            value={this.state.body}
            inputProps={{
              name: "body"
            }}
            rows={5}
            rowsMax={5}
            fullWidth={true}
            required={true}
            className={classes.textInput}
          />
        <Button disabled={!this.allowButton()} onClick={this.handleSubmit} ariant="contained" color="primary" className={classes.button}>
          Send
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(Feedback);
