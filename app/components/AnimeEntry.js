import React from 'react';
import Options from './options/Options';
import EpisodeEdit from "./options/EpisodeEdit";
import DeleteEntry from './options/DeleteEntry'
export default function AnimeEntry({ animelist, edit}){
    const { Name, episode, id } = animelist;
    const divStyle= { width: '100px' };
    return <tr key={id}>
        <td>{Name}</td>
        <td style={divStyle}>
          <EpisodeEdit id={id} episode={episode} edit={edit} />
        </td>
        <td>
          <Options id={id} episode={episode} edit={edit} />
        </td>
        <td>
          <DeleteEntry id={id} edit={edit} />
        </td>
      </tr>;
};