import React from "react";
import Home from "./Home";
import Browse from "./Browse";

const Main = ({ logOut }) => {
  return (
    <div>
      <button className="btn logout" onClick={() => logOut()}>
        Log Out
      </button>
      <Home />
      <Browse />
    </div>
  );
};

export default Main;
