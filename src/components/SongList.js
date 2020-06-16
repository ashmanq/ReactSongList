import React from 'react';
import Song from './Song.js';

const SongList = (props) => {

  const songs = props.songList.map((song, index) => {
    return <Song key={index} song={song} position={index + 1}/>
  })
  return (
    <ul className="list">
      { songs }
    </ul>
  )
};

export default SongList;
