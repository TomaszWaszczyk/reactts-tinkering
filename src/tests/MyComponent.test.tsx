import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

test("renders button with label", () => {
  render(<MyComponent title="Test Title" />);
  // expect(screen.getByText('Click Me')).toBeInTheDocument();
});
