import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button";
import logo from "../../mlh-prep.png";
import { ToggleButton } from "../ToggleButton";
import {toggleContext} from "../../App";

class Navbar extends Component {
  state = { clicked: false, selected: true };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };
  // render() {
  //   return (
  //     <nav className="NavbarItems" id="Home">
  //       <h1 className="navbar-logo">
  //         {" "}
  //         <img src={logo} width="100%" height="50%" />
  //       </h1>
  //       <div className="menu-icon" onClick={this.handleClick}>
  //         <i
  //           className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
  //         ></i>
  //       </div>
  //       <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
  //         {MenuItems.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <a className={item.cName} href={item.url}>
  //                 {item.title}
  //               </a>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //       <Button>Trip Planner</Button>
  //       <ToggleButton
  //         selected={this.state.selected}
  //         toggleSelected={this.toggleSelected}
  //       >
  //         {" "}
  //       </ToggleButton>
  //     </nav>
  //   );
  // }

  render() {
    return (
      <toggleContext.Consumer>
        { selected => {
          return <h1 style={{color: 'black'}}>{selected}</h1>
        }}
      </toggleContext.Consumer>
    );
  }
}

export default Navbar;
