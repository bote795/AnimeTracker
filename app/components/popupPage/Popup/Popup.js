import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
class Popup extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    successButton: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };
  styles = theme => ({
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    }
  });

  div = props => {
    const { title, body, onCancel, onSuccess, successButton } = this.props;
    const CANCEL = browser.i18n.getMessage("PopupCancel");
    return (
      <div style={getModalStyle()} className={props.classes.paper}>
        <Typography variant="title" id="modal-title">
          {title}
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          {body}
        </Typography>
        <Button onClick={onSuccess}>{successButton}</Button>
        <Button onClick={onCancel}>{CANCEL}</Button>
      </div>
    );
  };
  Body = withStyles(this.styles)(this.div);

  render() {
    const { open } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
        >
          <this.Body />
        </Modal>
      </div>
    );
  }
}

export default Popup;
