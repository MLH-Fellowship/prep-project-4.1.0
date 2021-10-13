import Snowfall from 'react-snowfall'
import "../background.css";

const SnowBg = ({ children, results }) => {

  return (
    <div className="background" id="snow">
        <Snowfall  />
      {children}
    </div>
  );
};

export default SnowBg;