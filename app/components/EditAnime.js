import React, { Component } from 'react'
import FormGroup from './FormGroup' 
export class EditAnime extends Component {
         state = { name: "", ep: "", home: "", totaleps: "" };
         handleInputChange = e => {
           const { value, name } = e.target;
           this.setState(() => ({ [name]: value }));
         };
         render() {
           const {name , ep, home, totaleps} = this.state;
           return (<div>
             <FormGroup 
              inputId="name" 
              title="Name" 
              value={name} 
              handleInputChange={this.handleInputChange}
             />
             <FormGroup 
              inputId="ep" 
              title="Ep" 
              value={ep} 
              handleInputChange={this.handleInputChange} 
             />
             <FormGroup 
              inputId="home" 
              title="Home url" 
              value={home} 
              handleInputChange={this.handleInputChange}
             />
             <FormGroup
              inputId="totaleps" 
              title="Total Eps" 
              value={totaleps} 
              handleInputChange={this.handleInputChange}
             />
           </div>);
         }
       }

export default EditAnime;
