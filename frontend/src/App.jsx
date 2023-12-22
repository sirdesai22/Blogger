import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Newblog from './components/Newblog'
import Blog from './components/Blog'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/newblog' element={<Newblog />}/>
          <Route path='/:title' element={<Blog />}/>
        </Routes>
      </Router>
  )
}

export default App
