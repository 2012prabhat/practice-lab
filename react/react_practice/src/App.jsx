import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import UserList from './pages/HOC/UserList.jsx'
import Memo from './pages/Memo/Memo.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HookUseMemo from './pages/Hooks/HookUseMemo.jsx'
import ValidationFrom from './pages/ValidationForm.jsx'
import Debounce from './pages/Debounce.jsx'
import ThrottleWithEffect from './pages/Throttling.jsx'
import TableSearchSortPagination from './pages/Table.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoc" element={<UserList />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/hooks/usememo" element={<HookUseMemo />} />
        <Route path="/form" element={<ValidationFrom />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/throttle" element={<ThrottleWithEffect />} />
        <Route path="/table" element={<TableSearchSortPagination />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
