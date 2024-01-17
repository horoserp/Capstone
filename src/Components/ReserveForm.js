import { useState } from "react";
import Checkbox from "./Checkbox";
import SelectBar from "./SelectBar";
import testAPI from "../Hooks/testAPI";

function ReserveForm(state, stateChange) {

    const event = [
        "--Select--",
        "Birthday",
        "Anniversary",
        "Engagement",
    ];

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [accessible, setAccessible] = useState(false);
    const [child, setChild] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    const [dateValidating, setDateValidating] = useState(false);
    const [timeValidating, setTimeValidating] = useState(false);
    const [guestValidating, setGuestValidating] = useState(false);

    const availableTimes = state.state;
    const setAvailableTimes = state.stateChange;

    const submitIsValid =
        (date !== "") &&
        (time !== "") &&
        (time !== "--Select a Time--") &&
        (numOfGuests > 0);

    const timeIsDisabled = (date !== "");

    const handleDateBlur = () => {
        setDateValidating(true);
    }

    const dateError = () => {
        if(dateValidating && date === "") {
            return (
                <div className="col-1 error">Please enter a valid date</div>
            );
        }
        return "Choose date*";
    }

    const handleTimeBlur = () => {
        setTimeValidating(true);
    }

    const timeError = () => {
        if(timeValidating && (time === "" || time === "--Select a Time--")) {
            return (
                <div className="col-2 error">Please pick a time</div>
            );
        }
        return "Choose Time* (Pick a date first!)";
    }

    const handleGuestBlur = () => {
        setGuestValidating(true);
    }

    const guestError = () => {
        if(guestValidating && numOfGuests === "") {
            return (
                <div className="col-1 error">Please enter the number of guests</div>
            );
        } else if (guestValidating && numOfGuests < 1) {
            return (
                <div className="col-1 error">You must have at least 1 guest</div>
            );
        } else if (guestValidating && numOfGuests > 10) {
            return (
                <div className="col-1 error">You can not have more than 10 guests</div>
            );
        }
        return "Number of guests*";
    }

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
        const formData = {
            date: date,
            time: time,
            numOfGuests: numOfGuests,
            occasion: occasion,
            accessible: accessible,
            child: child,
            outdoor: outdoor
        };
        const success = testAPI.submitAPI(formData);
        if (success) {
            setTime("");
            setNumOfGuests("1");
            setOccasion("");
            setAccessible(false);
            setChild(false);
            setOutdoor(false);
            setAvailableTimes({ type: "updateTimes", selectedDate: date });
            setDate("");
            window.scrollTo(0,0);
            window.location.href="/login";
        } else {
            console.log("Failure");
        }
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
            <label htmlFor="res-date" className="col-1 gap">{dateError()}</label>
            <input
                type="date"
                id="res-date"
                className="col-1"
                value={date}
                onChange={dateHandler}
                onBlur={handleDateBlur}
                required
                aria-required="true"
            />
            <SelectBar
                inputName="res-time"
                display={time}
                onChangeHandler={timeHandler}
                onBlur={handleTimeBlur}
                options={availableTimes[availableTimes.length - 1].available}
                labelCol="3/4"
                labelRow="1/2"
                selectCol="3/4"
                selectRow="2/3"
                required
                aria-required="true"
                isDisabled={!timeIsDisabled}
            >
                {timeError()}
            </SelectBar>
            <label htmlFor="guests" className="col-1 gap">{guestError()}</label>
            <input
                type="number"
                value={numOfGuests}
                min="1"
                max="10"
                id="guests"
                className="col-1"
                placeholder="Select"
                onChange={(e) => setNumOfGuests(e.target.value)}
                onBlur={handleGuestBlur}
                aria-required="true"
                required
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
            <fieldset id="res-heading">
                <legend>Seating Options</legend>
                <div className="grid">
                    <Checkbox
                        inputName="wheelchair"
                        isChecked={accessible}
                        labelCol="1/2"
                        labelRow="1/2"
                        selectCol="1/2"
                        selectRow="2/3"
                        onChangeHandler={accessibleHandler}
                    >
                        Wheelchair Accessible
                    </Checkbox>
                    <Checkbox
                        inputName="child-seat"
                        isChecked={child}
                        labelCol="2/3"
                        labelRow="1/2"
                        selectCol="2/3"
                        selectRow="2/3"
                        onChangeHandler={childHandler}
                    >
                        Child Seat
                    </Checkbox>
                    <Checkbox
                        inputName="outdoor"
                        isChecked={outdoor}
                        labelCol="3/4"
                        labelRow="1/2"
                        selectCol="3/4"
                        selectRow="2/3"
                        onChangeHandler={outdoorHandler}
                    >
                        Outdoor Seating
                    </Checkbox>
                </div>
            </fieldset>
            <input
                type="submit"
                data-testid="submit-button"
                style={{gridColumn: "2/3", gridRow: "8/9", marginTop: 30}}
                value="Make Your Reservation"
                disabled={!submitIsValid}
                aria-label="On Click"
                />
        </form>
    );
}

export default ReserveForm;