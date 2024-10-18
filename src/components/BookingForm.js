import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // State for error messages
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({});

        // Validation logic
        let validationErrors = {};

        if (!date) {
            validationErrors.date = "Date is required.";
        }
        if (!times) {
            validationErrors.times = "Time is required.";
        }
        if (!guests || guests < 1 || guests > 10) {
            validationErrors.guests = "Number of guests must be between 1 and 10.";
        }
        if (!occasion) {
            validationErrors.occasion = "Occasion is required.";
        }

        // If there are errors, set them and prevent submission
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no errors, submit the form
        props.SubmitForm({ date, times, guests, occasion });
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={(e) => handleChange(e.target.value)}
                                type="date"
                                required
                            />
                            {errors.date && <p className="error">{errors.date}</p>}
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                                required
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTime => (
                                    <option key={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                            {errors.times && <p className="error">{errors.times}</p>}
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input
                                id="book-guests"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                type={"number"}
                                placeholder={0}
                                max={10}
                                required
                            />
                            {errors.guests && <p className="error">{errors.guests}</p>}
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select
                                id="book-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                            >
                                <option value="">Select an Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            {errors.occasion && <p className="error">{errors.occasion}</p>}
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;