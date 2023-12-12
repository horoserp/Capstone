import { useState } from "react";

function ReserveForm() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);

    const accessibleHandler = () => {
        setAccessible(!accessible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, time, numOfGuests, occasion, accessible);
        setDate("");
        setTime("");
        setNumOfGuests("");
        setOccasion("");
        setAccessible(false);
    }


    return (
        <form
            onSubmit={handleSubmit}
            style={{display: "grid", maxWidth: 200, gap: 20}}
        >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
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
            <input type="checkbox" id="child2" value="Child Seat"/>
            <label htmlFor="outdoor">Outdoor Seating</label>
            <input type="checkbox"id="outdoor" value="Outdoor"/>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReserveForm;