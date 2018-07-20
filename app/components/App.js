import React from "react";
import AnimeTable from "./Table";
import EditAnime from "./EditAnime";
import Button from "@material-ui/core/Button";
import Demo  from './demo-table'
class App extends React.Component {
  render() {
    return (
    <div>
        <AnimeTable></AnimeTable>
    </div>
      
    );
  }
}

export default App;
