import React from 'react';
import ReactDom from 'react-dom'
import {playlists} from './playlists';
import SpecificPlaylist from './Playlist';
import './bootstrap.css'

function App() {
  return (
  <section className='playlists'>
    {playlists.map((playlist,index)=>{
      return <SpecificPlaylist key={playlist.id} {...playlist}></SpecificPlaylist>
    })}
  </section>
  );
}

ReactDom.render(<App/>,document.getElementById('root'))
