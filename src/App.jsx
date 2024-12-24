import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import MainLayout from './layouts/mainLayout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import News from './pages/News'
import Technolgy from './pages/Technology'
import Contact from './pages/Contact'
import DepartmentDetail from './pages/DepartmentDetail'


function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>Melhem Admin</title>
      </Helmet>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<MainLayout />} >
          <Route path='/admin/home' element={<Home />} />
          <Route path='/admin/about' element={<About />} />
          <Route path='/admin/news' element={<News />} />
          <Route path='/admin/technology' element={<Technolgy />} />
          <Route path='/admin/contact' element={<Contact />} />
          <Route path='/admin/home/department-details' element={<DepartmentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
