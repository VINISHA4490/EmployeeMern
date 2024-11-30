import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Employees from './components/Employees'
import EmployeeForm from './components/EmployeeForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/sign' element={<SignUp/>}/>
    <Route path='/employee' element={<Employees/>}/>
    <Route path='/empform' element={<EmployeeForm/>}/>
    
  
  </Routes>

    </>
  )
}

export default App
