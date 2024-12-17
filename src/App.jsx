import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import MainLayout from './layouts/mainLayout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>Melhem Admin</title>
      </Helmet>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<MainLayout />} >
          <Route path='/admin-home' element={<Home />} />
          <Route path='/admin-about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
