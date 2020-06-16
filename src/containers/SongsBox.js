import React, { Component } from 'react';
import Header from '../components/Header.js';
import SongList from '../components/SongList.js';


class SongsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songList: [],
      selectedGenre: ""
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({songList: res.feed.entry}))
  }

  render() {
    return (
        <div className="container">
          <Header title="UK Top 20"/>
          <SongList songList ={this.state.songList}/>
        </div>
    )
  };
}

export default SongsBox;
