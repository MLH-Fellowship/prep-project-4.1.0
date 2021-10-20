import React, {Component} from "react";
import {MenuItems} from "./MenuItems"
import './Navbar.css';
import {Button} from '../Button'
import logo from '../../mlh-prep.png';
class Navbar extends Component{
    state ={ clicked:false }
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <nav className="NavbarItems" id="Home">
                <h1 className="navbar-logo"> <img src={logo} width="100%" height="50%" /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}> 
                                <a className={item.cName} href={item.url}> 
                                    {item.title}                            
                                </a>
                            </li>
                        )
                    })}
                 
                </ul>
                <Button onclick={()=> {window.location.href = "./trip" }}>Trip Planner</Button>
            </nav>
        );
    }
}

export default Navbar;