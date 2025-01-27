import { render, screen } from "@testing-library/react";
import App from "../src/App"

test("renders button with label", () => {
  render(<App/>);
  // expect(screen.getByText('Click Me')).toBeInTheDocument();
});
