import { useReducer } from "react";
import BackButton from "./BackButton";
import ReserveForm from "./ReserveForm";
import testAPI from "../Hooks/testAPI";
import restaurant from "../Images/restaurant.jpg";
import checkmark from "../Images/circle-check-solid.svg";

const initialTimes = (selectedDate) => {
    return (
        [
            {
                date: selectedDate,
                available: testAPI.fetchAPI(selectedDate)
            },
        ]
    );
}

const reducer = (state, action) => {
        switch (action.type) {
        case "initializeTimes":
            const match = state.filter(object => object.date === action.selectedDate);
            if (match.length === 0) {
                state.push(
                    {
                        date: action.selectedDate,
                        available: testAPI.fetchAPI(action.selectedDate)
                    }
                );
            };
            return state;
        case "updateTimes":
            return state;
        default:
            return state;
    };
}

const success = () => {
    return (
        <img
            src={checkmark}
            alt={"Black checkmark on yellow circle"}
            id="icon2"
        />
    );
}

function Reservations(props) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    //January is 0!
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const [availableTimes , setAvailableTimes] = useReducer(reducer, initialTimes(today));

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
                        <h2>{props.children}</h2>
                        {(props.renderButton) ? <BackButton/> : success()}
                    </div>
                </div>
            </div>
            {(props.children === "(Step 1 of 2)") ? (
                <div className="highlight-b pad">
                    <ReserveForm
                        state={availableTimes}
                        stateChange={setAvailableTimes}
                    />
                </div>
            ) : (
                null
            )}
        </section>
    );
}

export default Reservations;