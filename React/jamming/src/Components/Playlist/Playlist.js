import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}

	render() {
		return(
			<div className="Playlist">
	            <input value={this.props.playlistName} 
	            	   onChange={this.handleNameChange} />
	            <TrackList playlistTracks={this.props.playlistTracks}
	            		   onRemove={this.props.onRemove} 
	            		   onAdd= {this.props.onAdd} 
	            		   isRemoval={true} />
	            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
          </div>
			);
	}
}

export default Playlist;