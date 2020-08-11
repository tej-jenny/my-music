import React from "react";
import Home from "./Home";
import Browse from "./Browse";

const Main = ({ logOut }) => {
  return (
    <div>
      <Browse />
      <Home logOut={logOut} />
    </div>
  );
};

export default Main;
