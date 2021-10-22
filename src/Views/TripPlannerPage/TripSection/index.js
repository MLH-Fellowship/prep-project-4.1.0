import "./section.css";
import hotel from "./hotel.png";
import place from "./place.png";
import cafe from "./cafe.png";
const TripSection = () => {
  return (
    <>
      <div className="heading">
        <h1 className="heading-h1">Features</h1>
      </div>
      <section class="features-grid">
        <article class="features-card">
          <div class="features-icon">
            <img src={hotel} style={{ width: "30%", height: "100%" }} />
          </div>
          <div class="features-text">
            <h2>Places to Stay</h2>
          </div>
        </article>
        <article class="features-card">
          <div class="features-icon">
            <img src={place} style={{ width: "30%", height: "100%" }} />
          </div>
          <div class="features-text">
            <h2>Explore Places</h2>
          </div>
        </article>
        <article class="features-card">
          <div class="features-icon">
            <img src={cafe} style={{ width: "30%", height: "100%" }} />
          </div>
          <div class="features-text">
            <h2>Find Restaurants</h2>
          </div>
        </article>
      </section>
    </>
  );
};

export default TripSection;
