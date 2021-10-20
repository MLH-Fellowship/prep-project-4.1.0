import "../trip.css"
import "./header.css"
const TripHeader = ({children}) => {
  return (
    <div class="tripheader">
        {children}
        <h1>Trip Planner</h1><br />
        <div class="d-flex justify-content-center">
        <form action="#">
        <div class="form-group d-sm-flex">
            <div class="d-flex ml-2 align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="From" class="form-control" />
                <div class="label" id="from"></div> 
            </div>
            <div class="d-flex ml-2 align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="To" class="form-control" />
                <div class="label" id="to"></div> 
            </div>
        </div>

        </form>
        </div>
    </div>
   
  );
};

export default TripHeader;
