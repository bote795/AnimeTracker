import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import ContentEditable from "react-contenteditable";

import Options from "./options/Options";
import EpisodeEdit from "./options/EpisodeEdit";
import DeleteEntry from "./options/DeleteEntry";

export default function AnimeEntry({ animelist, edit, timeElapsed }) {
  let nameChange = e => {
    const { id } = animelist;
    const action = {
      type: "name",
      id,
      value: e.target.value
    };
    return edit(action);
  };

  let fieldChange = type => e => {
    const { id } = animelist;
    const action = {
      type,
      id,
      value: e.target.value
    };
    return edit(action);
  }

  let addEntry = e => {
    const { name, episode } = animelist;
    const action = {
      type: "add_entry",
      value: {
        name: name,
        episode: episode
      }
    };
    return edit(action);
  };
  const ANIME_NAME = browser.i18n.getMessage("appEditAnimeInputName");
  const { name, episode, id, time } = animelist;
  const divStyle = { width: "150px" };
  let icon;
  if (!id) {
    icon = (
      <IconButton onClick={addEntry} aria-label="add_circle">
        <AddCircle color="error" />
      </IconButton>
    );
  } else {
    icon = <DeleteEntry id={id} edit={edit} />;
  }

  return (
    <TableRow key={id}>
      <TableCell padding="none" component="th" scope="row">
        <Options id={id} episode={episode} edit={edit} />
      </TableCell>
      <TableCell>
        <ContentEditable
          placeholder={ANIME_NAME}
          html={name || ""} 
          disabled={false} 
          onChange={fieldChange("name")} 
        />
      </TableCell>
      <TableCell padding="none" style={divStyle}>
        <EpisodeEdit id={id} episode={episode} edit={edit} />
      </TableCell>
      {timeElapsed && (
        <TableCell padding="none">
          <ContentEditable
            className="episode-content-editable"
            placeholder="Time"
            onChange={fieldChange("time")}
            html={time || ""} // innerHTML of the editable div
            disabled={false} // use true to disable edition
          />
        </TableCell>
      )}

      <TableCell padding="none">{icon}</TableCell>
    </TableRow>
  );
}
