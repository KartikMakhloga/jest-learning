import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should have button with text Click Me", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "click me" })
    ).toBeInTheDocument();
  });

  it("should have input field with label Enter Random Text", () => {
    render(<Home />);
    //if we have label included with input
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it("should have input field with label Enter Specific Text", () => {
    render(<Home />);
    //if we have label included with input
    expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
  });

  it("should have input field with placeholder text search", () => {
    render(<Home />);
    //if we do not have label included with input
    expect(screen.getByDisplayValue(/KARTIK/)).toBeInTheDocument();
  });
});
