import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar'
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <AboutComponent/>
      <ProjectComponent/>
    </div>
  );
}

export default App;
