import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar'
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ContactComponent from './components/ContactComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <AboutComponent/>
      <ProjectComponent/>
      <ExperienceComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
