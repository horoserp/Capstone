import { render, screen } from '@testing-library/react';
import Reservations from './Components/Reservations';
import testAPI from './Hooks/testAPI';

test('Renders <h1> element containing text', () => {
  render(<Reservations/>);
  const text = screen.getByText("Reserve a Table");
  expect(text).toBeInTheDocument();
})

test('fetchAPI returns a non-empty array of booking times', () => {
  const result = testAPI.fetchAPI("2024-01-10");
  expect(result).not.toHaveLength(0);
})

// Write test for initializeTimes and updateTimes