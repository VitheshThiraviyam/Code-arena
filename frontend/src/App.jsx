import { useState } from 'react';
import './App.css';
import StudentLogin from './assets/StudentLogin';
import FacultyLogin from './assets/FacultyLogin';
import Home from './assets/Home';
import {Route,Routes} from 'react-router-dom'
import StudentHome from './assets/Studenthome';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Facultylogin' element={<FacultyLogin/>}></Route>
        <Route path='/Studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/Studenthome' element={<StudentHome/>}></Route>
      </Routes>
  </div>
  );
}

export default App
