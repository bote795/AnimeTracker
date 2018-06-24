import React, { Component } from 'react'
import FormGroup from './FormGroup' 
export class EditAnime extends Component {
  render() {
    
    return (
      <div>
        <FormGroup title="Name" value="x"/>
        <FormGroup title="Ep" value="10"/>
        <FormGroup title="Home url" value="x"/>
        <FormGroup title="Total Eps" value="15"/>
      </div>
    )
  }
}

export default EditAnime;
