import { render, screen } from '@testing-library/react';
import EditCustomer from './EditCustomer';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

test('renders Update Customers ID ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer ID :");
});

test('renders Update customers Name text field ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Name :");
});

test('renders Update customers Age text field ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("age");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Age :");
});

test('renders Update customers Address text field ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Address :");
});

test('renders Update customers Gender text field ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("gender");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Gender :");
});

test('renders Update customers update button', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("update");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});