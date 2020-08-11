import React from 'react';
import MainController from './Components/Controller/MainController';
import SideNav from './Components/SideNav/SideNav';
import Main from './Components/MainProject/Main';
import 'font-awesome/css/font-awesome.min.css';
import LandingPage from './Components/Layout/LandingPage';

const App = () => {
  return (
    <div>
      <LandingPage />
      <div>
        <SideNav />
        <Main />
      </div >
      <MainController />
    </div >
  )
}

export default App

