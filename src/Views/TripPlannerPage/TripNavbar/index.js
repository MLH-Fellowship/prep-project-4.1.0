import { useState } from "react";
import {NavItems} from "./NavItems"
import logo from '../../../mlh-prep.png';
import "../../../Components/navbar/Navbar.css"
import "../trip.css"
const TripNavBar = (props) => {
    const [clicked, setClicked ]  = useState (false)
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return(
        <nav className="NavbarItems" id="tripPlanner">
        <h1 className="navbar-logo"> <img src={logo} width="100%" height="50%" /></h1>
        <div className="menu-icon" onClick={handleClick}>
        <i className={clicked? 'fas fa-times':'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active':'nav-menu'}>
            {NavItems.map((item, index)=>{
                return (
                    <li key={index}> 
                        <a className={item.cName} href={item.url}> 
                            {item.title}                            
                        </a>
                    </li>
                )
            })}
         
        </ul>

    </nav>
    )
}

export default TripNavBar