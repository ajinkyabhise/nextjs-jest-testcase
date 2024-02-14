import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../src/app/about/page";

describe("About", () => {
  it("renders heading and paragraph", () => {
    render(<About />);
    const headingElement = screen.getByRole("heading", { name: /about/i });
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/about us page/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("button", () => {
    render(<About />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
