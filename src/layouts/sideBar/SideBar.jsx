import { NavLink } from "react-router"
import "./SideBar.scss"
import  logo  from "../../assets/logo_of_melhem.png"

function SideBar() {
    const menuLinks = [
        {
            id: 1,
            name: "Home",
            link: "/home"
        }, {
            id: 2,
            name: "Doctors",
            link: "/doctors"
        }, {
            id: 3,
            name: "Departments",
            link: "/departments"
        }, {
            id: 4,
            name: "Contact",
            link: "/contact"
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