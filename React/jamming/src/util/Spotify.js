require('dotenv').config()

const clientId = process.env.REACT_APP_SPOTIFY;
const redirectUri = "https://macjammin.surge.sh/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); 
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },

  async savePlaylist(playlistName,trackURIs) {
    let accessToken = Spotify.getAccessToken();
    let userID = '';
    let playlistID = '';
    const headers = {Authorization: `Bearer ${accessToken}`};

    if(!playlistName || !trackURIs) {
        return;
    }

    return fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(jsonResponse => {
        userID = jsonResponse.id;
  
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: 'POST',
          headers: {Authorization: `Bearer ${accessToken}`,'Content-type': 'application/json'},
          body: JSON.stringify({name: playlistName})
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          playlistID = jsonResponse.id;
  
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
            method: 'POST',
            headers: {Authorization: `Bearer ${accessToken}`,'Content-type': 'application/json'},
            body: JSON.stringify({uris: trackURIs})
          }).then(response => {
            return response.json();
          }).then(jsonResponse => {
            playlistID = jsonResponse.id;
          });
        });
      });
}
}
export default Spotify;