import { render, screen } from '@testing-library/react';
import Header from './Header';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Header navbar ', () => {
    render(<Header />);
    const linkElement = screen.getByRole("header");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Online Vehicle Insurance System");
});

