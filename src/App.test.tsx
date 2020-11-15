import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(() => cleanup());

test("renders", async () => {
  render(<App />);
});

test("displays inital example", async () => {
  render(<App />);
  expect(screen.getByText("# Try me ## I work")).toBeInTheDocument();
  expect(screen.getByText("Try me")).toBeInTheDocument();
  expect(screen.getByText("I work")).toBeInTheDocument();
});

test("renders new markdown", async () => {
  render(<App />);
  userEvent.type(screen.getByRole("textbox"), "{enter} # A new header");
  userEvent.type(screen.getByRole("textbox"), "{enter} ## Another h2");
  expect(screen.getByText("A new header")).toBeInTheDocument();
  expect(screen.getByText("Another h2")).toBeInTheDocument();
});
