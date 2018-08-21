import React from 'react';
import './App.css';

import PlayList from '../PlayList/PlayList';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            playlistName: '',
            playlistTracks: []
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        let trackToPush = this.state.playlistTracks.push(track);
        this.setState({ playlistTracks: trackToPush });
    }

    removeTrack(track) {
        let filteredPlaylistTracks = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
        this.setState({
            playlistTracks: filteredPlaylistTracks
        });
    }

    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                      <SearchResults
                        onAdd={this.addTrack}
                        searchResults={this.state.searchResults} />
                      <PlayList
                        onRemove={this.removeTrack}
                        playlistName={this.state.playlistName}
                        playlistTracks={this.state.playlistTracks}
                        onNameChange={this.updatePlaylistName}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
