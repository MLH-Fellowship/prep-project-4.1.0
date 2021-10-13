const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.results.weather[0].main}</h3>
      <p>Feels like {props.results.main.feels_like}°C</p>
      <i>
        <p>
          {props.results.name}, {props.results.sys.country}
        </p>
      </i>
    </div>
  );
};

export default Card;
