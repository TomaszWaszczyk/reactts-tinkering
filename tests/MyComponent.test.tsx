import { render, screen } from "@testing-library/react";
import MyComponent from "../src/components/MyComponent";

test("renders button with label", () => {
  render(<MyComponent title="Test Title" />);
  // expect(screen.getByText('Click Me')).toBeInTheDocument();
});
