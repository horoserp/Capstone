import { render, screen } from '@testing-library/react';
import Reservations from './Components/Reservations';
import ReserveForm from './Components/ReserveForm';

test('Renders the progress of making a reservation', () => {
  render(<Reservations/>);
  const progress = screen.getByText("Reserve a Table");
  expect(progress).toBeInTheDocument();
})

// test('Displays select element: time', () => {
//   const selectTime = screen.getByLabelText("Choose Time*");
//   expect(selectTime).toBeInTheDocument;
// })

// it('should return the initial state for selectedDate', () => {
//   expect(reducer({type: "initializeTimes", selectedDate: "2023-12-01"})).toEqual(
//     {
//       date: "2023-12-01",
//       available: [
//           '--Select--',
//           '17:00',
//           '18:00',
//           '19:00',
//           '20:00',
//           '21:00',
//           '22:00',w
//       ]
//     }
//   );
// })

// Write test for initializeTimes and updateTimes