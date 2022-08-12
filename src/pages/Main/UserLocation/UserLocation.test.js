import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserLocation from './UserLocation';

describe('<UserLocation />', () => {
  test('it should mount', () => {
    render(<UserLocation />);
    
    const userLocation = screen.getByTestId('UserLocation');

    expect(userLocation).toBeInTheDocument();
  });
});