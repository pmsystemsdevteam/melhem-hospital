import { NavLink } from "react-router"
import "./SideBar.scss"
import logo from "../../assets/logo_of_melhem.png"

function SideBar() {
    const menuLinks = [
        {
            id: 1,
            name: "Home",
            link: "/admin-home"
        }, {
            id: 7,
            name: "About",
            link: "/admin-about"
        }, {
            id: 2,
            name: "Doctors",
            link: "/admin-doctors"
        }, {
            id: 3,
            name: "Departments",
            link: "/admin-departments"
        }, {
            id: 4,
            name: "Contact",
            link: "/admin-contact"
        }, {
            id: 5,
            name: "Our Hospital",
            link: "/our-hospital"
        }, {
            id: 6,
            name: "Get Appointments",
            link: "/get-appointments"
        }
    ]
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <img src={logo} alt="" />
            </div>
            <ul>
                {menuLinks.map(item => (
                    <NavLink key={item.id} className={'nav-link'} to={item.link}>{item.name}</NavLink>
                ))}
            </ul>
        </div>
    )
}

export default SideBar