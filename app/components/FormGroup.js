import React, { Component } from 'react'

export default class FormGroup extends Component {
  render() {
      const {title, value} = this.props;
    return (
      <div>
            {title}:
            <input type="text" value={value} />
      </div>
    )
  }
}
