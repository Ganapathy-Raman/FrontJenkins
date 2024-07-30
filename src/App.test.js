import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('All Tests', () => {


  test("renders 'Learn React'", () => {
    render(<App />);
    const linkElement = screen.getByText('Learn React');
    expect(linkElement).toBeInTheDocument();
  });

  // test.skip("renders 'Hi!!!'", () => {
  //   render(<App />);
  //   const linkElement = screen.getByText('Hi!!!');
  //   expect(linkElement).toBeInTheDocument();
  // });

  it("renders 'Welcome to Relevantz!!!'", () => {
    render(<App />);
    const linkElement = screen.getByText('Welcome to Relevantz!!!');
    expect(linkElement).toBeInTheDocument();
  });


  // it("renders 'checkbox'", () => {
  //   render(<App />);
  //   const linkElement = screen.getByTestId("checkbox");
  //   expect(linkElement).toBeInTheDocument();
  //   expect(linkElement).toBeChecked();
  // });


  // it("renders 'checkbox'", () => {
  //   render(<App />);
  //   const linkElement = screen.getByTestId("checkbox");
  //   expect(linkElement).toBeInTheDocument();
  //   expect(linkElement).toBeChecked();
  // });

  // it("Snapshot test ", () => {
  //   render(<App />);
  //   const comp = renderer.create(<App />);
  //   const tree = comp.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

});
