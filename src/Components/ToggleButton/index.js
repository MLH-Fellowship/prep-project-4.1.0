import React, { Component } from "react";
import "./toggleButton.css";

import { ToggleUnitsContext } from "../../App";

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // render() {
  //   const { selected, toggleSelected } = this.props;
  //   return (
  //     <div className="toggle-container" onClick={toggleSelected}>
  //       <div className={`dialog-button ${selected ? "" : "disabled"}`}>
  //         {selected ? "°C" : "°F"}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <ToggleUnitsContext.Consumer>
        {([selected, setSelected]) => {
          return (
            <div className="toggle-container" onClick={() => setSelected(!selected)}>
              <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "°C" : "°F"}
              </div>
            </div>
          );
        }}
      </ToggleUnitsContext.Consumer>
    );
  }
}
