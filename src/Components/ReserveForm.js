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

    const isDateValid = (m_date) => {

        const today = new Date();
        today.setHours(0,0,0,0);

        if(m_date === "") {
            return false;
        } else {
            const d = m_date.split("-",3);
            const testDate = new Date(d[0], d[1]-1, d[2]);
            if(testDate < today) {
                return false;
            }
        }
        return true;
    }

    const submitIsValid =
        (date !== "") &&
        (isDateValid(date)) &&
        (time !== "") &&
        (time !== "--Select a Time--") &&
        (numOfGuests > 0) &&
        (numOfGuests < 11);

    const timeIsDisabled = (date !== "" && isDateValid(date));

    const handleDateBlur = () => {
        setDateValidating(true);
    }

    const dateError = () => {
        // console.log(date);
        // console.log(isDateValid(date));
        if(dateValidating && date === "") {
            return (
                <div className="col-1 error">Date is required</div>
            );
        } else if (dateValidating && !isDateValid(date)) {
        // if(dateValidating && isDateValid(date)) {
            return (
                <div className="col-1 error">Please enter today's date or later</div>
            )
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
        >
            <div className="grid">
                <div>
                    <label htmlFor="res-date" className="gap">{dateError()}</label>
                    <div>
                        <input
                            type="date"
                            id="res-date"
                            value={date}
                            onChange={dateHandler}
                            onBlur={handleDateBlur}
                            required
                            style={{minWidth: "45%"}}
                            aria-required="true"
                        />
                    </div>
                </div>
                <div>
                    <SelectBar
                        inputName="res-time"
                        display={time}
                        onChangeHandler={timeHandler}
                        onBlur={handleTimeBlur}
                        options={availableTimes[availableTimes.length - 1].available}
                        required
                        aria-required="true"
                        isDisabled={!timeIsDisabled}
                    >
                        <div>{timeError()}</div>
                    </SelectBar>
                </div>
                <div>
                    <label htmlFor="guests" className="gap">{guestError()}</label>
                    <div>
                        <input
                            type="number"
                            value={numOfGuests}
                            min="1"
                            max="10"
                            id="guests"
                            placeholder="Select"
                            onChange={(e) => setNumOfGuests(e.target.value)}
                            onBlur={handleGuestBlur}
                            aria-required="true"
                            required
                            style={{minWidth: "45%"}}
                        />
                    </div>
                </div>
                <div>
                    <SelectBar
                        inputName="occasion"
                        display={occasion}
                        onChangeHandler={eventHandler}
                        options={event}
                    >
                        <div>Occasion (Optional)</div>
                    </SelectBar>
                </div>
            </div>
            <fieldset>
                <legend>Seating Options</legend>
                <div className="grid-seating">
                    <div>
                        <Checkbox
                            inputName="wheelchair"
                            isChecked={accessible}
                            onChangeHandler={accessibleHandler}
                        >
                            <div>Wheelchair Accessible</div>
                        </Checkbox>
                    </div>
                    <div>
                        <Checkbox
                            inputName="child-seat"
                            isChecked={child}
                            onChangeHandler={childHandler}
                        >
                            <div>Child Seat</div>
                        </Checkbox>
                    </div>
                    <div>
                        <Checkbox
                            inputName="outdoor"
                            isChecked={outdoor}
                            onChangeHandler={outdoorHandler}
                        >
                            <div>Outdoor Seating</div>
                        </Checkbox>
                    </div>
                </div>
            </fieldset>
            <div className="center">
                <input
                    type="submit"
                    data-testid="submit-button"
                    value="Make Your Reservation"
                    style={{marginTop: 35, }}
                    disabled={!submitIsValid}
                    aria-label="On Click"
                />
            </div>
        </form>
    );
}

export default ReserveForm;