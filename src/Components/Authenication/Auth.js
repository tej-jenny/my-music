import React from "react";

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