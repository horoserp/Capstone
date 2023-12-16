import restaurant from "../Images/restaurant.jpg";
import backButton from "../Images/circle-arrow-left-solid.svg";
import ReserveForm from "./ReserveForm";
import { useReducer } from "react";

const initialTimes = [
    {
        text: '--Select--',
        available: true,
    },
    {
        text: '17:00',
        available: true,
    },
    {
        text: '18:00',
        available: true,
    },
    {
        text: '19:00',
        available: true,
    },
    {
        text: '20:00',
        available: true,
    },
    {
        text: '21:00',
        available: true,
    },
    {
        text: '22:00',
        available: true,
    },
];

const reducer = (state, action) => {
    if (action.type === 'updateTimes') return state.slice(2, 5);
    if (action.type === 'intializeTimes') return initialTimes;
}


function Reservations() {

    const [availableTimes , setAvailableTimes] = useReducer(reducer, initialTimes);

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
                <ReserveForm
                    state={availableTimes}
                    stateChange={setAvailableTimes}
                />
            </div>
        </section>
    );
}

export default Reservations;