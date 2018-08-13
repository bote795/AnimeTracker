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
import postFeedback from './../../util/feedback';
import LinearProgress from '@material-ui/core/LinearProgress';
import { SharedLoadingConsumer } from "../sharedComponents/Loading.context";

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
    body: "",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async (toggleLoadingBar) =>{
    const { type, body } = this.state;
    console.log(this.state);
    toggleLoadingBar();

    try {
      const repos = await postFeedback(type, body);
      this.setState(() => ({ 
        type: 'bug',
        body: ""
      }));
    }
    catch(e){
      console.warn(e);
    }
    toggleLoadingBar();
}
  allowButton = () => {
    const { type, body} = this.state;
    return type && !!body;
  }
  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    const OPTION_BUG = browser.i18n.getMessage("FeedbackOptionsBug");
    const OPTION_FEATURE = browser.i18n.getMessage("FeedbackOptionsFeature");
    const OPTION_COMMENT = browser.i18n.getMessage("FeedbackOptionsComment");
    const BUTTON_SEND = browser.i18n.getMessage("FeedbackSend");

    return (
      <div>
       <SharedLoadingConsumer>
        {({ toggleLoadingBar }) => (
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
              <MenuItem value={'bug'}>{OPTION_BUG}</MenuItem>
              <MenuItem value={'feature'}>{OPTION_FEATURE}</MenuItem>
              <MenuItem value={'comment'}>{OPTION_COMMENT}</MenuItem>
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
          <Button disabled={!this.allowButton()} onClick={() => this.handleSubmit(toggleLoadingBar)} ariant="contained" color="primary" className={classes.button}>
            Send
            <Icon className={classes.rightIcon}>{BUTTON_SEND}</Icon>
          </Button>
          </FormControl>
        </form>
        )}
        </SharedLoadingConsumer>
      </div>
    );
  }
}

export default withStyles(styles)(Feedback);
