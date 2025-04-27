// SPDX-FileCopyrightText: 2021 John Irle
//
// SPDX-License-Identifier: MIT

import React from "react";
import { render, screen } from "@testing-library/react";
import { Preview } from "../Preview";

const stateString = `# Try me \n ## I work \n
- lists \n - are \n - nice \n\n **Bold** \n\n *italic*\n
| one   | two   | three |\n |-------|-------|-------|\n | value  | value  | value  | \n `;

describe("Preview component", () => {
  it("renders html", () => {
    const { container } = render(<Preview state={stateString} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/try me/i)).toBeInTheDocument();
    expect(screen.getByText(/i work/i)).toBeInTheDocument();
    expect(screen.getByText(/bold/i)).toBeInTheDocument();
    expect(screen.getByText(/italic/i)).toBeInTheDocument();
  });
});
