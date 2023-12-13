import { useState } from "react";

function ReserveForm() {

    const options = [
        {
            value: '',
            text: '--Select--',
        },
        {
            value: '17:00',
            text: '17:00',
        },
        {
            value: '18:00',
            text: '18:00',
        },
        {
            value: '19:00',
            text: '19:00',
        },
        {
            value: '20:00',
            text: '20:00',
        },
        {
            value: '21:00',
            text: '21:00',
        },
        {
            value: '22:00',
            text: '22:00',
        },
    ];

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);
    const [child, setChild] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    const [selected, setSelected] = useState(options[0].value);

    const accessibleHandler = () => {
        setAccessible(!accessible);
    }

    const childHandler = () => {
        setChild(!child);
    }

    const outdoorHandler = () => {
        setOutdoor(!outdoor);
    }

    const timeHandler = (e) => {
        setTime(e.target.value);
        setSelected(e.target.value);
        //Remove item from array
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, time, numOfGuests, occasion, accessible, child, outdoor);
        setDate("");
        setTime("");
        setNumOfGuests("");
        setOccasion("");
        setAccessible(false);
        setChild(false);
        setOutdoor(false);
        setSelected(options[0].value);
}


    return (
        <form
            onSubmit={handleSubmit}
            style={{display: "grid", maxWidth: 200, gap: 20}}
        >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={selected} onChange={timeHandler}
            >
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    );
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(e) => setNumOfGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion (Optional)</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>--Select--</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            <h3>Seating Options (Optional)</h3>
            <label htmlFor="wheel">Wheelchair Accessible</label>
            <input
                type="checkbox"
                id="wheel"
                checked={accessible}
                onChange={accessibleHandler}
            />
            <label htmlFor="child2">Child Seat</label>
            <input
                type="checkbox"
                id="child2"
                value="Child Seat"
                checked={child}
                onChange={childHandler}
            />
            <label htmlFor="outdoor">Outdoor Seating</label>
            <input
                type="checkbox"
                id="outdoor"
                value="Outdoor"
                checked={outdoor}
                onChange={outdoorHandler}
            />
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReserveForm;