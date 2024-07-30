import { render, screen } from '@testing-library/react';
import Head from './Head';


jest.mock('axios');
jest.mock('react-router-dom');

test('renders Head navbar ', () => {
    render(<Head />);
    const linkElement = screen.getByRole("header");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Online Vehicle Insurance System");
});

