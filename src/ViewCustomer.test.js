import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewCustomer from './ViewCustomer';

test('renders link add test', () => {
    render(<BrowserRouter>
      <ViewCustomer />
    </BrowserRouter>);
    const link = screen.getByText('Add Customer +');
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/add');
  });

// jest.mock('axios');
// jest.mock('react-router-dom');

// test('renders view Customers title ', () => {
//     render(<ViewCustomer />);
//     const linkElement = screen.getByRole("heading");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("Online Vehicle Insurance System");
// });

// test('renders view Customers Action ', () => {
//     render(<ViewCustomer />);
//     const linkElement = screen.getByRole("action");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("Action");
// });
