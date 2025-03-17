import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import StudentLogin  from './assets/Studentlogin';
import FacultyLogin from './assets/FacultyLogin';
import Home from './assets/Home';
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Facultylogin' element={<FacultyLogin/>}></Route>
        <Route path='/Studentlogin' element={<StudentLogin/>}></Route>
      </Routes>
  </div>
  );
}

export default App
