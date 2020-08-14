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
    <div>
      <button className="btn logout" onClick={() => logOut()}>
        Log Out
      </button>
      <Home />
      <Browse />
      <SideNav />
      <MainController />
    </div>
  );
};

export default Main;
