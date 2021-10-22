import { React, Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import "./placesNearby.css";

export default class Carrousel extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: this.props.places,
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.state.items);
  // }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#1C539F",
      color: "#FFF",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      
    };
  }

  render() {
    return (
      <div className="carrousel">
        <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
          {this.props.places.map((item, index) => (
            <div key={index} style={Carrousel.CARD_STYLE}>
              <p className="name">{item.name}</p>
              <p className="address">Address: {item.vicinity}</p>
              <p className="rating">Ratings: {item.rating}</p>
            </div>
          ))}
        </ReactCardCarousel>
      </div>
    );
  }
}
