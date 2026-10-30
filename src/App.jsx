import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ListTask from './components/ListTask'
import AddTask from './components/AddTask'
import { useSelector } from 'react-redux'

function App() {
  const tasks= useSelector((state) => state.tasks)
  return (
    <>
      <h1>To-Do App</h1>
      <AddTask />
      <ListTask />
    </>
  )
}
export default App
