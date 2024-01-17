import { render, screen } from '@testing-library/react';
import Reservations, { initialTimes } from './Components/Reservations';
import testAPI from './Hooks/testAPI';
import ReserveForm from './Components/ReserveForm';

test('Renders <h1> element containing text', () => {
  render(<Reservations/>);
  const text = screen.getByText("Reserve a Table");
  expect(text).toBeInTheDocument();
})

test('Booking times is initialized', () => {
  const result = initialTimes("2024-01-10");
  expect(result).not.toHaveLength(0);
})

test('fetchAPI returns a non-empty array of booking times', () => {
  const result = testAPI.fetchAPI("2024-01-10");
  expect(result).not.toHaveLength(0);
})

test('Checks that submit input is initially disabled', () => {
  render(<Reservations/>);
  // Need to figure out how to pass props to ReserveForm
  // const button = render(<ReserveForm state={} stateChange={}/>).getByTestId("submit-button");
  // expect(button.disabled).toBeTruthy();
})