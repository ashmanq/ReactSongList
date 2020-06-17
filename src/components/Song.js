import React from 'react';


const Song = ({ song, position }) => {

  if(!song) return;

  return (
    <li className="item">
      <h2>{ position }</h2>
      <h3>{ song['im:name'].label }</h3>
      <img src={ song['im:image'][2].label } alt=""/>
      <h3>{ song['im:artist'].label }</h3>
      <h3>{ song.category.attributes.label }</h3>
    </li>
  )
};

export default Song;
