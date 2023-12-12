import restaurant from "../Images/restaurant.jpg";
import backButton from "../Images/circle-arrow-left-solid.svg";
import ReserveForm from "./ReserveForm";

function Reservations() {
    return (
        <section>
            <div className="primary-b">
                <div className="container pad">
                    <img
                        src={restaurant}
                        alt={"Outdoor seating at Little Lemon"}
                        id="reserve-image"
                    />
                    <div style={{height: 350, color: '#F4CE14'}}>
                        <h1 style={{}}>Reserve a Table</h1>
                        <h2>(Step 1 of 2)</h2>
                        <img
                            src={backButton}
                            alt={"Left pointing arrow"}
                            id="icon"
                        />
                    </div>
                </div>
            </div>
            <div className="highlight-b pad">
                <ReserveForm/>
            </div>
        </section>
    );
}

export default Reservations;