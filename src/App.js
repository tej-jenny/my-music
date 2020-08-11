import React, { useState } from "react";
import MainController from "./Components/Controller/MainController";
import SideNav from "./Components/SideNav/SideNav";
import Main from "./Components/MainProject/Main";
import "font-awesome/css/font-awesome.min.css";
import LandingPage from "./Components/Layout/LandingPage";

const App = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  return (
    <div>
      {userLogIn ? (
        <div>
          <div>
            <SideNav />
            <Main logOut={() => setUserLogIn(false)} />
          </div>
          <MainController />
        </div>
      ) : (
        <LandingPage loggedIn={() => setUserLogIn(true)} />
      )}
    </div>
  );
};

export default App;
