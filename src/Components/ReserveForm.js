function ReserveForm() {
    return (
        <form style={{display: "grid", maxWidth: 200, gap: 20}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label hmtlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion (Optional)</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            <h3>Seating Options (Optional)</h3>
            <label htmlFor="wheel">Wheelchair Accessible</label>
            <input type="checkbox" id="wheel" value="Wheelchair"/>
            <label htmlFor="child">Child Seat</label>
            <input type="checkbox" id="child" value="Child Seat"/>
            <label htmlFor="outdoor">Outdoor Seating</label>
            <input type="checkbox"id="outdoor" value="Outdoor"/>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReserveForm;