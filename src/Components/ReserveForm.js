import { useState } from "react";

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
    ]

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);
    const [child, setChild] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    const [availableTimes , setAvailableTimes] = useState(times);

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
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={timeHandler}
            >
                {availableTimes.map((option) => {
                        if (!option.available) {
                            return null;
                        }
                        return (
                        <option
                            key={option.text}
                            value={option.text}>
                                {option.text}
                        </option>
                    );
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                value={numOfGuests}
                min="1"
                max="10"
                id="guests"
                onChange={(e) => setNumOfGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion (Optional)</label>
            <select id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
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