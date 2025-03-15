import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import StudentLogin  from './assets/Studentlogin';

function App() {
  const [count, setCount] = useState(0)
  return(
    <div>
    <h1>Code Arena</h1>
    <h2>Coding tool</h2>
    <StudentLogin/>
  </div>
  )
}

export default App
