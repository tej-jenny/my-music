import React, { useState, useEffect } from "react";
import Home from "./Home";
import Browse from "./Browse";
import MainController from "./../Controller/MainController";
import SideNav from "./../SideNav/SideNav";

const Main = ({ logOut }) => {

  useEffect(() => {   
    console.log("Hello"); 
  });

  return (
    <main>
      <div className="split-background">
        <button className="btn logout" onClick={() => logOut()}>
          Log Out
        </button>
        <div className="clonelogo"><i className="fa fa-spotify" aria-hidden="true"></i>SPOTIFY CLONE</div>
        <Home />
        <Browse />
        <SideNav />
      </div>
      <MainController />
    </main>
  );
};

export default Main;
