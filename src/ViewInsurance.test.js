import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewInsurance from './ViewInsurance';

// test('renders link add test', () => {
//     render(<BrowserRouter>
//       <ViewInsurance />
//     </BrowserRouter>);
//     const link = screen.getByText('Add Insurance +');
//     fireEvent.click(link);
//     expect(window.location.pathname).toBe('/addinsurance');
//   });

jest.mock('axios');
jest.mock('react-router-dom');

test('renders view Insurances title ', () => {
    render(<ViewInsurance />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Online Vehicle Insurance System");
});

test('renders view Insurances Action ', () => {
    render(<ViewInsurance />);
    const linkElement = screen.getByRole("action");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Action");
});


