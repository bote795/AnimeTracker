import React from "react";
import Options from "./options/Options";
import EpisodeEdit from "./options/EpisodeEdit";
import DeleteEntry from "./options/DeleteEntry";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ContentEditable from "react-contenteditable";

export default function AnimeEntry({ animelist, edit }) {
  let nameChange = e => {
    const { id } = animelist;
    const action = {
      type: "name",
      id,
      value: e.target.value
    };
    return edit(action);
  };
  const { Name, episode, id } = animelist;
  const divStyle = { width: "150px" };
  return (
    <TableRow key={id}>
      <TableCell padding="none" component="th" scope="row">
        <Options id={id} episode={episode} edit={edit} />
      </TableCell>
      <TableCell>
        <ContentEditable
          html={Name} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={nameChange} // handle innerHTML change
        />
      </TableCell>
      <TableCell padding="none" style={divStyle}>
        <EpisodeEdit id={id} episode={episode} edit={edit} />
      </TableCell>
      <TableCell padding="none">
        <DeleteEntry id={id} edit={edit} />
      </TableCell>
    </TableRow>
  );
}
