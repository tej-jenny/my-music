import React, { useState } from 'react'

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "a899d5a3d23f4feaa15483ccbf16f73d";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});window.location.hash = "";


const Auth = ({ loggedIn }) => {

  return (
    <>
      <h1>Welcome to My-Music</h1>
      <p>Organize, view and create Spotify playlists easily!</p>
      <p>Login to Spotify to try it out!</p>
      <button className="btn login" onClick={() => loggedIn()}>
        <i className="fa fa-spotify" aria-hidden="true"></i>Log in with
          Spotify
        </button>
    </>
  );
};

export default Auth;

