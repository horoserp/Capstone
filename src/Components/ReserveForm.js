import { useState } from "react";
import Checkbox from "./Checkbox";
import SelectBar from "./SelectBar";

function ReserveForm(state, stateChange) {

    const event = [
        "--Select--",
        "Birthday",
        "Anniversary",
        "Engagement",
    ];

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);
    const [child, setChild] = useState(false);
    const [outdoor, setOutdoor] = useState(false);

    const availableTimes = state.state;
    const setAvailableTimes = state.stateChange;

    const dateHandler = (e) => {
        setDate(e.target.value);
        setAvailableTimes({ type: "initializeTimes", selectedDate: e.target.value });
    }

    const timeHandler = (e) => {
        setTime(e.target.value);
    }

    const eventHandler = (e) => {
        setOccasion(e.target.value);
    }

    const accessibleHandler = () => {
        setAccessible(!accessible);
    }

    const childHandler = () => {
        setChild(!child);
    }

    const outdoorHandler = () => {
        setOutdoor(!outdoor);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTime("");
        setNumOfGuests("1");
        setOccasion("");
        setAccessible(false);
        setChild(false);
        setOutdoor(false);
        setAvailableTimes({ type: "updateTimes", selectedDate: date });
        setDate("");
        // const pos = availableTimes.map(e => e.text).indexOf(time);
        // if (pos !== -1) {
        //     availableTimes[pos].available = false;
        // }
        // setAvailableTimes(availableTimes.filter(times => times.available === true));
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{display: "grid", maxWidth: 200, gap: 20}}
        >
            <label htmlFor="res-date">Choose date*</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={dateHandler}
            />
            <SelectBar
                inputName="res-time"
                display={time}
                onChangeHandler={timeHandler}
                options={availableTimes[0].available}
            >
                Choose Time*
            </SelectBar>
            <label htmlFor="guests">Number of guests*</label>
            <input
                type="number"
                value={numOfGuests}
                min="1"
                max="10"
                id="guests"
                onChange={(e) => setNumOfGuests(e.target.value)}
            />
            <SelectBar
                inputName="occasion"
                display={occasion}
                onChangeHandler={eventHandler}
                options={event}
            >
                Occasion (Optional)
            </SelectBar>
            <h3>Seating Options (Optional)</h3>
            <Checkbox
                inputName="wheelchair"
                isChecked={accessible}
                onChangeHandler={accessibleHandler}
            >
                Wheelchair Accessible
            </Checkbox>
            <Checkbox
                inputName="child-seat"
                isChecked={child}
                onChangeHandler={childHandler}
            >
                Child Seat
            </Checkbox>
            <Checkbox
                inputName="outdoor"
                isChecked={outdoor}
                onChangeHandler={outdoorHandler}
            >
                Outdoor Seating
            </Checkbox>
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default ReserveForm;