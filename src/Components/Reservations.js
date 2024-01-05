import { useReducer } from "react";
import BackButton from "./BackButton";
import ReserveForm from "./ReserveForm";
import restaurant from "../Images/restaurant.jpg";
import checkmark from "../Images/circle-check-solid.svg";

const initialTimes = (selectedDate) => {
    return (
        [
            {
                date: selectedDate,
                available: [
                        '--Select--',
                        '17:00',
                        '18:00',
                        '19:00',
                        '20:00',
                        '21:00',
                        '22:00',
                ]
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
                        available: [
                            '--Select--',
                            '17:00',
                            '18:00',
                            '19:00',
                            '20:00',
                            '21:00',
                            '22:00',
                        ]
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

    const [availableTimes , setAvailableTimes] = useReducer(reducer, initialTimes("2023-12-20"));

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