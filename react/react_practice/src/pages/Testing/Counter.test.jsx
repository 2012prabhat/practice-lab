import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments count when button is clicked", async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: "Increment" });
  // userEvent is async
  await userEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
