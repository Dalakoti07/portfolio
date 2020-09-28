import React from 'react';
import './App.css';
import NavBarComponent from './components/NavBar'
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ContactComponent from './components/ContactComponent';
import {getTheProjects,getTheTags,getProjectsByTag} from './utils/DataProvider'

function chipsClicked(tag) {
  let filteredList= getProjectsByTag(tag)
  console.log(filteredList);
}

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <AboutComponent/>
      <ProjectComponent projectsList={getTheProjects()}  tags={getTheTags()} tagOnClick={chipsClicked}/>
      <ExperienceComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
