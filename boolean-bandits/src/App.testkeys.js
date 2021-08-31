import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{/*
// d6c53aae75efc72c0b7192549d37d088 (key)
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://chrome.google.com/webstore/detail/forecast-weather/apppnocgcpmppeffifpcdgdabiglbfkl
// http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API key}


*/}