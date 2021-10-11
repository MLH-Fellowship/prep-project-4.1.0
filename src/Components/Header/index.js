import logo from "../../mlh-prep.png";

const Header = ({ city, onChangeCity }) => {
  return (
    <div>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <h2>Enter a city below 👇</h2>
      <input
        type="text"
        value={city}
        onChange={(event) => onChangeCity(event.target.value)}
      />
    </div>
  );
};

export default Header;
