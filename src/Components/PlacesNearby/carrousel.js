import { React, Component } from "react";
import ReactCardCarousel from "react-card-carousel";

export default class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({ items: this.props.items });
  }

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
      <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
        {this.state.items.map((item, index) => (
          <div key={index} style={Carrousel.CARD_STYLE}>
            <p className="name">{item.name}</p>
            <p className="address">{item.vicinity}</p>
            <p className="rating">{item.rating}</p>
          </div>
        ))}
      </ReactCardCarousel>
    );
  }
}
