import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  async componentWillMount() {
    console.log(' Component will mount in AlbumList');
    try {
      let response = await fetch(
        'https://rallycoding.herokuapp.com/api/music_albums'
      );
      let responseJson = await response.json();i
      this.setState({ albums: responseJson });
      // console.log(responseJson);
    } catch (err) {
      console.error(err);
      //TODO
    }
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail album={album} />);
  }

  render() {
    console.log('Hello' + JSON.stringify(this.state));
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
