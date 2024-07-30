import { render, screen } from '@testing-library/react';
import EditInsurance from './EditInsurance';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

test('renders Update Insurance ID ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance ID :");
});

test('renders Update Insurance Number text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("number");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Number :");
});

test('renders Update Insurance Taken Date text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("date");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Taken Date :");
});

test('renders Update Insurance Valid Date text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("vdate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Valid Date :");
});

test('renders Update Insurance Amount text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("amount");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Amount :");
});

test('renders Update Customer Vehicle Id text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("vid");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Vehicle Id :");
});

test('renders Update Insurance Total text field ', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("total");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Total :");
});

test('renders Update customers update button', () => {
    render(<EditInsurance />);
    const linkElement = screen.getByRole("update");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});