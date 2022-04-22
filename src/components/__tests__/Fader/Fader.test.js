import { render, screen, cleanup } from "@testing-library/react";
import Fader from "../../Fader/Fader";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("should render fader component", () => {
  render(<Fader text="test" />);

  const faderElem = screen.getByTestId("fader");

  expect(faderElem).toBeInTheDocument();
  expect(faderElem).toHaveTextContent("test");
  expect(faderElem).toHaveClass("fade-in");
});

test("fader matches snapshot", () => {
  const component = renderer.create(<Fader />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
