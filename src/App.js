import React from 'react';
import MainController from './Components/Controller/MainController';
import SideNav from './Components/SideNav/SideNav';
import Main from './Components/MainProject/Main';

const App = () => {
  return (
    <div>
      <div>
        <SideNav />
        <Main />
      </div >
      <MainController />
    </div >
  )
}

export default App

