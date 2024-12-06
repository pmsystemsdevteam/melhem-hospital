import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from './layouts/mainLayout/MainLayout'
import Home from './pages/Home/Home'
import Doctors from './pages/Doctors'
import Departments from './pages/Departments'
import Contact from './pages/Contact'
import OurHospital from './pages/OutHospital'
import Appointments from './pages/GetAppointments'
import Login from './pages/Login'
import { Helmet } from 'react-helmet-async'


function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>Melhem Admin</title>
      </Helmet>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<MainLayout />} >
          <Route path='/home' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/our-hospital' element={<OurHospital />} />
          <Route path='/get-appointments' element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
