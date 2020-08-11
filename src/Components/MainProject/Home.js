import React from "react";

const Home = ({ logOut }) => {
  return (
    <div>
      <h1>Home</h1>
      <button className="btn" onClick={() => logOut()}>
        Log Out
      </button>
    </div>
  );
};

export default Home;
