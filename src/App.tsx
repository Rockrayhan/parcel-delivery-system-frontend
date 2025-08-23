import { Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'

function App() {


  return (
    <>
    <h1 className='bg-teal-300'>Header / navber</h1>
  <Outlet/>
    <p className='bg-slate-400'> footer </p>
    </>
  )
}

export default App
