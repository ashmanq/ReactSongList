import React, { Component } from 'react';
import Header from '../components/Header.js';
import SongList from '../components/SongList.js';
import GenreSelector from '../components/GenreSelector.js';


class SongsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songList: [],
      filteredSongList:[],
      genreList:[],
      selectedGenre: ""
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(res => {
      const songs = res.feed.entry;

      this.setState({songList: songs, filteredSongList: songs});
      const genreList = songs.map((song) => {
        return song.category.attributes.label;
      });

      this.setState({genreList:[...new Set(genreList)]});
    })

  }

  handleSelect(genre) {
    console.log(genre);
    if(genre === "All"){
        this.setState({filteredSongList: this.state.songList});
      return;
    }

    const filteredList = this.state.songList.filter((song) => {
      return song.category.attributes.label  === genre;
    });

    this.setState({ filteredSongList: filteredList});
  }

  render() {

    return (
        <div className="container">
          <Header title="UK Top 20"/>
          <GenreSelector selectList={this.state.genreList} onSelect={this.handleSelect}/>
          <SongList songList ={this.state.filteredSongList}/>
        </div>
    )
  };
}

export default SongsBox;
