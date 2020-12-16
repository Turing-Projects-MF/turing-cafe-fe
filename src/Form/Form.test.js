import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe('Form', () => {
  it('should render correctly', () => {
    render(<Form addReservation={ jest.fn() } />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('should render a Form with inputs', () => {
    render(<Form addReservation={ jest.fn() } />)

    const name = screen.getByPlaceholderText('Name');
    const date = screen.getByPlaceholderText('Date (mm/dd)');
    const time = screen.getByPlaceholderText('Time');
    const number = screen.getByPlaceholderText('Number of guests');
    const button = screen.getByText('Make Reservation')

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it('should be able to make a new reservation', () => {
    const mockReservation = jest.fn()
    render(<Form addReservation={ mockReservation } />)

    const button = screen.getByText('Make Reservation')
    userEvent.click(button)

    expect(mockReservation).toHaveBeenCalled();
  })
})