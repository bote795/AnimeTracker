import React, { Component } from "react";
import FormGroup from "./FormGroup";
export class EditAnime extends Component {
  state = { name: "", ep: "", home: "", totaleps: "" };
  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState(() => ({ [name]: value }));
  };
  render() {
    const NAME = browser.i18n.getMessage("appEditAnimeInputName");
    const EPISODE = browser.i18n.getMessage("appEditAnimeInputEp");
    const HOMEURL = browser.i18n.getMessage("appEditAnimeInpuHomeUrl");
    const TOTALEPS = browser.i18n.getMessage("appEditAnimeInputTotalEps");
    const { name, ep, home, totaleps } = this.state;
    return (
      <div>
        <FormGroup
          inputId="name"
          title={NAME}
          value={name}
          handleInputChange={this.handleInputChange}
        />
        <FormGroup
          inputId="ep"
          title={EPISODE}
          value={ep}
          handleInputChange={this.handleInputChange}
        />
        <FormGroup
          inputId="home"
          title={HOMEURL}
          value={home}
          handleInputChange={this.handleInputChange}
        />
        <FormGroup
          inputId="totaleps"
          title={TOTALEPS}
          value={totaleps}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default EditAnime;
