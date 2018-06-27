import React from 'react';
import AnimeEntry from './AnimeEntry';
class AnimeTable extends React.Component {
    state = {
        animeList : [
            { Name: "test", id: 1, episode: 4000 },
            { Name: "test2", id: 2, episode: 4 },
            { Name: "test2", id: 3, episode: 400 },
            { Name: "test2", id: 5, episode: 40 },
        ]
    }
   
    editAnime(state = [], action){
        switch(action.type){
            case 'add':
            case 'subtract':
                return state.map(
                    anime =>
                        anime.id !== action.id
                            ? anime
                            : Object.assign({}, anime, { episode: anime.episode + action.value })
                );
            case 'delete':
                console.log("delete ", action.id)
                return state.filter((anime) => { return anime.id !== action.id});
                
        }
    }
    onEdit = action => {
        const animeList = this.editAnime(this.state.animeList, action);
        this.setState(()=>({
            animeList
        }));
    }
    render() {
        const divStyle = { width: '100px' };
        const ANIME_NAME = browser.i18n.getMessage("appAnimeName");
        const EPISODE = browser.i18n.getMessage("appEpisode");
        const EDIT = browser.i18n.getMessage("appEdit");
        const { animeList } = this.state;
        return <div>
            <table>     
              <thead>
                <tr>
                  <th>{ANIME_NAME}</th>
                   <th style={divStyle}>{EPISODE}</th>
                   <th>{EDIT}</th>
                </tr>
              </thead>
              <tbody>
                {animeList.map( (anime) => 
                    (<AnimeEntry key={anime.id} animelist={anime} edit={this.onEdit}/>)) 
                }
              </tbody>
            </table>
          </div>;
    }
}

export default AnimeTable;
