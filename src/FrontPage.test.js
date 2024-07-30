import { render, screen } from '@testing-library/react';
import FrontPage from './FrontPage';

jest.mock('axios');
jest.mock('react-router-dom');

test('renders Front Page description ', () => {
    render(<FrontPage />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Click here to VIS");
});

test('renders Front Page button ', () => {
    render(<FrontPage />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Attempt Now");
});