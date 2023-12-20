import { render, screen } from '@testing-library/react';
import Reservations from './Components/Reservations';
import ReserveForm from './Components/ReserveForm';

test('Renders the progress of making a reservation', () => {
  render(<Reservations/>);
  const progress = screen.getByText("(Step 1 of 2)");
  expect(progress).toBeInTheDocument();
})

// test('initializeTimes sets the state correctly to initial value', () => {

// })