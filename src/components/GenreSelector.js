import React from 'react';

const GenreSelector = ({selectList, onSelect}) => {

  const genreSelectList = selectList.map((genre, index) => {
    return <option value={genre} key={ index }>{ genre }</option>
  })

  function handleChange(event) {
    onSelect(event.target.value)
  }
  return (
    <select className="select" id="genre-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Filter By Genre...</option>
      <option value="All">All Genres</option>
      { genreSelectList }
    </select>
  );
}

export default GenreSelector;
