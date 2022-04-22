import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Text from "../../Text/Text";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("should render text component", () => {
  render(<Text />);

  var textElem = screen.getByTestId("text");

  expect(textElem).toBeInTheDocument();
});

test("text matches snapshot", () => {
  const component = renderer.create(<Text />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});