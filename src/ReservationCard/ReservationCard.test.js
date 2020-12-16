import React from 'react';
import ReservationCard from './ReservationCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReservationCard', () => {
  it('should render a ReservationCard', () => {
    render(<ReservationCard
      data={
        {
          "name": "Brittany",
          "date": "9/9",
          "time": "7:30",
          "number": 3
        } }
    />)

    const name = screen.getByText('Brittany');
    const date = screen.getByText('Reserved On 9/9');
    const time = screen.getByText('at 7:30 pm');
    const number = screen.getByText('3 guest(s)');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})