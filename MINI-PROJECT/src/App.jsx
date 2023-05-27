import { useState } from 'react'
import './App.css'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Outlet /></div>
    </>
  );
}

export default App
