import React, { Component } from "react";
import "./toggleButton.css";

import {ToggleUnitsContext} from "../../Views/HomePage"

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
