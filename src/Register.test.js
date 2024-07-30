import { render, screen } from '@testing-library/react';
import Register from './Register';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Register ', () => {
    render(<Register />);
    const linkElement = screen.getByTestId("head");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Register");
});

test('renders Register description ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("desc");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Register now and get full access to our app.");
});

test('renders Register Firstname ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("fname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Firstname");
});

test('renders Register Lastname ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("lname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Lastname");
});

test('renders Register Username ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("uname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Username");
});

test('renders Register Email ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("email");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Email");
});

test('renders Register Password ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("pwd");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Password");
});

test('renders Register Confirm Password ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("cpwd");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Confirm password");
});

test('renders Register footer ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("alr");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Already have an acount ? ");
});

test('renders Register Submit ', () => {
    render(<Register />);
    const linkElement = screen.getByRole("submit");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
