

import Sidebar from './Components/SIdebar/Sidebars'
import './App.css'
import Task from './Components/Task'
import Home from './Components/Home/Home'
import Try from './Components/SIdebar/Try'
import { Route, Router, Routes } from 'react-router-dom'
import Hold from './Components/AllTask/Hold'

function App() {
  return (
    <div className="App">
      <Routes>
  <Route path="/" element={<Home />} >
          <Route path='/addtask' element={<Task />} />
          <Route path='/onhold' element={<Hold />} />
          <Route path='/task' element={<h1>on task</h1>} />
          <Route path='/ongoing' element={<h1>on going</h1>} />
          <Route path='/completed' element={<h1>completed</h1>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
