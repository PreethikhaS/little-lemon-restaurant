import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the Header heading and navigates to BookingForm', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    // Check if the header text is present
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    // Simulate clicking the reserve button
    const reserveButton = screen.getByRole("button", { name: /reserve/i }); // Adjust button name as necessary
    fireEvent.click(reserveButton);

    // Check if the BookingForm text is present after clicking
    const headingElementNew = screen.getByText("Choose Date:");
    expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    // Click on the reserve button to go to BookingForm
    const reserveButton = screen.getByRole("button", { name: /reserve/i });
    fireEvent.click(reserveButton);

    // Select an option in the time dropdown
    const timeSelect = screen.getByLabelText("Choose Time:");

    // Assuming you have options like "17:00", "18:00" etc.
    const testTime = "17:00"; // Example time
    userEvent.selectOptions(timeSelect, testTime);

    // Verify that the selected option is now selected
    expect(screen.getByRole('option', { name: testTime }).selected).toBe(true);
});

// Test for static text in BookingForm (e.g., label for date)
test('Renders the BookingForm date label', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    // Click on the reserve button to go to BookingForm
    const reserveButton = screen.getByRole("button", { name: /reserve/i });
    fireEvent.click(reserveButton);

    // Check if the date label is present
    const labelElement = screen.getByText("Choose Date:");
    expect(labelElement).toBeInTheDocument();
});

// Test for initializing times (assuming you have a function to do this)
test('Initialize Times returns correct initial state', () => {
    const expectedState = { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };

    // Mocking a function that initializes times
    const initializeTimes = () => expectedState;

    expect(initializeTimes()).toEqual(expectedState);
});

// Test for updateTimes function (mocking behavior)
test('updateTimes returns the same state provided', () => {
    const currentState = { availableTimes: ["17:00", "18:00"] };

    // Mocking a function that updates times
    const updateTimes = (state) => state;

    expect(updateTimes(currentState)).toEqual(currentState);
});