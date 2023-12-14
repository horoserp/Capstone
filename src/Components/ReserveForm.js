import { useState } from "react";
import Checkbox from "./Checkbox";
import SelectBar from "./SelectBar";

function ReserveForm() {

    const times = [
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

    const event = [
        {
            text: "--Select--",
            available: true,
        },
        {
            text: "Birthday",
            available: true,
        },
        {
            text: "Anniversary",
            available: true,
        },
        {
            text: "Engagement",
            available: true,
        },
    ];

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);
    const [child, setChild] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    const [availableTimes , setAvailableTimes] = useState(times);

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
        setDate("");
        setTime("");
        setNumOfGuests("1");
        setOccasion("");
        setAccessible(false);
        setChild(false);
        setOutdoor(false);
        const pos = availableTimes.map(e => e.text).indexOf(time);
        if (pos !== -1) {
            availableTimes[pos].available = false;
        }
        setAvailableTimes(availableTimes.filter(times => times.available === true));
}


    return (
        <form
            onSubmit={handleSubmit}
            style={{display: "grid", maxWidth: 200, gap: 20}}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <SelectBar
                inputName="res-time"
                display={time}
                onChangeHandler={timeHandler}
                options={availableTimes}
            >
                Choose Time
            </SelectBar>
            <label htmlFor="guests">Number of guests</label>
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
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReserveForm;