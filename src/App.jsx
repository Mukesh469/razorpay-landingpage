import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/common/Layout'

import './App.css'

import Home from './components/pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}



export default App
