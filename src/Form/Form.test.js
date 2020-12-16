import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('Should render a Form with inputs', () => {
    render(<Form />)

    const name = screen.getByPlaceholderText('Name');
    const date = screen.getByPlaceholderText('Date (mm/dd)');
    const time = screen.getByPlaceholderText('Time');
    const number = screen.getByPlaceholderText('Number of guests');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})