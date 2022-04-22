import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Link from "../../Link/Link";

afterEach(() => {
  cleanup();
});

test("renders correctly", () => {
  const component = renderer.create(
    <Link page="https://github.com/aseemwangoo">Made with ❤️ - Aseem</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
