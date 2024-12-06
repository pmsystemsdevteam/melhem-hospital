import { Outlet } from 'react-router'
import "./MainLayout.scss"
import SideBar from '../sideBar/SideBar'

function MainLayout() {
    return (
        <div className="main-layout">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default MainLayout