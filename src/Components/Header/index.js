import logo from "../../mlh-prep.png";
import Background from "../Background";
import "./header.css";

const Header = ({ city, onChangeCity }) => {
  
  return (
    <Background>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div class="center-text-div">
        <div class="temparature">25 °C</div>
        <p class="weather">Clear Sky | New York</p>
      </div>
    </Background>
  );
};

export default Header;
