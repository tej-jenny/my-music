import React, { useState } from "react";
import MainController from "./Components/Controller/MainController";
import SideNav from "./Components/SideNav/SideNav";
import Main from "./Components/MainProject/Main";
import "font-awesome/css/font-awesome.min.css";
import Auth from './Components/Authenication/Auth';

const App = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  return (
    <div>
      {userLogIn ? (
        <div>
          <div>
            <Main logOut={() => setUserLogIn(false)} />
            <SideNav />
            <MainController />
          </div>
        </div>
      ) : (
        <Auth loggedIn={() => setUserLogIn(true)} />
      )}
    </div>
  );
};

export default App;
