import { render, screen } from '@testing-library/react';
import Front from './Front';

jest.mock('axios');
jest.mock('react-router-dom');

test('renders Front description ', () => {
    render(<Front />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Click here to VIS");
});

test('renders Front button ', () => {
    render(<Front />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Attempt Now");
});