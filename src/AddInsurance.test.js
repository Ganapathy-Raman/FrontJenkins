import { render, screen } from '@testing-library/react';
import AddInsurance from './AddInsurance';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Add Insurances title ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Add Insurance's Data");
});

test('renders Add Insurance Number ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("num");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Number :");
});

test('renders Add Insurance Number text field ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insnum");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add Insurance Number text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insnum");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter insurance number")).toHaveTextContent("");

});

test('renders Add Insurance Taken Date ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("tdate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Taken Date :");
});

test('renders Add Insurance Taken Date text field ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("instdate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add Insurance Taken Date text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("instdate");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter insurance taken date")).toHaveTextContent("");

});

test('renders Add Insurance Valid Date ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("vdate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Valid Date :");
});

test('renders Add Insurance Valid Date text field ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insvdate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add Insurance Valid Date text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insvdate");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter insurancevaliddate")).toHaveTextContent("");

});

test('renders Add Insurance Amount ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("amount");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Amount :");
});

test('renders Add Insurance Amount text field ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insamount");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add Insurance Amount text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("insamount");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter insurance amount")).toHaveTextContent("");

});

test('renders Add Customer Vehicle Id ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("vid");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Vehicle Id :");
});

// test('renders Add Customer Vehicle Id text field ', () => {
//     render(<AddInsurance />);
//     const linkElement = screen.getByRole("cusvid");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("");
// });

test("renders Add Customer Vehicle Id text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("cusvid");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter customer vehicle id")).toHaveTextContent("");

});

test('renders Add Insurance Total ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("total");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Insurance Total :");
});

test('renders Add Insurance Total text field ', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("instotal");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
});

test("renders Add Insurance Total text field ", () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("instotal");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter insurance total")).toHaveTextContent("");

});

test('renders Add Insurances submit button', () => {
    render(<AddInsurance />);
    const linkElement = screen.getByRole("submit");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});