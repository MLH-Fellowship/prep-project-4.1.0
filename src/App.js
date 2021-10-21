import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TripPlannerPage from "./Views/TripPlannerPage";
import HomePage from "./Views/HomePage";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/trip-planner" component={TripPlannerPage} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
