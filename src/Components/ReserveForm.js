import { useState } from "react";
import Checkbox from "./Checkbox";
import SelectBar from "./SelectBar";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

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
        window.scrollTo(0,0);
        navigate("/login");
        // const pos = availableTimes.map(e => e.text).indexOf(time);
        // if (pos !== -1) {
        //     availableTimes[pos].available = false;
        // }
        // setAvailableTimes(availableTimes.filter(times => times.available === true));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid"
        >
            <label htmlFor="res-date" className="col-1 gap">Choose date*</label>
            <input
                type="date"
                id="res-date"
                className="col-1"
                value={date}
                onChange={dateHandler}
            />
            <SelectBar
                inputName="res-time"
                display={time}
                onChangeHandler={timeHandler}
                options={availableTimes[0].available}
                labelCol="3/4"
                labelRow="1/2"
                selectCol="3/4"
                selectRow="2/3"
            >
                Choose Time*
            </SelectBar>
            <label htmlFor="guests" className="col-1 gap">Number of guests*</label>
            <input
                type="number"
                value={numOfGuests}
                min="1"
                max="10"
                id="guests"
                className="col-1"
                onChange={(e) => setNumOfGuests(e.target.value)}
            />
            <SelectBar
                inputName="occasion"
                display={occasion}
                onChangeHandler={eventHandler}
                options={event}
                labelCol="3/4"
                labelRow="3/4"
                selectCol="3/4"
                selectRow="4/5"
            >
                Occasion (Optional)
            </SelectBar>
            <h2 id="res-heading">Seating Options (Optional)</h2>
            <Checkbox
                inputName="wheelchair"
                isChecked={accessible}
                labelCol="1/2"
                labelRow="6/7"
                selectCol="1/2"
                selectRow="7/8"
                onChangeHandler={accessibleHandler}
            >
                Wheelchair Accessible
            </Checkbox>
            <Checkbox
                inputName="child-seat"
                isChecked={child}
                labelCol="2/3"
                labelRow="6/7"
                selectCol="2/3"
                selectRow="7/8"
                onChangeHandler={childHandler}
            >
                Child Seat
            </Checkbox>
            <Checkbox
                inputName="outdoor"
                isChecked={outdoor}
                labelCol="3/4"
                labelRow="6/7"
                selectCol="3/4"
                selectRow="7/8"
                onChangeHandler={outdoorHandler}
            >
                Outdoor Seating
            </Checkbox>
            <input
                type="submit"
                style={{gridColumn: "2/3", gridRow: "8/9", marginTop: 30}}
                value="Make Your Reservation"
            />
        </form>
    );
}

export default ReserveForm;