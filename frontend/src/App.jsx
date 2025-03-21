import './App.css';
import StudentLogin from './assets/StudentLogin';
import FacultyLogin from './assets/FacultyLogin';
import Home from './assets/Home';
import {Route,Routes} from 'react-router-dom'
import StudentHome from './assets/Studenthome';
import AboutUs from './assets/AboutUs';
import Header from './assets/Header';
import Problemlist from './assets/Problemlist';
import Footer from './assets/Footer';
import Studentregister from './assets/Studentregister';
import AdminHome from './assets/Adminhome';

function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Facultylogin' element={<FacultyLogin/>}></Route>
        <Route path='/Studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/Studenthome' element={<StudentHome/>}></Route>
        <Route path='/Aboutus' element={<AboutUs/>}></Route>
        <Route path='/problemlist' element={<Problemlist/>}></Route>
        <Route path='/sregister' element={<Studentregister/>}></Route>
        <Route path='/Adminhome' element={<AdminHome/>}></Route>
      </Routes>
      <Footer/>
  </div>
  );
}

export default App
