import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("renders hello", () => {
  render(<Hello />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
