import React, { Component } from 'react'

export default class DeleteEntry extends Component {
  delete = (e) => {
    e.preventDefault();
    const { id } = this.props;
    const action = {
      type: 'delete',
      id
    };

    return this.props.edit(action);
  }
  render() {
    return (
      <div>
        <button onClick={this.delete}>X</button>
      </div>
    );
  }
}
