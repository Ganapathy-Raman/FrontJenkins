import { render, screen } from '@testing-library/react';
import Login from './Login';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Login ', () => {
    render(<Login />);
    const linkElement = screen.getByTestId("head");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Login");
});

test('renders Login description ', () => {
    render(<Login />);
    const linkElement = screen.getByRole("desc");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Login now and get full access to our app.");
});

test('renders Login username ', () => {
    render(<Login />);
    const linkElement = screen.getByRole("username");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Username");
});

test('renders Login password ', () => {
    render(<Login />);
    const linkElement = screen.getByRole("password");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Password");
});

test('renders Login Submit ', () => {
    render(<Login />);
    const linkElement = screen.getByRole("submit");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
