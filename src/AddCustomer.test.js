import { render, screen } from '@testing-library/react';
import AddCustomer from './AddCustomer';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Add customers title ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Add Customer's Data");
});

test('renders Add Customers Name ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Name :");
});

test('renders Add customers Name text field ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add customers Name text field ", () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusname");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter customername")).toHaveTextContent("");

});

test('renders Add Customers Age ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("age");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Age :");
});

test('renders Add customers Age text field ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusage");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add customers Age text field ", () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusage");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter customerage")).toHaveTextContent("");

});

test('renders Add Customers Address ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Address :");
});

test('renders Add customers Address text field ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusaddress");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add customers Address text field ", () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusaddress");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter customeraddress")).toHaveTextContent("");

});

test('renders Add Customers Gender ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("gender");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Gender :");
});

test('renders Add customers Gender text field ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusgender");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add customers Gender text field ", () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("cusgender");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter customergender")).toHaveTextContent("");

});

test('renders Select Insurance Record ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("record");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Select Insurance Record :");
});

test('renders Select a record ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("fetch");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveValue("");
});

test('renders Add customers submit button', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("submit");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});