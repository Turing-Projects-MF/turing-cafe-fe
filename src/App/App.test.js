import React from 'react';
import App from './App';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe('App', () => {
  it('Should add a new reservation', () => {
    render(
      <App />
    )

    const nameField = screen.getByPlaceholderText('Name')
    const dateField = screen.getByPlaceholderText('Date (mm/dd)')
    const timeField = screen.getByPlaceholderText('Time')
    const numberField = screen.getByPlaceholderText('Number of guests')
    const button = screen.getByText('Make Reservation')

    userEvent.type(nameField, 'Sally')
    userEvent.type(dateField, '12/20')
    userEvent.type(timeField, '7:00')
    userEvent.type(numberField, '1')
    userEvent.click(button)

    expect(screen.getByText('Sally')).toBeInTheDocument()
    expect(screen.getByText('Reserved On 12/20')).toBeInTheDocument()
    expect(screen.getByText('at 7:00 pm')).toBeInTheDocument()
    expect(screen.getByText('1 guest(s)')).toBeInTheDocument()

  })
})