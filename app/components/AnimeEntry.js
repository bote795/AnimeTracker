import React from "react";
import Options from "./options/Options";
import EpisodeEdit from "./options/EpisodeEdit";
import DeleteEntry from "./options/DeleteEntry";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ContentEditable from "react-contenteditable";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

export default function AnimeEntry({ animelist, edit }) {
  let nameChange = e => {
    const { id } = animelist;
    const action = {
      type: "name",
      id,
      value: e.target.value
    };
    console.log(action);
    return edit(action);
  };
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
  const { name, episode, id } = animelist;
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
          placeholder={"Name"}
          html={name || ""} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={nameChange} // handle innerHTML change
        />
      </TableCell>
      <TableCell padding="none" style={divStyle}>
        <EpisodeEdit id={id} episode={episode} edit={edit} />
      </TableCell>
      <TableCell padding="none">{icon}</TableCell>
    </TableRow>
  );
}
