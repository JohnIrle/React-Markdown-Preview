import React from "react";
import { render, screen, getByText } from "@testing-library/react";
import { Preview } from "../Preview";

const stateString = `# Try me \n ## I work \n
- lists \n - are \n - nice \n\n **Bold** \n\n *italic*\n
| one   | two   | three |\n |-------|-------|-------|\n | value  | value  | value  | \n `;

describe("Preview component", () => {
  it("renders html", () => {
    const snapshot = render(<Preview state={stateString} />);

    expect(snapshot).toMatchSnapshot();

    expect(screen.getByText(/try me/i)).toBeInTheDocument();
    expect(screen.getByText(/i work/i)).toBeInTheDocument();
    expect(screen.getByText(/bold/i)).toBeInTheDocument();
    expect(screen.getByText(/italic/i)).toBeInTheDocument();
  });
});
