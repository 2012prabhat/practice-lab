import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import UserList from './pages/HOC/UserList.jsx'
import Memo from './pages/Memo/Memo.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoc" element={<UserList />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
