import Regester from './pages/Regester'
import Login from './pages/Login'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element= {<Login />}/>
      <Route path='regester' element= {<Regester />}/>
    </Routes>
  )
}

export default App
