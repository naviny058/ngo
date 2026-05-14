import React from 'react'
import './App.css'
import DashboardLayout from './pages/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Setting from './pages/Setting'
import Analytics from './pages/Analytics'
import Main from './components/Main'
import Dashboard from './pages/dashboard'
import Siteconfig from './pages/siteConfig'
import News from './pages/news'
import Register from './pages/(auth)/Register'
import Login from './pages/(auth)/Login'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard><Main /></Dashboard>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<Dashboard><News /></Dashboard>} />
        <Route path="/setting" element={<Dashboard><Setting /></Dashboard>} />
        <Route path="/analytics" element={<Dashboard><Analytics /></Dashboard>} />
        <Route path="/site-configuration" element={<Dashboard><Siteconfig /></Dashboard>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App