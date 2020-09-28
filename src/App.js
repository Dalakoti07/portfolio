import React,{useState} from 'react';
import './App.css';
import NavBarComponent from './components/NavBar'
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ContactComponent from './components/ContactComponent';
import {getTheProjects,getTheTags,getProjectsByTag,getPastExperienceData} from './utils/DataProvider'

var currentProjects
var setProjectList

function chipsClicked(tag) {
  let filteredList= getProjectsByTag(tag)
  console.log(filteredList);
  setProjectList(projects=> filteredList)
}

function App() {
  // using react hooks in functional-components, making state and stateSetter global, maybe bad practise
  [currentProjects,setProjectList]= useState(()=> getTheProjects())

  return (
    <div className="App">
      <NavBarComponent/>
      <AboutComponent/>
      <ProjectComponent projectsList={currentProjects}  tags={getTheTags()} tagOnClick={chipsClicked}/>
      <ExperienceComponent experiences={getPastExperienceData()}/>
      <ContactComponent/>
    </div>
  );
}

export default App;
