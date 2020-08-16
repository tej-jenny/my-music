import React, { useState } from "react";
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
            <Main logOut={() => setUserLogIn(false)} />
          </div>
        </div>
      ) : (
          <LandingPage loggedIn={() => setUserLogIn(true)} />
        )}
    </div>
  );
};

export default App;
